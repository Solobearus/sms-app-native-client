
export default class Table {
    data = [];

    constructor(api) {
        this.api = api;
        this.smsTBody = document.querySelector('#smsTBody');
        this.getData();
    }

    getData() {
        this.api.getSMS()
            .then(res => {
                this.data = res;
                this.renderData();
            })
    }

    renderData() {
        this.smsTBody.innerHTML = '';
        this.data.forEach(row => {
            this.smsTBody.innerHTML += `
                    <tr>
                        <th scope="row">${row.id}</th>
                        <td>${row.from}</td>
                        <td>${row.to}</td>
                        <td>${row.content}</td>
                        <td>${new Date(row.date).toLocaleDateString("en-US")}</td>
                        <td>${row.status}</td>
                    </tr>`
        })
    }

    addToTable(row) {
        this.data.push(row);
        this.smsTBody.innerHTML += `
            <tr>
                <th scope="row">${row.id}</th>
                <td>${row.from}</td>
                <td>${row.to}</td>
                <td>${row.content}</td>
                <td>${new Date(row.date).toLocaleDateString("en-US")}</td>
                <td>${row.status}</td>
            </tr>`
    }
}

