let entries = 100;

$(".register").append(`<u> -  Ainda restam ${100 - entries} vagas</u>`);

$("#form_login").on("submit", function(e){
    
    e.preventDefault();

    alert("Você foi cadastrado. Parabéns!!!");
});

if (entries >= 100){
    $("#form_login [type=submit").off("click");
}