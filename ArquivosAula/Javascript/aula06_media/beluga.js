// função que calcula a media das notas 
function calcularMedia(){                    
                    
    var total = 0;
    var qtd = arguments.length;
    var x = 0;

    while(typeof arguments[x] === 'number'){
        total += arguments[x];
        x++
    }                    

    // método estático que seleciona as casas decimais
    return (total / qtd).toFixed(2);
   
}

function sortear(n){
    var nSorteado = Math.random();

    return nSorteado; 
}