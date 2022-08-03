$(document).ready(function(){

$("#toggle_cars").click(function(){

    let hiddenCars = $(".cars_list li:hidden").length;
    let method = (hiddenCars > 0) ? "show" : 'hide';

    eval(`$(".cars_list li").${method}()`);

});

$("[type=radio]").change(function(){
    
    let value = $("input:checked").val();
    let gender = (value == "M") ? "Masculino" : "Feminino"; 

    alert(`Você selecionou o sexo ${gender}`);

});


$("input").focus(function(){
    $("input:focus").val("Olá, você clicou aqui!");
});


$("#register :submit").click(function(event){

    event.preventDefault();

    console.log("Você clicou no botão submit")

});


}); 
    // Selecionando um botão
    // $("#register button").text()

    // Selecionando um checkbox
    // $("#register :checkbox").trigger("click")

    // Selecionando os elementos "checados"
    // $("input:checked").val()

    // $("#register :disabled").prop("disabled", false)

    // Selecionando os elementos desabilitados
    // $("#register :disabled").val("anthony@hcode.com.br").prop("disabled", false)

    // Selecionando o botão submit
    // $("#register :submit").css("background-color", "orange")
                