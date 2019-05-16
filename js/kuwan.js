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
    $('.aside_c').on("click", function () {
        $('.div-three').show().siblings().hide();
        $(this).addClass('aside_abtm').siblings().removeClass('aside_abtm');
    })


$.ajax(
        {
            url: "../json/kuwan.json",
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
                    url: "../json/kuwan.json",
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
        console.log(222);
    })
    $('.lis').on('click',"li",function(){
        window.location.href='../use/details.html'
    })
    $('.lis1').on('click',"li",function(){
        window.location.href='../use/details.html'
    })

})
