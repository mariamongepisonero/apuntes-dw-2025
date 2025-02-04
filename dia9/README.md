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

## Nomenclatura BER (Block-Element-Modifier)
La página oficial es [BER] (https://getbem.com/naming)

Bloque: encapsula una entidad independiente que tiene significado por sí mismo. Se usa minúsculas para ello. (En el ejemplo: tarjeta)

<style>
    .card{}
</style>


<div class="card">
    <ul>
        <li class=""></li>
    </ul>
</div>

Elementos: Con el nombre de bloque__nombre del elemento

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


Modificadores: Etiquetas que se pueden aplicar tanto a bloques como a elementos. Va a cambiar la apariencia según su estado.
Puedo tener múltiples "tarjetas", pero quiero que una de ellas tenga un estilo distinto. A ese elemento, se le pone el nombre del bloque -- y modificador. Tiene que ir después de la clase que ya está definida con estilos, no sola.

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