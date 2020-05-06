export default class popUp {
    constructor() {
        this.popUp = $('#popUpModal');
        this.popUpButton = document.querySelector('#popUpButton');
        this.popUpMessege = document.querySelector('#popUpMessege');

        this.popUpButton.addEventListener('click', () => this.hide());
    }

    show(msg) {
        return new Promise((resolve, reject) => {
            console.log('test');
            this.popUpMessege.innerText = msg;
            this.popUp.modal('show');
            resolve();
        });
    }

    hide() {
        return new Promise((resolve, reject) => {
            this.popUp.modal('hide');
            resolve();
        });
    }
}
