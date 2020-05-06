export default class Table {
    data = [];

    constructor(api) {
        this.api = api;
        this.smsTBody = document.querySelector('#smsTBody');
        this.getData();
    }

    getData() {
        this.api.getAllSMS().then(res => {
            this.renderData(res.result);
        });
    }

    renderData(data) {
        this.smsTBody.innerHTML = '';
        data &&
            data.forEach(row => {
                this.smsTBody.innerHTML += this.createRow(row);
            });
    }

    addToTable(row) {
        this.smsTBody.innerHTML += this.createRow(row);
    }

    createRow(row) {
        console.log(row);

        return `
            <tr>
                <th scope="row">${row.id}</th>
                <td>${row.from}</td>
                <td>${row.to}</td>
                <td>${row.content}</td>
                <td>${new Date(+row.date).toLocaleDateString('en-US')}</td>
                <td class="${row.status ? 'text-success' : 'text-danger'}">${row.status ? 'success' : 'failure'}</td>
            </tr>
        `;
    }
}
