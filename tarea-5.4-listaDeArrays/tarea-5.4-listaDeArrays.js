const listado = document.querySelectorAll('li');
let array = [];



for(let i = 0; i < listado.length; i++){
    array.push(Number(listado[i].textContent));
}
// promedio
function promediarArray(){
    let sum = 0;

    for(let i = 0; i < array.length; i++){
        sum += array[i];
    }
    return Number((sum / array.length).toFixed(2));
}
document.querySelector('#promedio').innerText = 
'El promedio del array es: ' + promediarArray(array);

//  menor

function encontrarNumeroMenor(){
    let numeroMasChico = array[0]; // = 5
    for(let i = 0; i < array.length; i++){
        if(array[i] < numeroMasChico){
            numeroMasChico = array[i];
        }
    }   
    return numeroMasChico;  
}
document.querySelector('#mas-chico').innerText = 
'El número más chico del array es: ' + encontrarNumeroMenor(array);

// mayor
function encontrarNumeroMayor(){
    let numeroMasGrande = array[0];
    for(let i = 0; i < array.length; i++){
        if(array[i] > numeroMasGrande){
            numeroMasGrande = array[i];
        }
    }
return numeroMasGrande;
}
document.querySelector('#mas-grande').innerText = 
'El número más grande del array es: ' + encontrarNumeroMayor(array);
// numero más frecuente
function encontrarNumeroMasFrecuente(){
    let numeroMasFrecuente = 0;

    for(let i = 0; i < array.length; i++){
        let contador = 0;
        for(let j = 0; j < array.length; j++){
            if(array[i] === array[j]){
                contador ++
                numeroMasFrecuente = array[i];
            }
        }
    }
return numeroMasFrecuente;
}
document.querySelector('#mas-frecuente').innerText = 
'El número que más se repite es ' + encontrarNumeroMasFrecuente(array);
