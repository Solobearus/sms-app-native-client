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
                throw new Error(err)
            })
    }

    static getSMSPDF() {
        return fetch(`http://localhost:3000/smspdf`,
            {
                method: 'GET',
                // headers: { 'Content-Type': 'application/json' },
            })
            .then((res) => res.blob())
            .then(blob => { 
                console.log(blob);
                
                var url = window.URL.createObjectURL(blob);
                var a = document.createElement('a');
                a.href = url;
                a.download = "filename.pdf";
                document.body.appendChild(a); // we need to append the element to the dom -> otherwise it will not work in firefox
                a.click();
                a.remove();  //afterwards we remove the element again   
            })
            .catch(err => {
                throw new Error(err)
            })
    }

    // static downloadPDF(pdf) {
    //     const linkSource = `data:application/pdf;base64,${pdf}`;
    //     const downloadLink = document.createElement("a");
    //     const fileName = "vct_illustration.pdf";

    //     downloadLink.href = linkSource;
    //     downloadLink.download = fileName;
    //     downloadLink.click();
    // }
}

export default API;