# Metodos de Arrays/listas

## Pop()
El método `pop()` elimina el último elemento de un array y lo devuelve. Este método modifica la longitud del array.

    ```js
    const frutas = ["manzana", "naranja", "tomate", "uvas", "bananas"];
    let ultimoElemento = frutas.pop();

    console.log(frutas); // ["manzana", "naranja", "tomate", "uvas"];
    console.log(ultimoElemento); // "bananas"
    ```

## Push()
El método `push()` es uno de los más comunes, añade uno o más elementos al final de un array. Me devuelve la nueva longitud del array.

    ```js
    const frutas = ["manzana", "naranja"];
    let nuevaLongitud = frutas.push("pera", "tomate");

    console.log(frutas); // ["manzana", "naranja", "pera", "tomate"];
    console.log(nuevaLongitud); // 4
    ```

## Shift()
El método `shift()` elimina el primer elemento del array y lo devuelve. Este método modifica la longitud del array. (Igual que el pop pero pop es el último elemento y shift el primero)

    ```js
    const frutas = ["manzana", "naranja", "tomate", "uvas", "bananas"];
    let elementoQuitado = frutas.shift();

    console.log(frutas); // ["manzana", "naranja", "tomate", "uvas", "bananas"];
    console.log(elementoQuitado); // "manzana"
    ```


## Unshift()
Con el método `unshift()` podemos añadir uno o más elementos al inicio del array. Devuelve la nueva longitud del array.

    ```js
    const frutas = ["manzana", "naranja", "tomate"];
    let nuevaLongitud = frutas.unshift("pera", "ciruela");

    console.log(frutas); // "pera", "ciruela", "manzana", "naranja", "tomate", 
    console.log(nuevaLongitud); // 5
    ```

## Splice()
El método `splice()` cambia el contenido de un array Eliminando, Creando o Reemplazando sus elementos. Devuelve los elementos eliminados. Modifica el valor original y recibe 3 parámetros:

- El índice del vector donde se va a realizar la operación
- La cantidad de elementos a eliminar
- Los elementos que quiero agregar

    ```js
    const frutas = ["manzana", "naranja", "tomate", "uvas", "bananas"];
    let frutasEliminadas = frutas.splice(2,2, "pera", "ciruela");

    console.log(frutas); // ["manzana", "naranja", "pera", "ciruela", "bananas"]
    console.log(frutasEliminadas); // ["tomate", "uvas"]
    ```


Ejercicio de Splice:
```js
let lenguajes = ["python", "java", "javascript", "php", "C++", "C#"]
lenguajes.splice(0,1); //elimina python -> lista ["java", "javascript", "php", "C++", "C#"] y devuelve ["python"]

lenguajes.splice(-1,1); //elimina C# (el último) -> lista ["java", "javascript", "php", "C++"] y devuelve "C#"

lenguajes.splice(-1, 0, "C", "Cobol"); // Añadiría "C" y "Cobol" al final, no borra -> lista ["java", "javascript", "php", "C++", "C", "Cobol"] y no devuelve nada

//como quitar dos elementos a partir del indice 2
lenguajes.splice(2, 2); // -> ["java", "C++", "C", "Cobol"] y devuelve ["javascript", "php"]
```


## Modificar elementos con un forEach

(Si quieres usar el indice podemos leerlo agregando un segundo parametro a nuestra funcion flecha)
    ```js
    const letrasss = ["a", "b", "c"];

    letras.forEach((letra, indice) => {
        console.log(letra, indice)

        listaLetras[indice] = letra.toUpperCase();

    })

    console.log(listaLetras); // Devuelve ["A", "B", "C"]
    ```



### Map

Si deseamos generar una copia de la lista, podemos utilizar el método map(), que crea un nuevo array con los resutados de la función flecha.

