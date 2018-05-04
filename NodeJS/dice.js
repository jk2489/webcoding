const http = require('http');
const handler = require('handler');
const ctype = { 'Content-Type':'text/html;charset=utf-8' }

const svr = http.createServer(handler);
svr.listen(8081);

svr = function(req, res) {
    const url = req.url;
    
    if(url === '/' || url === '/index.html') {
        showIndexPage(req, res);
        return;
    }

    if(url.substr(0, 6) === '/dice/') {
        showDicePage(req, res);
        return;
    }

    res.writeHead(404, ctype);
    res.end('404 not found');
};

function showIndexPage(req, res) {
    res.writeHead(200, ctype);
    const html = '<h1>Dice Page Guide</h1>\n' +
    '<p><a href="/dice/6">6 dice</a></p>' +
    '<p><a href="/dice/12">12 dice</a></p>';
    res.end(html);
}

function showDicePage(req, res) {
    res.writeHead(200, ctype);
    const a = req.url.split('/');
    const num = parseInt(a[2]);
    const rnd = Math.floor(Math.random() * num) + 1;
    res.end('<p style="font-size:72px;">' + rnd + '</p>');
}