//DOM



let numeroSecreto=0;
console.log(numeroSecreto);
let intento = 0;
let listaNumerosSorteados=[];
let numeroMaximo = 10;

//Funcion para inserte un elemento con parametros, sirve para reutilizar

function InsertarElemento(elemento,texto){

    let elementohtml  = document.querySelector(elemento);
    //Lo que está haciendo es ubicar el elemento, puede ser h1, p1, cualquiera, luego guardarlo en elementohtml
    
    
    elementohtml.innerHTML = texto;
    return;
    
    //Aquí se le asigna un texto al elemento seleccioando)
    

};


//Creamos la función, intento de usuario

function verificarIntento() {

    let numeroUsuario = parseInt(document.getElementById('valorUsuario').value);
    //Traemos lo que se agregue en algun campo atravez del ID 

    
    //console.log(numeroUsuario==numeroSecreto); se usa este cuando comparas un valor string con number, pero ya se cambió a number
    //console.log(numeroUsuario===numeroSecreto); // Se usa el triple === cuando son dos variables del mismo tipo
    //Le estoy diciendo que compare si son iguales, en el caso que lo sean me va a devolver true, si no son iguales me dará fake


    console.log(intento);

   
    if (numeroUsuario===numeroSecreto) {
        InsertarElemento('p',`Acertaste el número en ${intento} ${(intento===1) ? 'vez' : 'veces'}`);

        //Estamos llamando al ID reiniciar para remover disable y el boton reiniciar se active 
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
            //El usuario no acertó      


        if (numeroUsuario > numeroSecreto) {
            InsertarElemento('p','El número secreto es menor');
        } else {
            InsertarElemento('p','El número secreto es mayor');
        }
        intento++;
        limpiarCaja();
    }


    return;
    
    };




    //FUNCION PARA LIMPIAR 

    function limpiarCaja(){
       let valorCaja = document.querySelector('#valorUsuario')
        valorCaja.value = '';
    }




//FUNCION QUE GENERA EL NUMERO SECRETO
function generarNumeroSecreto() {

    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;

    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);



    //Si ya sorteamos todo los numeros, si ya lo hicemos que ya no genere más numeros

    if (listaNumerosSorteados.length == numeroMaximo) {
        
        InsertarElemento('p', 'Ya se sortearon todos los números posibles');

    } else { // en el caso que no esté sorteado todo los numeros ejecutar esto:


                    //Si el generado está en el array 
                //Lo que hace el includes es revisar todo el arreglo para si el datos ya existe
                if (listaNumerosSorteados.includes(numeroGenerado)) {
                    
                    //Si el dato ya existe, llamamos a la funcion de nuevo generarNumeroSecreto
                    return generarNumeroSecreto();


                } else {
                    //Si el datos no existe, que genere el número con return num.. y con push lo meta al array
                    listaNumerosSorteados.push(numeroGenerado);
                    return numeroGenerado;
                }
        
    }



}




//
function CondicionesIniciales(){
    //Llamamos a la funcion insertando los parametros
InsertarElemento('h1', 'Juego del número');


//Ahora usamos para el p1
InsertarElemento('p', `Indica un número entre 1 y  ${numeroMaximo}`);

 //Generar los numero aleaotorios
 numeroSecreto=generarNumeroSecreto();

 //Inicializar Intento
 intento=1; 



}





//


function reiniciarJuego(){

    //Limpiar la caja
    limpiarCaja();

    //Mostrar los mensajes iniciales
    CondicionesIniciales();

    //desahabilitar diseval
    document.querySelector('#reiniciar').setAttribute('disabled','true');
    


   
}

CondicionesIniciales();
















