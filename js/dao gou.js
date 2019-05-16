$(function () {
    $('.div-one').show();
    $('.aside_a').on("click", function () {
        $('.div-one').show().siblings().hide();
        $(this).addClass('aside_abtm').siblings().removeClass('aside_abtm');
        $('.navslastspan').show();
    })
    $('.aside_b').on("click", function () {
        $('.div-two').show().siblings().hide();
        $(this).addClass('aside_abtm').siblings().removeClass('aside_abtm');
        $('.navslastspan').show();
    })

$.ajax(
    {
        url: "../json/dao gou.json",
        success: function (a) {
            console.log(a);
            var evalText = doT.template($("#cuslist").html());
            $(".lis").html(evalText(a));
        },
        error: function (err) {
            throw err;
        }
    })

    $.ajax(
            {
                url: "../json/dao gou.json",
                success: function (a) {
                    console.log(a);
                    var evalText = doT.template($("#cuslistone").html());
                    $(".lis1").html(evalText(a));
                },
                error: function (err) {
                    throw err;
                }
            })

$('.navslastspan').on('click',function(){
    // console.log(666);
    $(this).addClass("loading");
   
})
$('.lis').on('click','li',function(){
    window.location.href="../returnTop/fanhui.html"
})
$('.lis1').on('click','li',function(){
    window.location.href="../returnTop/fanhui.html"
})

})