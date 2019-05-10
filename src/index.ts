import http from "http";
let server = http.createServer();
import * as fs from "fs";
let html = fs.readFileSync("./rsc/html/index.html", "utf-8");
let js = fs.readFileSync("./render.js", "utf-8");
let model = fs.readFileSync('./rsc/model/Anime_character.gltf','utf-8')
server.on('request', function (req, res) {
    if ('/render.js' == req.url) {
        res.writeHead(200, { 'Content-Type': 'text/javascript' });
        res.write(js);
        res.end();
    }else if('/rsc/model/Anime_character.gltf' == req.url ){
        res.writeHead(200, { 'Content-Type': 'text/json' });
        res.write(model);
        res.end();
    }else{
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write(html);
        res.end();
    }
});

server.listen(10010);