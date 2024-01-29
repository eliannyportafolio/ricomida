$(document).ready(function(){
$("#enviarCorreo").click(function(){
alert ("El correo fue enviado correctamente...")
});
$("#añadidaAFavoritos").click(function(){
alert ("Añadido a Favoritos correctamente...")
});

$("#ingredientes").dblclick(function(){
$(this).css({
"color": "red"
});
});

$("#ingredientes").click(function(){
$(this).css({
"color": "black"
});
});
$("#preparacion").dblclick(function(){
$(this).css({
"color": "red"
});
});

$("#preparacion").click(function(){
$(this).css({
"color": "black"
});
});




});