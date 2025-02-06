# Introducción a nomenclaturas CSS y BER

Forma de nombrar nuestras clases CSS para mantener código limpio y ordenado. Buscamos código comprensible, predecible y fácil de mantener.

## Nombres de variables/selectores/archivos

Para texto común
- UPPERCASE (mayúsculas)
- lowercase (minúsculas)
- Title Case (la primera letra de cada palabra en mayúscula)

Para variables
- camelCase: `miClaseDeHtml`
    primera letra en minúscula y cada nueva palabra lleva mayúscula
- PascalCase: `MiClaseDeHtml`
    cada palabra tiene primera letra en mayúsculas, sin espacios
- kebab-case: `mi-clase-de-html`
    guion medio entre cada palabra y todo minúsculas (se usa para nombrar archivos)
- snake_case: `mi_clase_de_html`

## Nomenclatura BEM (Block-Element-Modifier)
La página oficial es [BER] (https://getbem.com/naming)

Bloque: encapsula una entidad independiente que tiene significado por sí mismo. Se usa minúsculas para ello. (En el ejemplo: tarjeta). El bloque es el nombre del componente el cual por sí solo tiene sentido (card, header, container, button, footer, menu...)

<style>
    .card{}
</style>


<div class="card">
    <ul>
        <li class=""></li>
    </ul>
</div>

Elementos: Con el nombre de bloque__nombre del elemento. Los elementos se encuentran dentro del bloque, son partes del bloque que no tienen sentido por sí solos (menu item, list item, header title...)

<style>
    .card__header{}
    .card__content{}
    .card__footer{}
</style>

<div class="card">
    <div class="card__header">Cabecera de la Tarjeta</div>
    <div class="card__content">Contenido</div>
    <div class="card__footer">Footer de la Tarjeta</div>
</div>

Evitar usar ids (Dejarlos para JavaScript) y seguir estas nomenclaturas


Modificadores: Etiquetas que se pueden aplicar tanto a bloques como a elementos. Una variación o estado para un bloque o elemento (xmas, disable, highlighted, color yellow, size big...). Va a cambiar la apariencia o comportamiento del mismo.
Puedo tener múltiples "tarjetas", pero quiero que una de ellas tenga un estilo distinto. A ese elemento, se le pone el nombre del bloque -- y modificador. Tiene que ir después de la clase que ya está definida con estilos, no sola.
IMPORTANTE: Si agregamos un modificador, la etiqueta debe incluir también la etiqueta del elemento o bloque. Ej:
<div class="footer footer--red"></div>

<style>
    .card{}
    .card__header{}
    .card__content{}
    .card__footer{}
    .card--navidad{}
</style>

<div class="card">
    <div class="card__header">Cabecera de la Tarjeta</div>
    <div class="card__content">Contenido</div>
    <div class="card__footer">Footer de la Tarjeta</div>
</div>
<div class="card card--navidad">
    <div class="card__header">Cabecera de la Tarjeta</div>
    <div class="card__content">Contenido</div>
    <div class="card__footer">Footer de la Tarjeta</div>
</div>
<div class="card">
    <div class="card__header">Cabecera de la Tarjeta</div>
    <div class="card__content">Contenido</div>
    <div class="card__footer">Footer de la Tarjeta</div>
</div>

Pueden ir combinados

<form class="form__submit--disabled">