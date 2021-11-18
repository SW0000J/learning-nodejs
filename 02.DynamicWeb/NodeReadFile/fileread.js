var fs = require('fs');
fs.readFile(__dirname + '/sample.txt', 'utf8', function(err, data){
    console.log(data);
});

// 파일을 읽을 때는 경로를 같게