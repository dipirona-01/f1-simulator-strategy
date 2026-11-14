
let formulario = document.getElementById('formulario');
formulario.addEventListener('submit', function(event) {
    event.preventDefault();
    // Impede o envio do formulário para evitar recarregar a página
    let voltas = document.getElementById('voltas');
    let numeroVoltas = Number(voltas.value);

    let pneu = document.querySelector('input[name="pneu"]:checked');

    let paradas = document.querySelector('input[name="parada"]:checked');

    let corrida = {
        voltas: numeroVoltas,
        pneu: pneu.id,
        paradas: paradas.id
    };

    let desgastePneus = {
        macio: 0.08,
        medio: 0.05,
        duro: 0.03
    }

    let desgaste = desgastePneus[corrida.pneu];
    let desgasteTotal = desgaste * corrida.voltas
    



    let quantidadeStints;
    if (corrida.paradas === '1p') {
        quantidadeStints = 2
    } else {
        quantidadeStints = 3
    }

    let voltasPorStint = Math.floor(corrida.voltas / quantidadeStints)
    let voltasRestantes = voltasPorStint % quantidadeStints
    let desgasteStint = desgaste * voltasPorStint
    


    console.log(`${desgasteTotal}`)
    console.log(`${quantidadeStints}`)
    console.log(`${voltasPorStint}`)
    console.log(`Desgaste por stint: ${desgasteStint}`);
    console.log(`${voltasRestantes}`)
});
