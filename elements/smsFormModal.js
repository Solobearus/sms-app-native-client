export default class SmsFormModal {

    constructor(api, onCloseCB, submitResultModal) {
        this.api = api;
        this.submitResultModal = submitResultModal;
        this.fromInput = document.querySelector('#smsFromInput');
        this.toInput = document.querySelector('#smsToInput');
        this.contentInput = document.querySelector('#smsContentInput');

        this.smsFormButton = document.querySelector('#smsFormButton');
        this.smsFormButton.addEventListener("click", () => this.send());
        this.modal = $('#smsModal');
        this.onCloseCB = onCloseCB;
    }

    isFormValid(sms) {
        if (!sms.from.match(/^05\d([-]{0,1})\d{7}$/)) {
            return { valid: false, msg: 'phone from is not valid' }
        }
        if (!sms.to.match(/^05\d([-]{0,1})\d{7}$/)) {
            return { valid: false, msg: 'phone to is not valid' }
        }
        if (sms.content === '') {
            return { valid: false, msg: 'content is not valid' }
        }
        return { valid: true }
    }

    hide() {
        this.modal.modal('hide');
    }

    send() {

        const sms = {
            from: this.fromInput.value,
            to: this.toInput.value,
            content: this.contentInput.value,
            date: +Date.now(),
        }

        const isFormValid = this.isFormValid(sms);

        if (!isFormValid.valid) {
            this.submitResultModal.show(isFormValid.msg, () => {})
        } else {
            this.api.sendSMS(sms)
                .then(res => {
                    this.onCloseCB(res.sms)
                    if (res.sms.status) {
                        this.submitResultModal.show('sms successed', () => this.hide())
                    } else {
                        this.submitResultModal.show('sms failed', () => this.hide())
                    }
                })
                
                .catch(err =>
                    this.submitResultModal.show('server err : ' + err, () => this.hide())
                )
        }
    }
}