(function(){

$(document).ready(function()
{
var menu = $(".menur");
var img = $("img");

img.on("click",function(){


menu.animate({
"width": "toggle",
"opacity": 1

},1500);

});
});
})(jQuery);