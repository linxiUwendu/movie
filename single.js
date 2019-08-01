var my_ord=0;

window.onload=function(){

    var ord=window.localStorage.getItem('ord');

    my_ord=ord;
    sendRequest();
    // console.log(ord);

    // $.ajax({
    //     type: "POST",//请求方式
    //     url: "films.json",//地址，就是json文件的请求路径
    //     dataType: "json",//数据类型可以为 text xml json  script  jsonp
    //     success: function (result) {//返回的参数就是 action里面所有的有get和set方法的参数
    //         // console.log(result);
    //         // console.log(page);
    //         res = result[ord-1];
    //         //console.log(res);
    //         //此时将要显示的数据读取到 了js文件的res中
    //         //res是一个obj的形式，可以按值访问
    //         //console.log(res);
    //         changecontent(res);
    //     }
    // });

};
function sendRequest() {
    var xmlHttpReq = init();
    var result;
    function init() {
        if (window.XMLHttpRequest) {
            return new XMLHttpRequest();
        }
        else if (window.ActiveXObject) {
            return new ActiveXObject("Microsoft.XMLHTTP");
        }
    }

    xmlHttpReq.onreadystatechange=function(){
        if(xmlHttpReq.readyState===4)
        {
            result=JSON.parse(xmlHttpReq.responseText);
              // console.log(result);
            // addBox(result);
            changeContent(result[0]);

        }
    }
    xmlHttpReq.open("GET", "http://122.152.211.11:3000/asn?type=2&order="+my_ord, true);
    // xmlHttpReq.onreadystatechange=processRequest;
    // console.log(xmlHttpReq)
    xmlHttpReq.send();
}
function changeContent(res){
    var a=document.getElementsByClassName("movie_rating")[0];
    // console.log(JSON.parse(res['rating']));
    a.innerHTML=JSON.parse(res['rating'])['average'];
    var b=document.getElementsByClassName("img-responsive")[0];
    b.src=res['poster'];
    b.style.width='400px';
    b.style.height='400px';
    //海报和评分的问题解决

    var c=document.getElementById("country");
    var coun="";
    //console.log(JSON.parse(res['countries']));
    for(let i=0;i<JSON.parse(res['countries']).length;i++){
        coun=coun+JSON.parse(res['countries'])[i]+','
    }
    c.innerHTML=coun;
    //国家的问题解决
    var d=document.getElementById("year");
    d.innerHTML=res['year'];
    //年份的问题解决

    var e=document.getElementById("cate");
    var cate="";
    //console.log(res['countries']);
    for(let i=0;i<JSON.parse(res['genres']).length;i++){
        cate=cate+JSON.parse(res['genres'])[i]+',';
        // cate=cate+res['casts'][i]['name']+','
    }
    e.innerHTML=cate;

    var f=document.getElementById("rel");
    f.innerHTML=JSON.parse(res['pubdate'])[0];

    var g=document.getElementById("dir");
    var dir="";
    //console.log(res['countries']);
    for(let i=0;i<JSON.parse(res['directors']).length;i++){
        dir=dir+JSON.parse(res['directors'])[i]['name']+',';
        // cate=cate+res['casts'][i]['name']+','
    }
    g.innerHTML=dir;
    // //出版日期，导演解决

    var h=document.getElementById("act");
    var act="";
    //console.log(res['countries']);
    for(let i=0;i<JSON.parse(res['casts']).length;i++){
        act=act+JSON.parse(res['casts'])[i]['name']+',';
        // cate=cate+res['casts'][i]['name']+','
    }
    h.innerHTML=act;
    //演员解决

    var i=document.getElementById("aka");
    var aka="";
    for(let i=0;i<JSON.parse(res['aka']).length;i++){
        aka=aka+JSON.parse(res['aka'])[i]+','+'  ';
        // cate=cate+res['casts'][i]['name']+','
    }
    i.innerHTML=aka;

    var j=document.getElementById("lan");
    var lan="";
    for(let i=0;i<JSON.parse(res['languages']).length;i++){
        lan=lan+JSON.parse(res['languages'])[i]+','+'  ';
        // cate=cate+res['casts'][i]['name']+','
    }
    j.innerHTML=lan;

    var k=document.getElementById("wri");
    var wri="";
    for(let i=0;i<JSON.parse(res['writers']).length;i++){
        wri=wri+JSON.parse(res['writers'])[i]['name']+',';
        // cate=cate+res['casts'][i]['name']+','
    }
    k.innerHTML=wri;
    //
    var l=document.getElementById("tit");
    l.innerHTML=res['title'];

    var m=document.getElementById("dur");
    m.innerHTML=res['duration']+' mins';
    // 别名，语言，作者，名称，时长解决

    var n=document.getElementsByClassName("m_4")[0];
    n.innerHTML=res['summary'];

    var o=document.getElementsByClassName("down_btn")[0].innerHTML;
    o.href=res['site'];

    var p=document.getElementById("peo");
    p.innerHTML=JSON.parse(res['rating'])['rating_people'];

    var q=document.getElementById("sta");
    var sta="";
    for(let i=0;i<JSON.parse(res['rating'])['stars'].length;i++){
        sta=sta+JSON.parse(res['rating'])['stars'][i]+' , ';
        // cate=cate+res['casts'][i]['name']+','
    }
    q.innerHTML=sta;
}
function setDefaultImg(e){
    e.src = "images/my_bg.jpg";
    e.style.width='400px';
    e.style.height='400px';
}