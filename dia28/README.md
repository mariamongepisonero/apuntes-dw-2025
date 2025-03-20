## Recorrer una lista

```js
const hobbies = ["Futbol", "Programar en JS", "Leer"];
for(i=0; i< hobbies.lenght ; i++){
    const hobbie = hobbies[0];
    console.log(hobbie); // 'Futbol' 'Futbol' 'Futbol'
}

//poniendo lenght, no hace falta que nosotros sepamos cuantos elementos tiene la lista, porque lenght lo calcula
// así no hace falta poner i<3 para imprimir los tres

for(i=0; i< hobbies.lenght ; i++){
    const hobbie = hobbies[i];
    console.log(hobbie); // 'Futbol' 'Programar en JS' 'Leer'
}

//poniendo i, recorre todos los elementos

```

En un EventListener, podemos usar KEYUP para que vaya ejecutando la función sobre la marcha, no al hacer clic en botón
