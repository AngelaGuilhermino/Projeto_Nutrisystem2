document.getElementById('calcular').addEventListener('click', function () {
  const altura = parseFloat(document.getElementById('altura').value);
  const peso = parseFloat(document.getElementById('peso').value);
  const resultadoDiv = document.getElementById('resultado');

  if (isNaN(altura) || isNaN(peso) || altura <= 0 || peso <= 0) {
    resultadoDiv.textContent = 'Por favor, insira valores válidos.';
    resultadoDiv.style.color = '#B2071C';
    return;
  }

  const imc = (peso / (altura * altura)).toFixed(2);

  let classificacao = '';
  if (imc < 18.5) {
    classificacao = 'Abaixo do peso';
  } else if (imc < 25.0) {
    classificacao = 'Eutrófico';
  } else if (imc < 30.0) {
    classificacao = 'Sobrepeso';
  } else if (imc < 35.0) {
    classificacao = 'Obesidade grau I';
  } else if (imc < 40.0) {
    classificacao = 'Obesidade grau II';
  } else {
    classificacao = 'Obesidade grau III';
  }
    resultadoDiv.textContent = `Seu IMC é ${imc} (${classificacao}).`;
  resultadoDiv.style.color = '#333';
});
