    // 轮播图js
var num=0;
var T=-4000;
 function timer(){
    num-=1000;
    if(num==T){
        $('.lbul').css('left',0)
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
        $('.lbul').css('left',0)
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