import SmsFormModal from './elements/smsFormModal.js'
import SubmitResultModal from './elements/submitResultModal.js'
import Table from './elements/smsTable.js'
import api from './api/api.js'
import GenerateSMSPDF from './elements/generateSMSPDF.js'

class App {
    constructor() {
        this.table = new Table(api);
        this.submitResultModal = new SubmitResultModal();
        this.generateSMSPDF = new GenerateSMSPDF(api);
        this.form = new SmsFormModal(
            api,
            row => this.onSmsSent(row),
            this.submitResultModal
        );
    }

    onSmsSent(row) {
        this.table.addToTable(row);
    }
}

const app = new App();