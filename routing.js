
const fs = require("fs");
const url = require('url')

function routing (req, res){
    const path = url.parse(req.url).pathname
    console.log(path)

    switch (path) {
        case '/' : res.end('Main')
            break;
        case '/user': res.end('user')
    
        default: res.end('this page not found')
            break;
    }
}

module.exports = routing