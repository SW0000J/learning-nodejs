var http = require('http');
var fs = require('fs');
var url = require('url');
var app = http.createServer(function(request, response){
    var _url = request.url;
    /* 쿼리 스트링만 파싱하는 코드 */
    var queryData = url.parse(_url, true).query;
    console.log(_url);
    console.log(queryData);  // 객체를 반환
    console.log(queryData.id); // 객체의 id만 반환

    // request.url -> url
    if(_url == '/'){
        _url = '/index.html';
    }

    // request.url -> url
    if(_url == '/favicon.ico'){
        return response.writeHead(404);
    }

    response.writeHead(200);
    // 요청 경로 추가
    console.log(__dirname + _url); 
    response.end(queryData.id);
    /*  response.end(): 웹 브라우저의 요청에 응답
        fs.readFileSync(): 파일을 읽어서 전달       */
    //response.end(fs.readFileSync(__dirname + _url));
    //response.end('SW0000j: ' + url);
});

// 요청하는 포트: 3000
app.listen(3000);