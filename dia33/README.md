# Ejercicio 1:
Crear una web menú de una cafetería. Crear tres secciones (café, bocadillo, bebida)
- Agregar 1 al carrito
- Agregar 2 al carrito (pulsando 1 vez)
- Agergar 3 al carrito (pulsando 1 vez)

Agregar un botón al final para ver Total Items
Agregar un botón para vaciar carrito

Hacer solo con tres funciones: 
- función de agregar a carrito
- función de mostrar Totales
- función de borrar carrito

Sin estilos CSS


# Ejercicio JS 2:
Crea un array con 5 canciones, recorrer el array y mostrar en consola cada canción.

1. Hacer lista de 5 rutas como "https://www.sounhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
"https://www.sounhelix.com/examples/mp3/SoundHelix-Song-2.mp3"
"https://www.sounhelix.com/examples/mp3/SoundHelix-Song-3.mp3"
"https://www.sounhelix.com/examples/mp3/SoundHelix-Song-4.mp3"
"https://www.sounhelix.com/examples/mp3/SoundHelix-Song-5.mp3"

2. Crear un array con 5 artistas de indie emergente español. Cada artista corresponderá a su canción.

3. Mostrar en HTML un div para cada canción y artista (juntar primer artista con primera canción y así, mezclando las dos listas), generado con JS.

4. Crear un botón con el texto "Tema 3" que al hacer click muestre en consola el nombre de la canción y el artista en la posición 2.

5. Agregar botones de siguiente, anterior, play y pausa con ids únicos, y agreguenle el siguiente JS a cada uno y explicar qué hace el código:
```js
document.addEventListener("click", (e) => {
    console.log(event.tarjet.id);
})
```

6. Agregar un atributo id a cada elemento generado en el punto 3 y que al hacer click en cada div, muestre en consola el nombre de la canción y el artista.

7. Actualizar el punto anterior para mostrar en el html un párrago con el nombre de la canción y el artista al que le hicieron click.

8. Agregar un array con imágenes para cada canción(5 imagenes en total).

9. Darle la función necesaria a los botones de siguiente/anterior para que pase de canción, mostrando su correspondiente html

10. Convertir los 3 arrays en un array de objetos y que el programa sea funcional. (todo salvo play y pause)