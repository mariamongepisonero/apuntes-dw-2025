Enlace biblioteca de estilos:

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">

Doc oficial sobre media queries:
https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_media_queries/Using_media_queries


# Qué es una Media Query (MQ)
- Declaraciones en CSS que nos permiten definir qué reglas aplicar a partir de unas reglas asignadas por nosotros.

# Sintaxis de una MQ:
Una Media Query se compone de las siguientes partes:
- un @media, la cual es una palabra reservada [keyword]
- un tipo de media (screen, print, all, speech) [media types]
- operadores (and, not u only) [operators]
- breakpoint: una condicion [max-width, min-width,etc]
- Un bloque de CSS [nuestras reglas de css]

Ejemplo:
```CSS
/*keyword mediaType Operador(es) (condición o breakpoint) CSS*/
  @media  screen    and          (breakpoint)             {}
  @media not|only screen and|or (min-width: 600px) {
    body {
        background-color: lightblue;
    }

    h1 {
        color: red;
    }
  }
  /*donde pone not|only no se suele poner nada normalmente*/

/*Combinar breakpoints*/
@media screen and (min-width: 600px) and (max-width:800px) {
    body{ background-color: lightblue; }
    }

@media screen and (orientation: landscape) {
    body{ background-color: lightblue; }
    }

/*reglas para hacer un modo oscuro*/
@media screen and (prefers-color-schema: dark) {
    body{ 
        background-color: darkgray; 
        color: white}
    }
```


### Media Types

- All: todos los dispositivos
- Print: Material de vista previa de impresión
- Screen: Pantallas (tablet, móvil ordenador...)

- Speech: Dispositivos de conversión de texto a voz (depreciate)
- Otros: se usaban antes (depreciated) -> tv, handheld, braile... No van más a partir de CSS3

Ejemplo de print: 
```CSS 
@media print {
    .no-imprimir {
        display: none !important;
    }
}
/*reglas para hacer que algunas cosas de la web no se impriman al sacar impresa la página*/
```

### Tips para utilizarlos:
- Sobreescriben las reglas de CSS normales, pero no posee una mayor especificidad por lo tanto los media queries deben estar por debajo de las reglas que quiere reemplazar. (Primero reglas que queremos y después los media queries)
- Deben tener el mismo selector para que reemplace la regla que deseamos. Como excepción, podemos utilizar las reglas principales en vez de específicas (background para reemplazar background-color)
- Pensar bien los breakpoints
- Podemos utilizar un @media para cada selector o una sola para todos los selectores (recomendación, la segunda opción)
- Mobile First!!! Diseñar las webs por defecto para móviles, son diseños más sencillos, y con media query ir añadiendo los contenidos que aparecerán tb en dispositivos más grandes


(2024)
- Mobile (55% dispositivos): 320px-480px
- Tablets (2%): 768px-1024px
- Desktop (43%): 1024px-1920px


```CSS
/*Mobile First*/
@media only screen and (min-width: 320px){
    /*Reglas para mobile*/
}

/*Tablet*/
@media only screen and (min-width: 768px){
    /*Reglas para tablet*/
}

/*Desktop*/
@media only screen and (min-width: 1024px){
    /*Reglas para desktop*/
}
```


## Utilizarlo en HTML

Podemos utilizar los MQ directamente en nuestro html con el atributo "media". Antes que nada, debemos asegurarnos que exista la etiqueta meta viewport en el head.

<meta name="viewport" content="width=device-width, initial-scale=1.0">

Ejemplos no recomendados:
En links o dentro de style en el head.


# Ejemplo de media queries en imágenes (usando picture)
(Ok)
```html 
<!-- Habitualmente introducimos imágenes así -->
<img src="./img/foto-pequena.jpg" alt="Mi Mascota">
```

Se creó la etiqueta picture para media query

```html
<picture>
        <source media="(min-width: 650px)" srcset="./img/grande.jpg">
        <source media="(min-width: 450px)" srcset="./img/mediana.jpg">
        <img src="./img/foto-pequena.jpg" alt="Mi Mascota">
</picture>
```



## Trucos para un buen responsive

- Utilizar medidas relativas (%, vw, vh, em y rem) [tratar de no utilizar píxeles, pues son medidas fijas]
- No utilizar etiquetas de height (lo mejor es que sea automático, atendiendo al width de la pantalla). Height sí que se utiliza para header y footer pero nada más.


## Comprobación de nuestro responsive + media queries

- Utilizar el inspector de elementos de Chrome (inspeccionar, segundo icono: toogle device toolbar)
- Probarla en nuestros propios dispositivos
- Usar la App https://responsively.app para probar pantallas simultáneas.


## Links de Interés

[CSS MQ w3Schools](https://www.w3schools.com/css/css3_mediaqueries.asp)
[Responsive Design w3Schools](https://www.w3schools.com/css/css_rwd_mediaqueries.asp)
[Responsive Design MDN](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Media_queries)
[SCSS + MQ](https://www.freecodecamp.org/news/learn-css-media-queries-by-building-projects/)
