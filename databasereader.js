var http = require('http');
var url = require('url');
var util = require('util');
var my_page=0;
var my_ord=0;
var my_value;
http.createServer(function(req, res){

    res.writeHead(200, {'Content-Type': 'text/plain','Access-Control-Allow-Origin':'*',"Access-Control-Allow-Methods":"PUT,POST,GET,DELETE,OPTIONS"});
    // 解析 url 参数
    //  console.log(req);
    var params = url.parse(req.url, true).query;
    // console.log(params);
    if(params.type==='1'){//初次渲染页面
        my_page=params.page;
        // console.log(2);
        var mysql      = require('mysql');
        var connection = mysql.createConnection({
            host     : '122.152.211.11',
            user     : 'root',
            password : 'luanhaozheng1012',
            database : 'database'
        });
        connection.connect();

        var num=my_page*10-10;
        var sql='select * from films_all limit '+num+',10'
        // console.log(sql)
        connection.query(sql, function(err, rows, fields) {
            // console.log(rows);
            if (err) throw err;
            console.log('selected after deleted');
            // console.log(rows.length);
            // for(var i=0;i<rows.length;i++ ){
            //     console.log(typeof(rows));
            // }
            var result=JSON.stringify(rows);
            // console.log(typeof(result));
            res.write(result);
            res.end();
            console.log('\n');
            connection.end();

        });
    }
    else if(params.type==='2'){
        my_ord=params.order;
        // console.log(my_ord);
        var mysql      = require('mysql');
        var connection = mysql.createConnection({
            host     : '122.152.211.11',
            user     : 'root',
            password : 'luanhaozheng1012',
            database : 'database'
        });
        connection.connect();

        var a=my_ord-1;
        var sql='select * from films_all limit '+a+',1'
        // console.log(sql)
        connection.query(sql, function(err, rows, fields) {
            // console.log(rows);
            if (err) throw err;
            console.log('selected after deleted');
            // console.log(rows.length);
            // for(var i=0;i<rows.length;i++ ){
            //     console.log(typeof(rows));
            // }
            var result=JSON.stringify(rows);
            // console.log(typeof(result));
            res.write(result);
            res.end();
            console.log('\n');

            connection.end();
        });
    }
    else if(params.type==='3'){
        my_value=params.value;
        // console.log(my_value);
        var mysql      = require('mysql');
        var connection = mysql.createConnection({
            host     : '122.152.211.11',
            user     : 'root',
            password : 'luanhaozheng1012',
            database : 'database'
        });
        connection.connect();


         var sql='select num from films_all where title= \''+my_value+'\''
         // console.log(sql)
        connection.query(sql, function(err, rows, fields) {
            console.log(rows);
            if (err) throw err;
            console.log('selected after deleted');
            // console.log(rows.length);
            // for(var i=0;i<rows.length;i++ ){
            //     console.log(typeof(rows));
            // }
            if(rows[0]){
                console.log(1);
                // console.log(rows[0].num);
                // var result=JSON.stringify(rows);
                // console.log(typeof(result));
                 var result=rows[0]['num'];
                // result=toString(result);.
                result=result.toString();
                // console.log(typeof (result));
                res.write(result);
                res.end();
                console.log('\n');
            }
            else{
                //console.log(2);
                 var a='0';
                // //a=toString(a);
                // console.log(a)
                res.write(a);
                res.end();
            }

            connection.end();

        });
    }
    // my_page=params.page;

    // res.write("website URL:" + params.page);
    //
    // res.end();

	
}).listen(3000);

function  databasereader(page) {


}