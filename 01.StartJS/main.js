var http = require('http');
var fs = require('fs');
var app = http.createServer(function(request, response){
    var url = request.url;

    if(request.url == '/'){
        url = '/index.html';
    }

    if(request.url == '/favicon.ico'){
        return response.writeHead(404);
    }

    response.writeHead(200);
    // 요청 경로 추가
    console.log(__dirname + url); 
    /*  response.end(): 웹 브라우저의 요청에 응답
        fs.readFileSync(): 파일을 읽어서 전달       */
    response.end(fs.readFileSync(__dirname + url));
    //response.end('SW0000j: ' + url);
});

// 요청하는 포트: 3000
app.listen(3000);