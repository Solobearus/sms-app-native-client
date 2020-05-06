class API {
    getAllSMS() {
        return fetch(`http://localhost:3000/sms`, {
            method: 'GET',
            headers: {'Content-Type': 'application/json'}
        })
            .then(res => res.json())
            .catch(err => {
                throw new Error(err);
            });
    }
    sendSMS(sms) {
        return fetch(`http://localhost:3000/sms/send`, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({sms})
        })
            .then(res => res.json())
            .catch(err => {
                throw new Error(err);
            });
    }

    getSMSPDF() {
        return fetch(`http://localhost:3000/smspdf`, {
            method: 'GET'
        })
            .then(res => res.blob())
            .then(blob => {
                this.download(blob, 'pdf', 'sms');
            })
            .catch(err => {
                throw new Error(err);
            });
    }

    download(blob, format = 'pdf', name = 'default_name') {
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `${name}.${format}`;
        document.body.appendChild(a);
        a.click();
        a.remove();
    }
}
const api = new API();
export default api;
