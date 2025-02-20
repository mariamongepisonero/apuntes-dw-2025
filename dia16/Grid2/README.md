Existe la opción minmax() que nos permite definir un tamaño mínimo y máximo para las columnas y filas.


``` CSS
.container{
    display:grid;
    grid-template-columns: minmax(100px, 1fr) minmax(200px, 2fr) minmax(100px, 1fr); /*3 columnas de mínimo 100px)*/;
}
```

# Grid Template Areas ********
Podemos nombrar las celdas utilizando `grid-template-areas` y asignando un nombre a cada una:

```CSS
.container{
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(3, 100px);
    grid-gap: 10px;
    grid-template-areas: 
    "header header header" /*para que el header ocupe las tres columnas que hemos definido antes*/
    "main main sidebar"
    "footer footer footer";
}

/*si se quiere dejar una de las columnas vacías, por ejemplo un lado del main, se sustituye la palabra por un . */

/*para que funcione hay que indicar a cada class qué grid-area es*/
.item-1{ /*seguramente esta clase en realidad se llame header*/
    grid-area: header;
}

.item-2{ /*seguramente esta clase en realidad se llame main*/
    grid-area: main;
}

.item-3{ /*class="sidebar"*/
    grid-area: sidebar;
}

.item-4{ /*class="footer"*/
    grid-area: footer;
}
```

Podemos utilizar `justify-items` y `align-items` para alinear los elementos dentro de las celdas. Sus opciones posibles son: start, end, center, stretch y baseline. Por defecto, se aplica stretch.

``` CSS
.container{
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(3, 100px);
    grid-gap: 10px;
    justify-items: end;
    align-items: end;
}
```

Podemos decirle a un ítem específico que se linee de manera diferente utilizando `justify-self` y `align-self`.
Sus opciones son las mismas: start, end, center, stretch y baseline.

```CSS
.item-1{
    justify-self: center;
    align-self: stretch;
}
```

Podemos alinear nuestro grid en base a su contenedor utilizando `justify-content` y `align-content`. Sus opciones son: start, end, center, stretch, space-around, space-between y space-evenly.

``` CSS
.container{
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(3, 100px);
    grid-gap: 10px;
    justify-content: center;
    align-content: center;
}
```

Podemos crear un grid responsive con el uso de `auto-fit`. Esto nos permite que los elementos se ajusten al tamaño del contenedor.

``` CSS
.container{
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(100px, 1fr)); /*tantas columnas como entren, de mínimo 100px*/
    grid-template-rows: repeat(4, 1fr);
    grid-gap: 10px;
}
```