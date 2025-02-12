# Unidades de medida en CSS: px, %, em y rem

## Pixel
Son unidades absolutas que representan un punto en pantalla. Son ideales para tamaños y dimensiones precisos que no deben cambiar en relación con otros elementos. Es recomendable usarlo para bordes, imágenes y otros elementos de dimensión fija.

## Porcentajes %
Es una unidad relativa al tamaño del elemento padre. Si el padre es de 200px y el elemento tiene un width del 50%, el ancho será de 100px. Esta medida es útil para diseño fluidos y responsive que se adapten al tamaño de pantalla. Es recomendable para contenedores que varíen según el ancho de pantalla. 

# EM 
La unidad "em" es relativa al tamaño de la fuente del elemento padre (o el suyo, si lo tiene). Por ejemplo, si el padre tiene un `font-size: 10px`: y un `margin:3em`; el margen será de 30px.

Esta unidad es útil para crear tamaños de texto y márgenes que escalen con el tamaño de la fuente. Esto mejora la accesibilidad y flexibilidad del diseño.
Por defecto, los navegadores asignan el font-size inicial a 16px.
(Útil para que sea responsive, si se amplia el tamaño del texto al ampliar la pantalla, crecerá también el margen, por ejemplo, y se conservarán las dimensiones.)

```css
    .card{
        font-size: 16px; /*16px*/
        padding: 1.5em; /*24px*/
    }
```

# REM (root EM)
Es relaviva al tamaño de la fuente de la RAIZ del documento (normalmente es <html>, pero no siempre). Si el tamaño de la fuente del HTML es de 8px y un elemento descendente en varios niveles (nieto) tiene una medida de 3rem, su medida será de 24px.
Rem es útil para mantener una escala consistente en todo el documento, independientemente de la estructura del DOM.
Es recomendable usar rem para tamaños globales como el tamaño de la fuente principal y los márgenes, para garantizar coherencia en todo el sitio.

```css
html {
    font-size: 16px;
}

.card{
    font-size; 2em; /* 32px */
}

.card__title {
    /* el rem ignora el font-size de .card */
    margin: 1rem; /* 16px */
}