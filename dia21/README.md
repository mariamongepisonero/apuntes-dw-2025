# Variables en CSS

Se pueden crear variables de CSS para reutilizar valores en diferentes partes del código

- Mejora la legibilidad del código
- Facilita la actualización de valores.

Se suelen crear de manera global en la raíz del documento, en web el root es la etiqueta html, en svg es la etiqueta svg, además tiene mayor especificidad ":root" que "html".

[Ejemplo Bootstrap] (https://getbootstrap.com/docs/4.0/getting-started/theming/#available-variables)

```CSS
:root{
    --blue: #007bff;
  --indigo: #6610f2;
  --purple: #6f42c1;
  --pink: #e83e8c;
  --red: #dc3545;
  --orange: #fd7e14;
  --mi-color-principal: #fff;
  --mi-color-secundario: #000;
  --mi-bg-principal: #000;
  --mi-bg-secundario:#fff;
}

.container{
    background-color: var(--mi-bg-principal);
    color: var(-mi-color-principal);
}

```