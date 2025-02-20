# Transitions en CSS

Es una forma de cambiar los valores de una o más propiedades de manera suave y gradual. Se pueden aplicar transiciones a cualquier propiedad que acepte valores numéricos (como color, padding, background-color, oppacity...)

No se puede aplicar de flex a grid, de block a hidden... (de que no se vea a que se vea, se hace con oppacity)

Numéricas: 
    1. margin
    2. Font-size
    3. Border-width
    4. Transform (scale, rotate, translate, etc)

Para color:
    1. background-color
    2. color
    3. border-color
    4. box-shadow


## Cómo se definen
Utilizamos la propiedad transition y se puede personalizar de la siguiente manera:

- transition-property: indica la propiedad a animar.
- transition-duration: 4s;
- transition-timing-function: la manera en que se va a llevar a cabo la transición;
- transition-delay: 2s;

Se pueden unificar en una sola: 
- transition: font-size 4s ease-in-out 2s;



La transición se aplica en el elemento que esté siempre visible (nunca en el que lleva focus, hover, etc)

## Pendiente de ver: modo oscuro