*Map DEVUELVE ELEMENTOS*

    ```js
    const listaNumeros = [1, 2, 3, 4, 5];

    const nuevaLista = listaNumeros.map( (numero) => {
        return numero * 2;
    })

    console.log(listaNumeros); // [1, 2, 3, 4, 5]
    console.log(nuevaLista); // [2. 4. 6. 8. 10]
    ```

    OPTIMIZACIÓN DE MÉTODOS DE ARRAY

    Si la función es de una sola línea y la línea es un return: quitar return, quitar llaves y punto y coma final

        ```js
        const listaNumeros = [1, 2, 3, 4, 5];

        const nuevaLista = listaNumeros.map( (numero) => {
            return numero * 2;
        }) //opcion 1

        const nuevaLista = listaNumeros.map( numero => numero * 2); //opcion optimizada
        ```


## Buscar Item

El método `find()` devuelve el PRIMER elemento del array que cumpla la función de prueba propocionada. En caso contrario devuelve undefined.

    ```js
    const numeros = [5,12,8,130,44,12];
    const item = numeros.find(num => num>10); //recorre la lista y cuando encuentra el primer valor mayor a 10, nos lo devuelve

    console.log(item); // 12
    ```

## Buscar múltiples items
La función `filter()` devuelve un array/lista con TODOS los elementos que complan la condición especificada.

    ```js
    const numeros = [5,12,8,130,44,12];
    const items = numeros.filter(num => num>10); //recorre la lista y cuando encuentra el primer valor mayor a 10, nos lo devuelve

    console.log(items); // [12, 130, 44, 12] IMPORTANTE: devuelve una lista
    ```

    ```js
    const personas = [
        {nombre: "Juan", edad:33},
        {nombre: "Pedro", edad:18},
        {nombre: "Ana", edad:15},
        {nombre: "Luis", edad:9},
        {nombre: "María", edad:30}
        ];

        //obtener una lista de las personas mayores de edad usando filter()

        const mayoresDeEdad = personas.filter(persona => persona.edad >= 18);

        console.log(mayoresDeEdad); /*[
            { nombre: "Juan", edad: 33 },
            { nombre: "Pedro", edad: 18 },
            { nombre: "María", edad: 30 }
        ]*/
    ```


    1. De una lista de números devolver solo los impares
    (Buscar múltiples items: filter)

        ```js
        const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];
        const impares = numeros.filter(num => num % 2 !== 0); //que no de cero de resto, no divisible entre 2

        console.log(impares); // [1, 3, 5, 7, 9]
        ```


    2. De una lista de objetos de personas, devolver solo su nombre en consola

    ```js
        const personas = [
            {nombre: "Juan", edad: 33},
            {nombre: "Pedro", edad: 18},
            {nombre: "María", edad: 30},
        ]

        const nombres = personas.map(persona => persona.nombre);
        console.log(nombres); // ["Juan", "Pedro", "María"]
    ```


    3. Encuentra un libro con el título específico "La Odisea"
    (Buscar un solo item: find)

    ```js
        const libros = [
        {titulo: 'El Quijote', autor: 'Miguel de Cervantes'},
        {titulo: 'Cien años de soledad', autor: 'Gabriel García Márquez'},
        {titulo: 'La Odisea', autor: 'Homero'},
        ];

        const libroBuscado = libros.find(libro => libro.titulo === 'La Odisea');
        console.log(libroBuscado); // {titulo: 'La Odisea', autor: 'Homero'}
    ```

    3b. Usar los métodos de string para búsquedas parciales "cien años".

    ```js
        const libros = [
        {titulo: 'El Quijote', autor: 'Miguel de Cervantes'},
        {titulo: 'Cien años de soledad', autor: 'Gabriel García Márquez'},
        {titulo: 'La Odisea', autor: 'Homero'},
        ];

        const libroParcial = libros.find(libro => libro.titulo.toLowerCase().includes('cien años'));
        console.log(libroParcial); // {titulo: 'Cien años de soledad', autor: 'Gabriel García Márquez'}
    ```


    4. Dada una lista de números desordenados, ordenar de menor a mayor

    ```js

    const numerosDesordenados = [9, 3, 7, 1, 4, 5];

    const ordenados = numerosDesordenados.sort((a, b) => a - b);
    console.log(ordenados); // [1, 3, 4, 5, 7, 9]

    // para ordenar al revés
    const ordenadorReves = numerosDesordenados.sort((a, b) => b - a);
    ```

    