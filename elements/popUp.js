export default class popUp {
    constructor() {
        this.popUp = $('#popUp');
        this.popUpButton = document.querySelector('#popUpButton');
        this.messege = document.querySelector('#popUpMessege');

        this.popUpButton.addEventListener('click', () => this.hide());
    }

    show(popUpMessege) {
        return new Promise((resolve, reject) => {
            this.popUpMessege.innerText = popUpMessege;
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
