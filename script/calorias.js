
document.getElementById('calcular').addEventListener('click', function() {
    const alimento = document.getElementById('alimento').value;
    const quantidade = parseFloat(document.getElementById('quantidade').value);
    const resultadoDiv = document.getElementById('resultado');
  
    if (!alimento || isNaN(quantidade) || quantidade <= 0) {
      resultadoDiv.textContent = 'Por favor, insira valores válidos.';
      resultadoDiv.style.color = '#CE0544';
      return;
    }
  
    // Tabela de calorias por 100g
    const tabelaCalorias = {
      abacate: 160,
      abacaxi: 50,
      arroz: 130,
      arroz_integral: 112,
      banana: 89,
      batata_inglesa: 77,
      batata_doce: 86,
      carne_boi: 250,
      cenoura: 41,
      frango: 165,
      feijao: 347,
      leite: 61,
      maca: 52,
      macarrao: 158,
      ovo: 155,
      pao: 271,
      queijo: 280,
      salmao: 206,
      tomate: 18,
      uva: 67,
      chocolate: 535,
      iogurte: 63,
    

    };
  
    const caloriasPor100g = tabelaCalorias[alimento];
    const calorias = ((caloriasPor100g * quantidade) / 100).toFixed(2);
  
    resultadoDiv.textContent = `O alimento selecionado contém ${calorias} kcal.`;
    resultadoDiv.style.color = '#333';
  });
  