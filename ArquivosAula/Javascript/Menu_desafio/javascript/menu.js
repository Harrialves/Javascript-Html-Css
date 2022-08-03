(function(){

        var $html= document.querySelector("html");
        var $btn = document.querySelector(".header-nav__hamburgger");
        // remove: remove a class
        // add: adiciona a class
        $html.classList.remove("no-js");
        $html.classList.add("js");

        $btn.addEventListener("click", function(){
            // adiciona e remove a class do botão
            $html.classList.toggle("menu-opened");

        })

    })()
    


