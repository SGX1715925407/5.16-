/**表单验证是否密码相同**/
function check(form) {
    var p1 = form.password1;
    var p2 = form.password2;
    if (p1.value != p2.value) {
        p2.oninvalid();
        return false;
    }
    return true;
}

window.onload = function () {
    //获取froms返回法人数组的集合中的p2
    var p2 = document.forms["my_f1"].password2;
    //验证通过与不通过
    p2.oninvalid = function () {
        this.setCustomValidity("密码不一致，请重新输入");
    }
    p2.oninput = function () {
        this.setCustomValidity("");
    }

}
$(function () {
    /**获取验证码 倒计时**/
    var wait = 60;

    function yzm() {
        if (wait == 0) {
            $(".Code").text("获取验证码");
            wait = 60;
            //当秒数等于0的时候按钮恢复可点击
            $(".Code").attr('disabled', false);
        } else {
            wait--;
            $(".Code").text(wait + "秒后重新发送");
            setTimeout(function () {
                yzm();
            }, 1000);
        }
    }


    $(".Code").on('click', function () {
        //开始读秒中，按钮不可点击
        $(".Code").attr('disabled', true);
        yzm();
    });

});
$(function () {
    $('input').on('focus', function () {
        $(this).css('border', '2px solid green');

    })
    $('input').on('blur',function (){
        $(this).css("border","none");
    })
})