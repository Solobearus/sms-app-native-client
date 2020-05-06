export default class generateSMSPDFBtn {
    constructor(api) {
        this.generatePDFBtn = document.querySelector('#generatePDF');
        this.generatePDFBtn.addEventListener('click', () => this.generatePDF());
        this.api = api;
    }

    generatePDF() {
        this.api.getSMSPDF();
    }
}
