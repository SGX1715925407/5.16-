
$(".sort-bottom").children().eq(0).on("click",function(){
    $(".free").show();
    $(".team").hide();
    console.log(666);
})
$(".sort").children().eq(0).on("click",function(){
  $(".team").show();  
  $(".free").hide();
    
})
