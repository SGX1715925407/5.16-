$(function () {
    //*************请求Ajax************
    $.ajax({
        url: "../use/json/Ontario.json",
        success: function (data) {
            //dot.js 模板引擎
            setTimeout(function () {
                var tmpText = doT.template($('#Ontario_tpl').text());
                $('#allList').html(tmpText(data));
                $("article .playing").hide();
                $("article .playMove").show();
            },500);
        },
        error:function (err) {
            throw err;
        }
    });
    //******************跳转****************
      //动态生成的标签是拿不到的，可通过 事件委托 来绑定
    $("#allList").on("click","dt",function () {
        window.location.href = "details.html";
    });
    $('.nav>ul>li').on("click",function(){

    })

    // $(".nav>ul>li>a").on("click",function(){
    //     $(this).addcss('all').parent().clildren().removeClass('all');
    //     // console.log(666);
        
    // })

});