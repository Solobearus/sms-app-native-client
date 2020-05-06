export default class SmsFormModal {
    constructor(api, onCloseCB, popUp) {
        this.api = api;
        this.popUp = popUp;
        this.fromInput = document.querySelector('#smsFromInput');
        this.toInput = document.querySelector('#smsToInput');
        this.contentInput = document.querySelector('#smsContentInput');

        this.smsFormButton = document.querySelector('#smsFormButton');
        this.smsFormButton.addEventListener('click', () => this.send());
        this.modal = $('#smsModal');
        this.onCloseCB = onCloseCB;
    }

    isFormValid(sms) {
        if (!sms.from.match(/^05\d([-]{0,1})\d{7}$/)) {
            return {valid: false, msg: 'phone from is not valid'};
        }
        if (!sms.to.match(/^05\d([-]{0,1})\d{7}$/)) {
            return {valid: false, msg: 'phone to is not valid'};
        }
        if (sms.content === '') {
            return {valid: false, msg: 'content is not valid'};
        }
        return {valid: true};
    }

    hide() {
        this.modal.modal('hide');
    }

    send() {
        const sms = {
            from: this.fromInput.value,
            to: this.toInput.value,
            content: this.contentInput.value,
            date: +Date.now()
        };

        const isFormValid = this.isFormValid(sms);

        if (!isFormValid.valid) {
            this.popUp.show(isFormValid.msg);
        } else {
            this.api
                .sendSMS(sms)
                .then(res => {
                    console.log('res', res);

                    this.onCloseCB(res.result);
                    if (res.result.status) {
                        this.popUp.show('sms successed').then(() => this.hide());
                    } else {
                        this.popUp.show('sms failed').then(() => this.hide());
                    }
                })
                .catch(err => this.popUp.show('server err : ' + err).then(() => this.hide()));
        }
    }
}
