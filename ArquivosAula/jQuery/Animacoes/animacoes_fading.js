
                // Escondendo um elemento com a animaççao "fading"
                $(".courses_list .course_item_inner:eq(3)").fadeOut("fast")
                
                // Exibindo um elemento com a animação "fading"
                $(".courses_list .course_item_inner:eq(3)").fadeIn(2000, function(){

                    $(this).css("border", "solid red 2px");
                });

                // Alterando a opacidade de um elemento com uma animação
                $(".logo img").fadeTo(1000, 0.9);

                $('.btn_toggle_item').on('click', function(){

                    $(this).prev('.course_item_inner').fadeToggle("slow", function(){

                        console.log("Sumi ou apareci");
                    });

                });