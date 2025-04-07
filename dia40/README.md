IA
claude sonner?
deepseek

Revisar todos los enlaces subidos hoy 27/03/2025


-----------
# Local Storage

Sirve para almacenar info en nuestro ordenador. 
La información se guarda según el dominio.
Solo guarda STRINGs (textos), si quiero guardar arrays u objetos, utilizamos JSON.
Para ello usamos "JSON.stringify(nuestraLista);" y para volver a tener nuestros datos en JS, usamos "JSON.parse(nuestroString);"

```js
localStorage.setItem("edad", 25); //"25"
localStorage.getItem("edad"); //"25" <- Texto
```

Para qué se usa:
- Guardar pref. del usuario: "modo claro/oscuro", tamaño de fuente, si la barra lateral está abierta...
- Recordar las decisiones del usuario, por ejemplo si ya aceptó o no un mensaje de bienvenida, mostrar instrucciones la primera vez que se accede a un sitio...
- Almacenar datos sin necesidad de un servidor, por ejemplo CARRITOS DE COMPRA

```js
//catalogo.html
const productos = ["producto1", "producto2", "producto25"];
productos.push("producto 4");
const textoAGuardar = JSON.stringify(productos); //convierto mi array a un string

localStorage.setItem("listaDeProductos", textoAGuardar)

//checkout.html
const textoProductos = localStorage.getItem("listaDeProductos");
const listaProductos = JSON.parse(textoProductos);
```


## SetTimeOut
```js
//versión de función externa
let sumar = () => {

}
const idTimeout = setTimeout (sumar, 2000);

//versión de una sola linea
const idTimeout = setTimeout(()=>{

}, 2000)
```


La función devuelve un Id que sirve para borrar el timeout

```js
//quitar timeout
clearTimeout(idTimeout);
```


## SetInterval

Permite ejecutar código repetidamente cada cierto tiempo.

```JS
const idInterval = serInterval(sumar, 2000);
//para pararlo
clarInterval(idInterval);
```