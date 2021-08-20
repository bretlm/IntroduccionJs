const $enviarDatos = document.querySelector('#enviar-datos');

$enviarDatos.onclick = function(){
    const $nombreUsuario = document.querySelector('#primer-nombre').value;
    const $segundoNombreUsuario = document.querySelector('#segundo-nombre').value;
    const $apellidoUsuario = document.querySelector('#apellido').value;
    const $edadUsuario = Number(document.querySelector('#edad').value);

    document.querySelector('#imprimir-datos').value = `${$nombreUsuario} ${$segundoNombreUsuario} ${$apellidoUsuario} ${$edadUsuario}`;

    document.querySelector('#saludo').innerText = `¡Bienvenido ${$nombreUsuario}!`;

    return false;

}
