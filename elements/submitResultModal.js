export default class SubmitResultModal {
    constructor() {
        this.modal = $('#submitResultModal');
        this.submitResultButton = document.querySelector('#submitResultButton');
        this.messege = document.querySelector('#submitResult');

        this.submitResultButton.addEventListener('click', () => this.hide());
    }

    show(messege, cb) {
        this.messege.innerText = messege;
        this.modal.modal('show');
        this.cb = cb;
    }

    hide() {
        this.modal.modal('hide');
        this.cb();
    }
}
