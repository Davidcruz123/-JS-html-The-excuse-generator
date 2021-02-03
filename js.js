

function broma() {

    let who = ['The dog','My grandma','His turtle','My bird'];
    let action = ['ate','peed','crushed','broke'];
    let what = ['my homework', 'the keys', 'the car'];
    let when = ['before the class','right on time','when I finished','during my lunch','while I was praying'];
    let array = [who,action,what,when];

  
    var resultado=''
    for (var i = 0; i < array.length; i++) {
        
        
        resultado=resultado+ array[i][   Math.floor(Math.random() *array[i].length)   ] +" "
 
  
    }

    console.log(resultado)
    document.getElementById('resultado').innerHTML = resultado;

}

broma()


