# CSS GRID

Grid es un sistema de maquetación bidimensional para crear interfaces y layouts tipo tablas.
Se compone de filas y columnas y se pueden anidar unos dentro de otros.
Se pueden crear layouts complejos con muy pocas líneas de código.

- Nos sirve para crear layouts.
- No es opuesto a flex, se pueden combinar entre ellos.
Dentro de flex puedo meter un grid y viceversa. Flex se refiere a fila o columna y grid contempla ambas cosas, filas y columnas.
- Grid sí sustituye a las <tables> para el armado de layouts. (Grid es más sencillo y es dinámico, las tablas no.)

Utilizamos `display:grid` para crear un grid y `grid-template-columns` y `grid-template-rows` para definir el número de columnas y filas.

    ```CSS
    /*layout de 3x3*/
    .container {
        display: grid;
        grid-template-columns: 100px 100px 100px;
        grid-template-rows: 100px 100px 100px;
    }
    ```

Pueden visualizar el layout de GRID desde la consola de chrome.

Podemos indicar a cada item, donde posicionarlo usando grid-row-start, grid-row-end, grid-column-start y grid-column-end, teniendo en cuenta que las filas y columnas empiezan en 1, no en cero.
Si queremos que ocupe 3 columnas y 1 fila, debemos indicar que comience en la columna 1 y termine en la 4. Y que la fila comience en la 1 y termine en la 2.

    ```css
    /*item de 3 columnas y 1 fila*/
    .item-1{
        grid-column-start: 1;
        grid-column-end: 4;
        grid-row-start: 1;
        grid-row-end: 2
    }
```

Se pueden invertir el start y el end y funcionará igual
(Volver a ver los ejemplos de la clase del día 13/02/2025 19:40 aprox)



Se pueden utilizar valores negativos para seleccionar elementos desde el final del grid.

    ```css
    .item-1{
        grid-column-start: 1;
        grid-column-end: -1;
        grid-row-start: 1;
        grid-row-end: -1;
    }
    ```

En vez de seleccionar la fila/columna de destino, podemos utilizar span para indicar cuántas filas/columnas queremos que ocupe un ítem.

    ```css
    .item-1{
        grid-column-start: 1;
        grid-column-end: span 2; /*desde la 1, va a ocupar 2. se amplia un bloque*/
        grid-row-start: 1;
        grid-row-end: span 3; /*se amplia 2 bloques mas*/
    }
    ```

Para reducir grid-column-start y grid-column-end en una sola línea, podemos usar grid-column. Lo mismo con grid-row.

    ```css
    .item-2{
        grid-column: 1/3; /*va de la fila 1 a la 3*/
        grid-row: 2/4; /*va de la columna 2 a la 4*/
    }
    ```

Podemos utilizar una forma aún más corta usando `grid-area`, donde definimos grid-row-start, grid-column-start, grid-row-end y grid-column-end (en ese orden).

    ```css
    .item-2{
        grid-area: 1 / 1 / 4 / 4 /*ocupa toda la pantalla*/
    }
    ```

Con grid es muy simple crear un elemento por encima de otro (cuando interfieren filas y columnas. Manda el orden del html)

Podemos utilizar en el container `grid-gap` para definir un espacio entre las columnas y filas. El mismo soporta un valor para fila y columna, o dos valores para diferenciarlos.

    ```CSS
    /*layout de 3x3*/
    .container {
        display: grid;
        grid-template-columns: 100px 100px 100px;
        grid-template-rows: 100px 100px 100px;
        grid-gap: 10px; /*separación entre filas y columnas*/
        grid-gap: 1em 3em; /*separación independiente para filas y para columnas*/
    }
    ```

Existe la opción repeat() que nos permite repetir el número de veces que quiero para una fila o columna.

    ``` css
    /*layout de 3x3*/
    .container {
        display: grid;
        grid-template-columns: repeat (3, 100px)
        grid-template-rows: repeat (3, 3em)
        grid-gap: 10px; 
    }
    ```

Si agregamos más bloques dentro de nuestro grid, se intentará ubicarlo en la primera posición libre disponible. Si no quedan posiciones libres, se creará una nueva fila.
Estas nuevas celdas no tendrán el tamaño asignado en nuestro grid-template, y se llaman "grid-implictas". Podemos usar `grid-auto-rows: 100px` para definir el tamaño de nuestras nuevas filas.

    ``` css
    /*layout de 3x3*/
    .container {
        display: grid;
        grid-template-columns: repeat (3, 100px)
        grid-template-rows: repeat (3, 3em)
        grid-gap: 10px; 
        grid-auto-rows: 100px;
    }
    ```

También existe el `grid-auto-flow`que nos permite definir si las nuevas celdas se crearán como filas o columnas. (Por defecto se crean nuevas filas, hacia abajo) 

    ``` css
    /*layout de 3x3*/
    .container {
        display: grid;
        grid-template-columns: repeat (3, 100px)
        grid-template-rows: repeat (3, 3em)
        grid-gap: 10px; 
        grid-auto-rows: 100px;
        grid-auto-flow: column;
    }
    ```

    Las unidades que solemos utilizar 
    em, rem, pero se le suma una nueva de valor fraccional, o `fr. Este valor nos permite fraccionar el tamaño disponible.

    Por ejemplo, si tenemos 3 columnas y definimos que la primera columna tenga un tamaño de 1fr, la segunda de 2fr y la tercera de 1fr, la segunda columna ocupará el doble de espacio que las otras 2.

        ``` css
    /*layout de 3x3*/
    .container {
        display: grid;
        grid-template-columns: 1fr 2fr 1 fr;
        grid-template-rows: repeat (3, 3em);
        grid-gap: 10px; 
    }
    ```


    EN ESTA WEB: https://cssgridgenerator.io/
    si indicamos la cuadrícula que queremos, nos da el código