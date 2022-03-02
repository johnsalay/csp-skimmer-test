var express = require('express');
var router = express.Router();
var fs = require('fs')
var queryString = require('query-string');


/* GET sends username and password from form. */
router.get('/g/:u?/:p?', function(req, res, next) {

    const content = req.query
    const { u, p } = content
    try {
        let savedData = fs.readFileSync('./users.txt', 'utf8')
        if(!savedData) savedData = [];
        else savedData = JSON.parse(savedData)

        if (!savedData.some(e => (e.u === u && e.p === p))) {
            savedData.push({ u, p })
        }
        const data = fs.writeFileSync('./users.txt', JSON.stringify(savedData))
        res.send('Success')
        //file written successfully
    } catch (err) {
        res.send('Fail')
        console.error(err)
    }
});

module.exports = router;
