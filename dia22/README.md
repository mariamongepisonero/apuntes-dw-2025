# Javascript

Es un lenguaje de programación de alto nivel, interpretado y orientado a objetos.
Lo utilizamos para crear contenido dinámico e interactivo en sitios webs.

- Alto nivel: está diseñado para ser fácil de leer y escribir por humanos.
- Interpretado: Se ejecuta en tiempo real, línea por línea y no necesita ser compilado.

```js
let numero = 1;
console.log("linea 1 y numero vale:", numero); //imprime en consola el texto linea 1 y numero vale: 1

numero = numero + 2;
console.log("linea 2 y numero vale:", numero) // imprime en consola el texto linea 2 y numero vale 3
```

- Orientado a objetos: Js utiliza un paradigma OOP (Object Oriented Programing), significa que organiza su código en objetos. Un objeto es una colección de `propiedades` (características) y `métodos` (funciones) que se pueden leer y manipular.

Perro:
// Propiedades
- color: blanco y negro
- nombre: Lasie

//Métodos
- ladra{}
- moverLaCola {}

```js
//ejemplo de propiedades y métodos
const alumno = {
    nombre: "Lucía Perez",
    edad: 35, //No va entre comillas porque no es texto, así puede operar con ello
    direccion: {
        calle: "Calle falsa",
        num: 123
    }
    saludar: function() {
        console.log("Hola, mi nombre es Lucía");
    }
}


//para imprimir el nombre del alumno, usamos algo como:
console.log(alumno.nombre);
console.log("Me llamo", alumno.nombre, "y tengo", alumno.edad, "años");
//imprime en consola "Me llamo Lucía Pérez y tengo 35 años"

//para imprimir la direccion
console.log(alumno.direccion.num);
console.log(alumno.direccion.calle+" "+alumno.direccion.num); "Calle falsa 123"

    //Otra opción sería crear variable dirección
    const direccion = alumno.direccion.calle+" "+alumno.direccion.num;
    console.log(direccion); // "Calle falsa 123"


//para ejecutar un método/función tenemos que usar () al final.
alumno.saludar();
```

## Donde podemos probar/codificar con JS
- En el navegador: en la pestaña de consola
- En etiquetas de `<script>` dentro del html, y se suelen poner al final antes de cerrar el `</body>`
- Se pueden usar archivos externos con la extensión `.js` linkeado en nuestro html: <script src="./js/miscript.js"></script>
- Usar extensión de VSC -> Quokka. Para empezar a usar: Control+P -> escribir símbolo ">Quokka"
- Usar en páginas externas:
1. https://playcode.in/now
2. https://codepen.io
3. https://jsfiddle.net


# Funcionalidades
- Manipulación del DOM (Document Object Model): Agregar, modificar o quitar elementos HTML y CSS.
- Procesar formularios: Verificar datos ingresados por el formulario y realizar formularios completos de múltiples secciones.
- Manejo de animaciones: Manipular efectos visuales y animaciones en nuestra web.
- Manejo de eventos: Responder a las acciones del usuario, como por ejemplo: hacer clic, mover el mouse, desplazarse por la web
- Comunicación asíncrona con servidores mediante AJAX/Fetch: enviar y recibir datos de un servidor sin tener que recargar la página.


## Tipos de datos
Primitivos:
- Números: enteros, decimales, positivos, negativos, etc.
- Cadenas de Textos (strings): textos, palabras, frases, 1 letra. Entre comillas 'simples', "dobles" o `backticks`
- Booleanos: Verdadero o falso

Referenciales:
- Listas de cosas (Arrays): Se escriben con corchetes [] y los items se separan con coma.
- Objetos (object): Colección de propiedades (Características) y métodos (funcionalidades) y se escriben con {}

