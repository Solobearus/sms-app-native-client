import SmsFormModal from './elements/smsFormModal.js';
import popUp from './elements/popUp.js';
import Table from './elements/smsTable.js';
import api from './api/api.js';
import generateSMSPDFBtn from './elements/generateSMSPDFBtn.js';

class App {
    constructor() {
        this.table = new Table(api);
        this.popUp = new popUp();
        this.generateSMSPDFBtn = new generateSMSPDFBtn(api);
        this.form = new SmsFormModal(api, this.onSmsSent.bind(this), this.showPopUp.bind(this));
    }

    onSmsSent(row) {
        this.table.addToTable(row);
    }

    showPopUp(msg) {
        return this.popUp.show(msg);
    }
}

new App();
