class API {

    static sendSMS(sms) {
        return fetch(`http://localhost:3000/sms/send`,
            {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ sms })
            })
            .then((res) => res.json())
            .catch(err => {
                console.error(err)
                throw new Error(err)
            })
    }

    static getSMS() {
        return fetch(`http://localhost:3000/sms`,
            {
                method: 'GET',
                headers: { 'Content-Type': 'application/json' },
            })
            .then((res) => res.json())
            .catch(err => {
                console.error(err)
                throw new Error(err)
            })
    }
}

export default API;