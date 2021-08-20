
document.querySelector('#calcular-salario-mensual').onclick = function(){
    const salarioAnual = Number(document.querySelector('#salario-anual').value)
    const salarioMensual = calcularSalarioMensual(salarioAnual);
  
    document.querySelector('#mostrar-salario-mensual').value = salarioMensual;
  
    return false;
  
  }

