//*****************热门应用**************
$(function () {
    var num=0;
    var T=-4000;
    function timer(){
        num-=1000;
        if(num==T){
            $('.lbul').css('left',0);
            num=-1000;
        }
        $('.lbul').animate({'left':num+'px'},800);
    }
    var timerfn=setInterval(timer,3000);

    $(".leftIMG").hover(function(){
        clearInterval(timerfn);
        $(this).css('cursor','pointer');
    },function(){
        timerfn=setInterval(timer,3000);
    })
    $(".leftIMG").on('click',function(){
        num-=1000;
        if(num==T){
            $('.lbul').css('left',0);
            num=-1000;
        }
        $('.lbul').stop().animate({'left':num+'px'},800);
        console.log(num);
    })
    $(".rightIMG").hover(function(){
        clearInterval(timerfn);
        $(this).css('cursor','pointer');
    },function(){
        timerfn=setInterval(timer,3000);
    })
    $(".rightIMG").on('click',function(){
        num+=1000;
        if(num==1000){
            $('.lbul').css('left',-3000+'px');
            num=-2000;
        }
        $('.lbul').stop().animate({'left':num+'px'},800);
    })
});
//***********************Ajax请求********************
$(function () {
    // <!--报告精选数据请求-->
    $.ajax({
        url: "json/index.json",
        success: function (data) {
            //dot.js 模板引擎
            var tmpText = doT.template($("#index_cont").text());
            $("#report_dot .content").html(tmpText(data));
        },
        error:function (err) {
            throw err;
        }
    });
    // <!--导购精选数据请求-->
    $.ajax({
        url: "json/index.json",
        success: function (data) {
            //dot.js 模板引擎
            var tmpText = doT.template($("#index_shopping").text());
            $("#Shop .content").html(tmpText(data));
        },
        error:function (err) {
            throw err;
        }
    });
    // <!--酷玩精选数据请求-->
    $.ajax({
        url: "json/index.json",
        success: function (data) {
            //dot.js 模板引擎
            var tmpText = doT.template($("#index_plays").text());
            $("#plays .content").html(tmpText(data));
        },
        error:function (err) {
            throw err;
        }
    })
});
$(function () {
    var returnTop = document.getElementsByClassName("returnTop")[0];

    //文档滚动时发生的事件
    window.onscroll = function () {
        //可见高度  滚动条的垂直位置
        var clientHei = document.documentElement.clientHeight || document.body.clientHeight;
        var scrollHei = document.documentElement.scrollTop || document.body.scrollTop;

        //滚动条大于可见高度时   返回顶部出现
        if (scrollHei>clientHei){
            returnTop.style.display = "block";
        }
        //返回顶部的点击事件
        returnTop.onclick = function () {
            var timer = setInterval(function () {
                var top = document.documentElement.scrollTop || document.body.scrollTop;

                //鼠标点击返回顶部后  返回顶部消失
                if(top<300){

                    returnTop.style.display = "none";
                }

                var speed = Math.floor(-top/7);

                //获取到新的滚动条垂直位置  这里不能直接用top
                document.documentElement.scrollTop = document.body.scrollTop = top + speed;
                //滚动条到顶部后  清楚计时器
                if (top == 0){
                    clearInterval(timer);
                }
            },30);
        }
    }
    

    
    $(".playMove span").on("click",function(){
        console.log(333);
        $.ajax({
            url: "json/indextwo.json",
            success: function (data) {
                // console.log(data);
                //dot.js 模板引擎
                var tmpText = doT.template($("#index_playstwo").text());
                $("#report_dot .content").html(tmpText(data));
            },
            error:function (err) {
                throw err;
            }
        });
    })
});