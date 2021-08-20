
const $calcular = document.querySelector('#calcular');

$calcular.onclick = function() {
    const $horas = document.querySelectorAll('.horas');
    const $minutos = document.querySelectorAll('.minutos');
    const $segundos = document.querySelectorAll('.segundos');

    let horasPorVideo = 0;
    let minutosPorVideo = 0;
    let segundosPorVideo = 0;

    for(let i = 0; i < document.querySelectorAll('.horas').length; i++){
        horasPorVideo += Number($horas[i].value);
    }

    for(let i = 0; i < document.querySelectorAll('.minutos').length; i++){
        minutosPorVideo += Number($minutos[i].value);
    }

    for(let i = 0; i < document.querySelectorAll('.segundos').length; i++){
        segundosPorVideo += Number($segundos[i].value);
    }

    const totalSumaDeSegundos =  horasPorVideo*360 + minutosPorVideo*60 +segundosPorVideo
    const horasTotalesVideos = totalSumaDeSegundos / 360;
    const minutosTotalesVideo = (totalSumaDeSegundos % 360) / 60
    const segundosTotalesVideo = ((totalSumaDeSegundos % 360) % 60)
    
    
    document.querySelector("#imprimir").innerText = 
    `La suma total del tiempo en los videos es de: 
    ${Math.trunc(horasTotalesVideos)} horas, ${Math.trunc(minutosTotalesVideo)} minutos y ${Math.trunc(segundosTotalesVideo)} segundos`
    
    return false
}
