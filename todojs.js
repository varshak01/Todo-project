$("ul").on("click","span", function(event){
$(this).parent().fadeOut(500,function(){
	$(this).remove();
});
event.stopPropogation();
});

$("ul").on("click", "li",function(){
$(this).toggleClass("strikethrough")
});
$("input[type='text']").keypress(function(event) {
   if(event.which===13)
   {
   	   var todotext=$(this).val();
   	   $(this).val("");
   	   $("ul").append("<li><span><i class='fa fa-trash' aria-hidden='true'></i>"+"</span>"+todotext+"</li>");
   }
});
$(".fa-plus").click(function(){
   $("input[type='text']").fadeToggle();
});