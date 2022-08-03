
//  Evento para quando pressionarmos o mouse 
/*
$('h1').mousedown(function(){
console.log("Apertei o mouse")

});
*/

//  Evento para quando soltar o mouse
/*
$('h1').mouseup(function(){
console.log("Soltei o mouse")
});
*/

// Evento pra quando pressionarmos e soltarmos o mouse
/*
$("h1").click(function(){
console.log("Apertei e soltei o mouse")
})

$("h3.books").click(function(){

$(this).text("Fui clicado")
})
*/

//  Simulando o click de um elemento
// $("h3.books").click()

//  Evento para o botão direito do mouse 
/*
$("img").contextmenu(function(){
alert("Clicamos com o botão direito")
})
*/

// Simulando o click do botão direito 
// $("img").contextmenu()

//  Evento para o duplo clique 
/*
$("table tbody tr").dblclick(function(){

$(this).css({
background: "black",
color: "white"
});
})
*/

// Simulando o duplo clique 
// $("table tbody tr:eq(2)").dblclick()

//  Evento para quando o cursor "passa por cima" (entra) em um elemento

/*
$("table tbody tr").mouseenter(function(){

$(this).addClass("trselected");


});

// Evento para quando o cursor "deixar" um elemento 
$("table tbody tr").mouseleave(function(){

$(this).removeClass("trselected")
})
*/

// Evento para quando o cursor "entra" e "deixa" um elemento
$("table tbody tr").hover(function(){

$(this).addClass("trselected");
}, function(){

$(this).removeClass("trselected")

});

/*
$("table tbody tr").mousemove(function(event){

(event.pageX, event.pageY);
$("h1").text(`você está na posição x ${event.pageX}; Y ${event.pageY}  `);

console.log
});
*/