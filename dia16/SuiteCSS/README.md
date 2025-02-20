# Suite CSS

- Block (en BEM) -> Pasa a ser Componente
- Element -> Elemento
- Modifier -> Moficicador

Nuevos:
- Utilities
- Estados (on/off)

## Utilities:
- Se escribe con `u-utilityname`. Por ejemplo: `u-red`
- Se escribe con u- y después camelCase
- Se utiliza para aplicar un estilo a cualquier elemento


```CSS
.u-red{
    background-color: red;
    color: white;
}

.u-big{
    font-size: 5rem;
}

.u-sm-text /*texto pequeño (small)*/

.u-md-text /*texto mediano (medium)
*/

.u-lg-text /*texto grande (large)*/
```

## Componente
Igual al bloque de BEM pero se escribe con PascalCase.
Por ejemplo `Header`, `Button`, `SectionHero`, `Card`, `Tweet`...

## Elementos (Part o DescendentName)
Igual que el elemento en BEM, pero se escribe con camelCase (Componente-camelCase). Por ejemplo `Header-title`, `Card-imagenFront`, `Tweet-bodyImage`, `Tweet-bodyText`.

``` html
<article class="Tweet">
    <header class="Tweet-header">
        <img class= "Tweet-headerImage" src="" alt="">
        ......
    </header>
    <div class= "Tweet-bodyText">
    .....
    </div>
</article> 
```

## Modifiers
Al igual que en BE, y se utiliza (Componente--nombreModificador)
Son distintos al resto pero no cambia su estado.

```html
<button class="Button">Botón normal</button>
<button class= "Button--navidad">Botón de Navidad</button>
```

## Estados
Nuevo: Clases para elementos que marcan el estado de un componente/elemento. Se escribe con camelCase y se usa la palabra `is-` delante. Siempre tienen que ir acompañado del bloque/elemento que modifica.

```CSS
.Tweet{} /*Estilos de un tweet común -cerrado, en este caso-*/
.Tweet.is-expanded{} /*Estilos para un tweet abierto*/
```

```html
<article class="Tweet">
    ...
</article>
<article class="Tweet is-expanded">
    ...
</article>
```