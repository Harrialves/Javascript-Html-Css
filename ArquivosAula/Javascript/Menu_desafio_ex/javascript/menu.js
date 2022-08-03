(function(){

        var $html= document.querySelector("html");
        var $btn = document.querySelector(".header-nav__hamburgger");
        
        /*se o javascript estiver habilitado, recupera o valor do ariaControl que está
        no botão*/
        var ariaControl = $btn.getAttribute("aria-controls");
        //seleciona qual o menu atraves do atributo ariaControl
        var $menu = document.getElementById(ariaControl);

        // remove: remove a class
        // add: adiciona a class
        $html.classList.remove("no-js");
        $html.classList.add("js");

        $btn.addEventListener("click", function(){
            // adiciona e remove a class do botão
            $html.classList.toggle("menu-opened");
            
            // recupera o valor do atributo areaExpanded do botão / convertendo pra boleano  
            var ariaExpanded= this.getAttribute("aria-expanded") ===
            "true"; 

            // invertendo os valores do boleano 
            $btn.setAttribute("aria-expanded", !ariaExpanded);
            $menu.setAttribute("aria-expanded", !ariaExpanded);

        })

    })()
    


