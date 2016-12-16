/*  Zad 1


(function($) {

$(document).ready(function() {


	var par = $('div.grid, div.grid-12');

	par.hl();
})
})(jQuery);

*/ 



//Zadanie 2

 /* (function($){


$(document).ready(function(){



var href = $(".nav a[href^='http']");


href.hl();


})
})(jQuery);

*/

//Zadanie 3
/*

 (function($){


$(document).ready(function(){

var sa = $("input:radio, input:checkbox").not(":checked");
console.log(sa);


})
})(jQuery);

*/
// Zadanie 4

/* 
(function($){


$(document).ready(function(){

var par = $("#text p:empty:first");
par.hl();

})
}) (jQuery);


*/ 
//Zadanie 5
/* (function($){

$(document).ready(function(){

var sp= $(".pagination-item:not(span)");
sp.hl();
	

})
}) (jQuery);
*/

// Zadanie 3 -animacja
/*
(function(){

$(document).ready(function()
{
var menu = $(".menur");
var img = $("img");

img.on("click",function(){

if(menu.is(":hidden")){
	menu.show();
}else{
	menu.hide();
}
})



})
})(jQuery);
*/

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