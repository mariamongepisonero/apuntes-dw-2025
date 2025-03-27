## Prefers-reduce-motion media query

Los usuarios pueden activar en sus dispositivos la preferencia de reduce motion.

- Win: config -> accesibilidad -> mostrar animaciones en windows
- Mac: Pref sistema -> Accesibilidad -> Mostrar -> Reducir movimientos
- iOS: Config -> accesibilidad -> movimiento -> reducir movimiento
- Android: Config -> accesibilidad -> Eliminar animaciones


```CSS
@media (prefers-reduced-motion: reduce) {
    .parallax {
        background-attachment: scroll;
    }
}
```
Para js usamos windows.matchMedia

```JS
if(window.matchMedia('(prefers-reduced-motion: reduce)').matches){
    //no aplicar efectos
    console.log("No aplicar parallax por decisión del usuario");
} else {
    //aplicar efectos de parallax
    console.log("Se aplica el parallax");
    ParallaxEffect();
}
```

Conf en consola: tres puntitos, more tools, arrendery, emulate CSS opción no emulation