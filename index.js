let numero1;
let numero2;
let operacion;
let resultado;
let tecla;
let numeroCalculadora = "";
let maxMin;

// Creando función de suma
function sumar(n1, n2) {
    let result = n1 + n2;
    return result; // Momentaniamente devuelve la suma de los dos numeros. 
}

// Función de resta:
function restar(n1, n2) {
    let result = n1 - n2;
    return result; // Momentaniamente devuelve la restade los dos numeros.
}

// Función que multiplica
function multiplicar(n1, n2) {
    let result = n1 * n2;
    return result; // Momentaniamente devuelve la multiplicación de los dos numeros.
}


// Función divir
function dividir(n1, n2) {
    let result = n1 / n2;
    return result; // Momentaniamente devuelve la divici de los dos numeros.
}

// Funcion que calucla el porcentaje de un numero s
function porcentaje(n1, n2) {
    let result = n1 * n2 / 100;
    return result; // Momentaniamente devuelve el porcentaje de los dos numeros.
}

//Función potencia
function potencia(numero) {
    let result = Math.pow(numero, 2);
    return result;
}

//Función de dolar a euro
function conversionDolaraEuro(dolar) {
    let cambioAEuro = 0.91 * dolar;
    let result = Math.round(cambioAEuro * 100) / 100;
    return result;
}


//Función de euro a dolar
function conversionEuroaDolar(euro) {
    let cambioADolar = 1.10 * euro;
    let result = Math.round(cambioADolar * 100) / 100;
    return result;
}

//Función de raiz cuadrada
function raizCuadrada(numero) {
    let result = Math.sqrt(numero);
    return result;
}

// Funciones que piden un numero maximo y un minimo y te devuelven otro al azar: 
function Random(max, min) {
  return Math.floor(Math.random() * (max + 1 - min)) + min;
}

function ramdData() {
  let a = parseInt(prompt('Introduzca un maximo'))
  let b = parseInt(prompt('Introduzca un minimo'))
  return maxMin = (Random(a, b))
}   

//Función para recoger todas las cifras del número insertado
function recogerNumero(numTecla){
    numeroCalculadora = numeroCalculadora + numTecla;
    document.getElementById("input").value = numeroCalculadora;
}

//Función para insertar número 1
document.querySelector('#uno').addEventListener('click', function () {
    tecla = document.getElementById("uno").value;
    recogerNumero(tecla);
});

//Función para insertar número 2
document.querySelector('#dos').addEventListener('click', function () {
    tecla = document.getElementById("dos").value;
    recogerNumero(tecla);
});

//Función para insertar número 3
document.querySelector('#tres').addEventListener('click', function () {
    tecla = document.getElementById("tres").value;
    recogerNumero(tecla);
});

//Función para insertar número 4
document.querySelector('#cuatro').addEventListener('click', function () {
    tecla = document.getElementById("cuatro").value;
    recogerNumero(tecla);
});

//Función para insertar número 5
document.querySelector('#cinco').addEventListener('click', function () {
    tecla = document.getElementById("cinco").value;
    recogerNumero(tecla);
});

//Función para insertar número 6
document.querySelector('#seis').addEventListener('click', function () {
    tecla = document.getElementById("seis").value;
    recogerNumero(tecla);
});

//Función para insertar número 7
document.querySelector('#siete').addEventListener('click', function () {
    tecla = document.getElementById("siete").value;
    recogerNumero(tecla);
});

//Función para insertar número 8
document.querySelector('#ocho').addEventListener('click', function () {
    tecla = document.getElementById("ocho").value;
    recogerNumero(tecla);
});

//Función para insertar número 9
document.querySelector('#nueve').addEventListener('click', function () {
    tecla = document.getElementById("nueve").value;
    recogerNumero(tecla);
});

//Función para insertar número 0
document.querySelector('#cero').addEventListener('click', function () {
    tecla = document.getElementById("cero").value;
    recogerNumero(tecla);
});

//Función para insertar número 0
document.querySelector('#decimal').addEventListener('click', function () {
    tecla = document.getElementById("decimal").value;
    recogerNumero(tecla);
});



//Función para imprimir el número en la pantalla de la calculadora
function escribirNumero(){
    numero1 = parseFloat(document.getElementById("input").value);
    document.getElementById("input").value = "";
    numeroCalculadora = "";
}

//Función para al hacer clic en sumar que guarde el valor '+'
document.querySelector('#sumar').addEventListener('click', function () {
    operacion = '+';
    escribirNumero();
    document.getElementById("input").value = operacion;
});

//Función para al hacer clic en sumar que guarde el valor '-'
document.querySelector('#restar').addEventListener('click', function () {
    operacion = '-';
    escribirNumero();
    document.getElementById("input").value = operacion;
});

//Función para al hacer clic en sumar que guarde el valor '*'
document.querySelector('#multiplicar').addEventListener('click', function () {
    operacion = '*';
    escribirNumero();
    document.getElementById("input").value = "x";
});

//Función para al hacer clic en sumar que guarde el valor '/'
document.querySelector('#dividir').addEventListener('click', function () {
    operacion = '/';
    escribirNumero();
    document.getElementById("input").value = "÷";
});

//Función para al hacer clic en sumar que guarde el valor '%'
document.querySelector('#porcentaje').addEventListener('click', function () {
    operacion = '%';
    escribirNumero();
    document.getElementById("input").value = operacion;
});

//Función que al hacer clic obtiene la potencia
document.querySelector('#potencia').addEventListener('click', function () {
    numero1 = parseFloat(document.getElementById("input").value);
    resultado = potencia(numero1);
    document.getElementById("input").value = resultado;
    numeroCalculadora = "";
});

//Función que al hacer clic convierte euros a dólares
document.querySelector('#dolar').addEventListener('click', function () {
    numero1 = parseFloat(document.getElementById("input").value);
    resultado = conversionEuroaDolar(numero1);
    document.getElementById("input").value = resultado+"$";
    numeroCalculadora = "";
});

//Función que al hacer clic convierte dólares a euros
document.querySelector('#euro').addEventListener('click', function () {
    numero1 = parseFloat(document.getElementById("input").value);
    resultado = conversionDolaraEuro(numero1);
    document.getElementById("input").value = resultado+"€";
    numeroCalculadora = "";
});

//Función que al hacer obtiene la raíz cuadrada
document.querySelector('#raiz').addEventListener('click', function () {
    numero1 = parseFloat(document.getElementById("input").value);
    resultado = raizCuadrada(numero1);
    document.getElementById("input").value = resultado;
    numeroCalculadora = "";
});

//Función que borra el número 
document.querySelector('#borrar').addEventListener('click', function () {
    document.getElementById("input").value = "";
    numeroCalculadora = "";
});

//Función que devuelve un numero randomico 
document.querySelector('#Rand').addEventListener('click', function () {
    ramdData();
    document.getElementById("input").value = maxMin;
    numeroCalculadora = "";
  });

//Función que llama a las operaciones con 2 números
document.querySelector('#resultado').addEventListener('click', function () {
    resultado;
    numero2 = parseFloat(document.getElementById("input").value);
    switch (operacion) {
        case '+':
            resultado = sumar(numero1, numero2)
            break
        case '-':
            resultado = restar(numero1, numero2)
            break
        case '*':
            resultado = multiplicar(numero1, numero2)
            break
        case '/':
            resultado = dividir(numero1, numero2)
            break
        case '%':
            resultado = porcentaje(numero1, numero2)
            break
        default: resultado="Error";
    }
    document.getElementById("input").value = resultado;
    numeroCalculadora = "";
});