// if(order!=="undefined"){
//     console.log(page);
//     console.log(order);
//
// }
// else{
// if(window.location.href.indexOf("index.html")>-1) {
var big_page=1;//大页码
var page = 1;//页码
var order = 0;//点击序号
var my_value;//搜索内容


window.onload=function(){


    if(window.location.href.indexOf("index.html")>-1){//当前是index界面

        var res=[];
        //console.log(1);
        var a=document.getElementsByClassName("but");
        // console.log(a[0]);
        var b=document.getElementsByClassName("num");
        for(let i=0;i<a.length;i++){
            a[i].onclick=changepage;
        }
        for(let j=0;j<b.length;j++){
            b[j].onclick=single;//跳转到新的界面
        }

        var c=document.getElementById("button");
        //console.log(c);
        c.onclick=getValue;
        // console.log(1);

        //左右箭头
        var le=document.getElementsByClassName("left");
        // console.log(le[0]);
        le[0].onclick=page_m;

        var re=document.getElementsByClassName("right");
        // console.log(re[0]);
        re[0].onclick=page_a;

        sendRequest()
        // changepage();
        // $.ajax({
        //     type: "POST",//请求方式
        //     url: "films.json",//地址，就是json文件的请求路径
        //     dataType: "json",//数据类型可以为 text xml json  script  jsonp
        //     success: function (result) {//返回的参数就是 action里面所有的有get和set方法的参数
        //         // console.log(result);
        //         // console.log(page);
        //         res = result.slice(10 * page - 10, 10 * page);
        //         //console.log(res);
        //         //对该页面的十个进行渲染即可
        //         addBox(res);
        //     }
        // });
    }
};
function sendValue() {
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
             result=xmlHttpReq.responseText;
             // alert(result);
             result=parseInt(result);
             // alert(typeof (result))
             if(result>0){
                 location.href = 'single.html';

                 window.localStorage.setItem('ord',result);
                 window.location="single.html";

             }
             else{
                 alert("I'm sorry,please check the name of the movie you searched for.")
             }

            // addBox(result);
        }
    }

    xmlHttpReq.open("GET", "http://122.152.211.11:3000/asn?type=3&value="+my_value, true);
    // xmlHttpReq.onreadystatechange=processRequest;
    // console.log(xmlHttpReq)
    xmlHttpReq.send();

}
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
             addBox(result);

        }
    }
    var a="http://122.152.211.11:3000/asn?type=1&page="+page;
    // console.log(typeof (a));
    xmlHttpReq.open("GET", "http://122.152.211.11:3000/asn?type=1&page="+page, true);
    // xmlHttpReq.onreadystatechange=processRequest;
    // console.log(xmlHttpReq)
    xmlHttpReq.send();

    // if(result)
    // {
    //     return result;
    // }
    // return result;
}

//改变页码显示
function changeFoot(){
    for(let i=1;i<11;i++){

        var f_id='i'+i;
        // console.log(f_id);
        var foot=document.getElementById(f_id);
        // console.log(foot);
        foot.innerHTML=(big_page-1)*10+i;
    }

}
function page_a() {
    //console.log(3);
    if(big_page<100){
        big_page++;
         console.log(big_page);
        changeFoot();
    }

}
function page_m() {
     //console.log(2);
    if(big_page>1){
        big_page--;
        // console.log(big_page);
        changeFoot();
    }
}

function getValue(){

    var a=document.getElementById("sea").value;
    a=a.toString();

    my_value=a;
    sendValue();
    // console.log(a);
    // var my_res=[];
    // var my_ord=-1;
    // $.ajax({
    //     type: "POST",
    //     url: "films.json",
    //     dataType: "json",
    //     success: function (result) {
    //         my_res = result;
    //         //console.log(my_res);
    //
    //         for(let i=0;i<my_res.length;i++){
    //             if(my_res[i].title.indexOf(a)>-1){
    //                 my_ord=i+1;
    //                 //console.log(i);
    //             }
    //         }
    //         if(my_ord===-1){
    //             alert("I'm sorry, but there is no such movie here.")
    //         }
    //
    //         else if(my_ord>=0){
    //             console.log(my_ord);
    //             location.href = 'single.html';
    //             var num=my_ord;
    //             console.log(num);
    //             window.localStorage.setItem('ord',num);
    //             window.location="single.html";
    //         }
    //     }
    // });

    //a的数据读出来没有问题，目前的问题在于为什么点击会刷新


    // console.log(a);
}

function changepage(){
    // console.log(1);
    var a=this;
    // console.log(a);
    page=a.innerHTML;
    // console.log(page);

    sendRequest();
    // console.log(result);

    var c=document.getElementsByClassName("but");
    for(let i=0;i<c.length;i++){
        //console.log(c[i].classList);
        for(let j=0;j<c[i].classList.length;j++){
            // console.log(c[i].classList[j]);
            if(c[i].classList[j]==="page-current"){
                c[i].classList.remove("page-current");
            }
        }
    }
    a.classList.add("page-current");

    //处理页码显示样式
    //下一步，将page的信息传入database.js文件，得到page即可得到10条信息

    // $.ajax({
    //     type: "POST",//请求方式
    //     url: "films.json",//地址，就是json文件的请求路径
    //     dataType: "json",//数据类型可以为 text xml json  script  jsonp
    //     success: function(result){//返回的参数就是 action里面所有的有get和set方法的参数
    //         // console.log(result);
    //         // console.log(page);
    //         res=result.slice(10*page-10,10*page);
    //         //console.log(res);
    //         //对该页面的十个进行渲染即可
    //         addBox(res);
    //     }
    // });
}

function single(){
    console.log(page);

    var my_ord=this;
    order=my_ord.id.split("_")[1];
    // console.log(order);
    //至此page和order都没有问题，问题是加载新的界面时，两个值都回到了初始值
    location.href = 'single.html';

    var num=parseInt(page-1)*10+parseInt(order);
    // console.log(num);
    window.localStorage.setItem('ord',num);
    window.location="single.html";
}

function addBox(result){//向页面添加div
    //result是一个集合,所以需要先遍历
    result.forEach(function(value,index,array){
        // console.log(value);
        let c=index+1;
        var my_index="num_"+c;
        var bgi=result[index]['poster'];
        // var my_div=$(my_index);
        // console.log(bgi);
        var my_c=document.getElementById(my_index);
         // console.log(my_c);

        my_c.style.backgroundColor='gray';
        my_c.style.backgroundImage='url('+bgi+')';
        my_c.style.backgroundSize='200px 300px';
        var my_p=document.createElement("div");
        my_p.classList.add("my_text");
        my_p.innerHTML=[];
        //console.log(my_p.innerHTML);
         my_p.innerHTML=result[index]['title'];
        // my_p.href='movie.html';
        while(my_c.firstChild){
            var tem=my_c.firstChild;
            my_c.removeChild(tem);
        }
        // my_c.appendChild(my_pi);
        my_c.appendChild(my_p);
         //至此为止，已经解决了每个div的背景与文字
        //下一步解决的问题：添加链接以及重写single文件


    });
}