```js
// Valores PRIMITIVOS
let texto = "Hola Alumnos de CEI";
let textoConComillas = ' Hola estoy muy "bien" ';
let textoConComillasDobles = "I'm Tomi";
let texto = `Quiero comillas 'simples' y "dobles"`; //template string (plantilla)


let numero = 123;
let numero2 = "123"; // "123" como texto
numero2 = Number(numero2) // Esta función Number convierte en número lo que antes hemos definido como texto
numero2 = Number("123")

let entero = 25; //Número entero
let decimal = 22.30; //Número decimal, va con punto (americano)
let negativo = -5; 
const PI = 3.14159;

let estaPrendido = false;
let isPrimary = true;
let onActive = false;


// Valores REFERENCIALES

    // objeto
    const alumno = {
        nombre: "Mario",
        edad: 33,
        isRevicido: false,
        presentarProyecto: function() {
            //this es para referirse a ESTE objeto
            this.isRecibido = true;
            this.edad = 34;
        },
        irseDeVacaciones: function () {
            ...
        }
    }

        //como escribir en un objeto:
        alumno.edad = 35;
       

        //para ejecutar la función:
        alumno.presentarProyecto(); // presenta el proyecto
        alumno.edad; //33
    
    //listas o arrays
    const alumnosDeDW = ["John", "María", "Sonia", "Alan"];
    const edades = [25, 32, 18, 29];
    const listaMixta = [
            1, 
            "Juan", 
            true, 
            {val1: "hola", val2: "chau"}
        ];

        //las listas comienzan su índice en 0
        console.log(alumnosDeDW[0]) // "John";
        console.log(alumnosDeDW[1]) // "María";
        console.log(alumnosDeDW[2]) // "Sonia";

        //para escribir un valor en una lista
        alumnosDeDW[0] = "Jhon Edward";
        console.log(alumnosDeDW[0]) // "John Edward";

```


Ejercicio 1: Creación y acceso a arrays
- Crea un array llamado frutas que contenga las siguientes frutas: "Manzana", "Banana", "Naranja".
- Imprime en la consola el primer elemento del array frutas.
- Cambia el segundo elemento del array frutas a "Mango".
- Imprime en la consola el array completo para verificar el cambio.

```js
    const frutas = ["Manzana", "Banana", "Naranja"];
    console.log(frutas[0]);
    frutas[1] = "Mango";
    console.log(frutas);

//lenght para que nos de cuantos elementos tiene la lista (buscar como se hace, creo que console.log(futas.lenght))
```


Ejercicio 2: Creación y acceso a objetos

- Crea un objeto llamado persona con las propiedades nombre (cadena), edad (número) y ciudad (cadena).
- Imprime en la consola el valor de la propiedad nombre del objeto persona.
- Cambia el valor de la propiedad edad a 30.
- Imprime en la consola el objeto persona completo para verificar el cambio.

```js
    const persona = {
        nombre: "Lucas",
        edad: 28,
        ciudad: "Madrid"
    };

    console.log(persona.nombre);

    persona.edad = 30;

    console.log(persona);

```



Ejercicio 3: Arrays de objetos

- Crea un array llamado estudiantes que contenga tres objetos, cada uno representando a un estudiante con - las propiedades nombre y nota.
- Imprime en la consola el nombre del segundo estudiante.
- Cambia la nota del primer estudiante a 95.
- Utiliza un bucle for para imprimir el nombre y la nota de cada estudiante en la consola.


```js
    const estudiantes = [
    {nombre: "Ana", nota: 85},
    {nombre: "Juan", nota: 50},
    {nombre: "Carmen", nota: 75}
];

    console.log(estudiantes[1].nombre);
    //otra opcion: 
    //const maria = estudiantes[1];

    estudiantes[0].nota = 95;
```




Ejercicio 4: Métodos en objetos

- Crea un objeto llamado calculadora con las propiedades a y b (números) y un método sumar que retorne la suma de a y b.
- Asigna valores a a y b y llama al método sumar, imprimiendo el resultado en la consola.

``` js
    const calculadora = {
        a: 5,
        b: 3,
        sumar: function() {
            console.log(this.a+this.b);
        }
    }

    console.log(calculadora.a); //5
    console.log(calculadora.b); //3
    
    calculadora.sumar(); //8

```