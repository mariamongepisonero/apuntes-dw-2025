# Bucles for para repetir una tarea
Los bucles for se dividen en tres partes
    1. Iniciar una variable (normalmente: i);
    2. Crear una condición para esa variable (ej: i<10);
    3. Aplicar un cambio a esa variable cada interacción (ej: i++)

```js
//Usa un bucle for para imprimir los números del 1 al 10.
// otra opción: let 1=0 e imprimir i+1
for(let i=1; i<=10; i++){
    console.log("Número:",i);
}

    //imprimir del 10 al 1
    for(let i=10; i>0; i--){
        console.log("Número:",i);
    }
```


## Funciones
Trozos de código reutilizable.

```js
//parte 1 crear función (usar palabra function)
function saludar(){
    console.log("Hola, ¿qué tal?");
}

//parte 2 usar función creada desde donde queramos

    //entra Juan
    saludar();

    //entra María
    saludar();

    //entra profe y saluda a los dos
    for(i=0, i<2 ; i++){
        saludar();
    }




//-------------------------------------------------//

let num = 10;
let num = 20;

    //parte 1: crear función
    function sumar(){
        // todo lo que esté aquí dentro se ejecuta cuando use la función
        console.log(num1+num2);
    }

    //parte 2: ejecutar función
    sumar();





//-------------------------------------------//
// Crear variable nombre y crear función

const nombre= "tom";
function saludar (){
    console.log("Hola"+ nombre +"¿cómo estás?")
}

saludar(); //Hola tom ¿cómo estás?





//-------------------------------------------//
//Definir variable dentro de la función para poder obtener distintos resultados

function saludar (nombre){
    console.log("Hola"+ nombre  +"¿cómo estás?");
}

saludar("María"); //Hola María ¿cómo estás?
saludar("Juan"); //Hola Juan ¿cómo estás?
saludar("Lucas"); //Hola Lucas ¿cómo estás?

//La variable creada (nombre) solo funciona dentro de su función


//---------------------------------------------
//Se puede poner más de una variable

function saludar (nombre, edad){
    console.log("Hola"+ nombre  +"¿cómo estás?");
    console.log("Tienes" + edad + "años");
}

saludar("María", 25); //Hola María ¿cómo estás? Tienes 25 años.

//------------------------------------------------
//Si no le vas a dar valor de edad, se puede poner un parámetro por defecto que aparecerá si no se indica un argumento
function saludar (nombre, edad=0){
    console.log("Hola "+nombre);
    console.log("Tienes" + edad + "años");
}

saludar("María"); //Hola María //Tienes 0 años

//otra opción es usar if, solo mostrará la segunda parte si le damos un arg de edad
function saludar (nombre, edad=0){
    console.log("Hola "+nombre);
    if(edad){
    console.log("Tienes " + edad + " años");
    }
}
saludar("María"); //Hola María 


```

Nueva actividad:
Crear tres funciones (sumar, restar y multiplicar)
Enviarle distintos valores como "parámetro" a las funciones
Calcular 5+3
Calcular 10*50
calcular 3+8

```js
// Funciones para operaciones básicas
function sumar(a, b) {
    console.log("Suma:", a+b);
}

function multi(a, b) {
    console.log("Multi:", a*b);
}

// Llamadas a las funciones con diferentes valores
sumar(5, 3)
multi(10, 50)
sumar(3, 8)

```
Definiendo la función, los valores de la variable son parámetros y usando la función, los valores son argumentos 
    Function multi (parametro1, parametro2)
    multi(argumento1, argumento2)



-----------------------------------------------
-----------------------------------------------

```js
function sumar(num1, num2){
    return num1+num2;
}

//-------------------------------------------

function sumar(num1, num2){
    const resultado = num1+num2;
    return resultado;
}

const valor = sumar(5,3); 
console.log(valor);
