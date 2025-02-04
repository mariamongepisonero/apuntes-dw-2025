FORMULARIOS

    - Los formularios utilizan las etiquetas envolventes de <form>
    - Utilizamos etiquetas <input> para ingresar datos. Algunos tipos ("type") de ellos son: radio, checkbox, text, email, password,submit (para enviar el formulario) EJEMPLOS DE TYPES MÁS ABAJO
    - Todos los inputs REQUIEREN el atributo "name" para enviar la información. Este debe ser único, excepto <input type="radio">, que deben tener los mismos (entre las opciones)
    -Además de etiquetas <input> utilizamos otras para algunos tipos de datos como <textarea>, <select> (siempre acompañado de <option>)...
    - Los inputs suelen estar acompañados de un <label> como dato descriptivo


Métodos (<method>) de GET y POST para enviar información:
    - GET tiene un límite de 2048 caracteres y POST no (se utiliza para enviar información de mayor tamaño, incluyendo el upload de archivos).
    - GET es visible en la URL, y POST utiliza el cuerpo de la petición.
    - Normalmente, GET se utiliza para obtener información y POST para enviarla.


Ejemplos de formularios GET:
    - Buscadores (es visible en URL, puedes guardar el enlace de la búsqueda)
    - Filtros
    - Paginación


Ejemplos de formulario POST:
    - Formulario de contacto
    - Formulario de login/registro
    - Formulario de pago


TAREA: Hacer un login-form.html sin estilos enviando información al atributo action="#" (página a la que le voy a enviar la información)
Que usuario y clave sean obligatorios


TAREA:
Investigar los siguientes types, explicar qué hacen y crear un ejemplo en "otros-inputs.html"

- Número (<input type="number">):
Permite al usuario ingresar números dentro de un rango definido por los atributos min y max. Si el usuario intenta ingresar un valor fuera de este rango, el navegador puede mostrar una advertencia.
<input type="number" id="numero" name="numero" min="0" max="100">

- Color (<input type="color">):
Permite seleccionar un color a través de una interfaz visual (una paleta de colores). El valor seleccionado se devuelve en formato hexadecimal (por ejemplo, #ff0000).
<input type="color" id="color" name="color">

- Date (<input type="date">):
Ofrece un calendario desplegable para seleccionar fechas. La selección se envía en el formato YYYY-MM-DD si el navegador es compatible.
<input type="date" id="fecha" name="fecha">

- File (<input type="file">):
Permite al usuario subir archivos desde su dispositivo. Puedes limitar el tipo de archivos permitidos usando el atributo accept, por ejemplo, accept=".jpg,.png". 
Cuando se usa este input hay que definir la propiedad enctype="multipart/form-data" y el form method debe ser POST
<form method="POST" enctype="multipart/form-data">
<input type="file" id="archivo" name="archivo">

- Campo oculto (<input type="hidden">):
Este tipo de input permite enviar datos al servidor sin mostrarlos al usuario. Se utiliza comúnmente para datos técnicos o de configuración, como identificadores o tokens.
<input type="hidden" id="oculto" name="oculto" value="valorSecreto">

- Rango (<input type="range">):
Proporciona una barra deslizante que permite seleccionar valores dentro de un rango definido por min y max. Ideal para interfaces que no requieren precisión exacta en la entrada.
<input type="range" id="rango" name="rango" min="0" max="100">

- Botón de reinicio (<input type="reset">):
Restablece todos los campos del formulario a sus valores iniciales.
<input type="reset" value="Restablecer formulario">



OTROS INPUTS TYPE:
<input type="button">
<input type="checkbox">
<input type="color">
<input type="date">
<input type="datetime-local">
<input type="email">
<input type="file">
<input type="hidden">
<input type="image">
<input type="month">
<input type="number">
<input type="password">
<input type="radio">
<input type="range">
<input type="reset">
<input type="search">
<input type="submit">
<input type="tel">
<input type="text">
<input type="time">
<input type="url">
<input type="week">


Nuevas etiquetas:
    - Teléfono
    - URL
    - Search
    - Time
    - Week
    - Month
    - Datetime-local