 function Tabuada() {
    var entrada = document.getElementById('num-entrada');
    var final = document.getElementById('num-final');
    var res = document.getElementById('resposta');


    if ((entrada.value == 0) || (final.value == 0)) {
        window.alert ("[ERROR]:Preeencha os campos!") 
    } else {
         var e = Number(entrada.value);
         var f = Number(final.value);
         var x = 0
         var r = ''
        res.innerHTML = `A Tabuada do ${e} e:<br>`
        do {
                r = e*x
                res.innerHTML += `${e} X ${x} = ${r}<br>`
                x++
            } while (x <= f) 
        }
}
                
 
