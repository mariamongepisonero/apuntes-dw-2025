innerText => solo el texto visible (renderizado)
textContent => todo el texto dentro de la etiqueta
innerHTML => soporta etiquetas (la mejor opción)


# Manipulación de Textos

1. Concatenación

    ```js
    const nombre="Lucía";
    const apellido= "Perez";

    const nombreCompleto = nombre+apellido; // LucíaPerez
    const nombreCompleto = nombre+" "+apellido; // Lucía Perez (con espacio)
    const fullName= apellido+", "+nombre; // Perez, Lucía

    //Concatenar usando +=
    let saludo = "Hola, ";
    saludo += "¿Cómo estás?"; // saludo + "¿Cómo estás?"
    console.log(saludo); //Hola, ¿Cómo estás?

    ----
    let edad = 25;

    //PREGUNTA EXAMEN
    const mensaje = edad + 1; // 26 -> porque todos son numeros
    const mensaje = edad + 1 + "años"; // 251 años -> porque contiene numeros y string, entonces lo toma todo como string
    const mensaje = (edad + 1) + "años"; // 26 años -> aunque combine numero y string, resuelve primero el paréntesis

    ```



2. Interpolación

    Cuando usamos plantillas literales (`template literals` / template strings) se pueden insertar `variables` o `expresiones` dentro de una cadena de texto usando `${}`.

    ```js
    let nombre = "Ana";
    let edad = 25;

    //interpolación
    let mensaje = `Hola, mi nombre es ${nombre} y tengo ${años}`;

    //interpolación en el ejemplo anterior
    const nombre="Lucía";
    const apellido= "Perez";

    const fullName= `${apellido}, ${nombre}`; // Perez, Lucía

    // insertar expresión 
    const total = 50;
    const iva = 0.21;
    console.log{`El total con impuesto es ${total + {total+iva}}`}


    const hobbies = ["futbol", "basquet", "programación de JAVASCRIPT"] //esto es una lista, va entre corchetes y con comas. Cualquier texto es una lista de sus letras, en realidad. ["f", "u", "t", "b", "o"......]



3. Métodos de Strings -> Métodos son funciones

    JS nos ofrece múltiples métodos/funciones para manipular cadenas de texto.
    - `toUpperCase()` y `toLowerCase()`: Convierte todas las letras de una cadena en mayúsculas o minúsculas.

        ```js
        let texto = "Me encanta Javascript";
        //toUpperCase() , toLowerCase()
        console.log(texto, loLowerCase()); //me encanta javascript
        console.log(texto, toUpperCase()); // ME ENCANTA JAVASCRIPT
        ```

    - `split()`
    Divide una cadena de texto en una lista/array basada en el separador elegido.

        ```js
        let texto = "Me encanta Javascript";
        //split
        const palabras= texto.split(" ");
        console.log(palabras); //["Me", "encanta", "Javascript"]

        const pabaras2= texto.split(" encanta ");
        console.log(palabras2); // ["Me", "Javascript"]

        const email = "maria@alumnos.cei.es";
        const separacion = email.split("@");
        console.log(separacion); // ["maria", "alumnos.cei.es"]

        ```
    
    - `slice()`
    Extraer una porción de la cadena basada en índices de inicio y fin (sin incluir el índice final).
    Se usa mucho en entradas de blogs o resumenes de google, a partir de X caracter, se pone puntos suspensivos. 

        ```js
        let frase = "Aprender javascript es divertido";
        console.log("Parte de la frase: ", frase.slice(9,19)); //javascript
        console.log("Desde el índice 9 al final: ", frase.slice(9)); // javascript es divertido
        ```

    - `replace()` y `replaceAll()`
    Reemplaza una parte de la cadena por otra (la primera ocurrencia).
    Soporta expresiones regulares (regex) para potenciar la búsqueda.

        ```js
        let frase = "Hola mundo. hola hola hola universo";
        console.log("Reemplazar 'hola' por 'Hola'; ", frase.replace("hola", "Hola")); // Hola mundo. Hola hola hola universo (cambia la primera que encuentre)
        console.log("Reemplazar 'hola' por 'Hola';" frase.replaceAll("hola", "Hola")) //Hola mundo. Hola Hola Hola Hola (cambia todas)
        ```
    
    - `trim()`
    Elimina todos los espacios en blanco al inicio y al fin de una cadena. (evita errores al meter usuarios y contraseñas, por ejemplo, si lo has copiado y pegado sin querer con un espacio)

        ```js
        let frase = "    Hola mi nombre es Luka       ";
        console.log(frase.trim()); // Hola mi nombre es Luka 
        ```

    - `includes()`
    Verifica si una cadena contiene una subcadena específica.

        ```js
        let frase = "El sol brilla en el cielo";
        console.log("Contiene 'sol'?", frase.includes("sol")); // true
        console.log("Contiene 'luna'?", frase.includes("luna")); // false
        ```

    - `startsWith()` y `endWith()`
    Verifica si una cadena comienza o termina con una subcadena específica.

        ```js
        let frase = "Javascript es genial";
        console.log("¿Empieza con 'Java'?: ", frase.startWith("Java")); //true
        console.log("¿Empieza con 'java'?: ", frase.startWith("java")); //false
        console.log("¿Termina con 'genial'?: ", frase.startWith("genial")); //true
        ```

    - `repeat()`
    Repite una cadena un número específico de veces.

        ```js
        let risa = "ja";
        console.log("Me hace mucha gracia: ", risa.repeat(3)); //jajaja
        ```



    ---------------------------------------------------------

    Lenght nos indica cuantos caracteres hay en una cadena.

    ```js
    let frase = "Hola como andan";
    console.log(frase.lenght); // 15 
    ```

    -------------------------------------------------------

    ```js

    let frase = "   No me gusta Javascript en diseño web    "

    // trin(), toUpperCase(), replace()
    let resultado = frase.trim()
                        .toUpperCase()
                        .replace()


    let frase = "   No me gusta Javascript en diseño web   ";

    let resultado = frase.trim()
                        .toUpperCase()
                        .replace("NO ME GUSTA", "ME ENCANTA");

    console.log(resultado);
    // "ME ENCANTA JAVASCRIPT EN DISEÑO WEB"
    // en replace tenemos que escribir en mayúsculas porque antes lo hemos cambiado con el toUpperCase, o si no poner el toUpperCase lo último






