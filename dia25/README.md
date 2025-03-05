Operadores OR y AND

```js
const edad = 25;
const tienePermiso=true;

//para que cumpla ambas funciones usar && -- AND
if(edad <= 120 && edad >= 18){
    console.log("eres mayor de edad");
}

//para que cumpla alguna de las dos funciones usar ||  -- OR
if(edad >= 18 || tienePermiso==true){
    console.log("puedes entrar");
}

```


## Forma de escribir funciones

```js
//esta función tiene 2 parametros y devuelve la suma de ambos
function sumar(num1, num2){
    return num1+num2;
}
//este llamado a la función envía como argumento 2 números
const resultado = sumar(2,3); //Establecer una variable resultado hace que podamos imprimirlo
console.log(resultado);


//funcion sin nombrar
const sumar = function (num1,num2){
    return num1+num2;
}


// funcion flecha
// vamos a usarla mucho
const sumar = (num1, num2) => {
    return num1+num2;
}


//funcion flecha reducida 
//solo sirve con funciones de una sola línea
const sumar = (num1, num2) => num1 + num2




const alumno= {
    nombre: "Juan",
    edad: 34,
    //sumar: function (num1, num2){
    //return num1+num2;
    //}
    sumar: (num1, num2) => num1+num2;
    }

alumno.sumar(3+1);

miBoton.addEventListener("click", () => {
    console.log("Me hicieron click");
})
```


## Truthy / Falsy
En JS podemos tener un valor Truthy o Falsy. Un valor Truthy es aquel que se evalua como verdadero en un contexto booleano, mientras que falsy se evalua como falso.

Podemos utilizar este concepto para la toma de decisiones en nuestro código.

Valores falsy: `undefined, null, NaN, 0, "", false`
Valores truthy: todos los demás


Ejemplos de valores que parecen falsy pero son TRUTHY:
```js
const val="false"; //es texto
const val= -1;
const val= " ";
const val= 0.1;
const val= "0"; //es texto
const val= "null" //es texto
const val= "undefined" //es texto
```

```js
edad=19;
if(edad>18){
    //Truthy
} else {
    //falsy
}

let numero =16;
if(numero%2 == 0){
    //truthy: es par
} else {
    //falsy: es impar
}
```

```js
if(""){
    console.log("No me ejecutan nunca");
} else {
    console.log("Sí se ejecuta");
}
```