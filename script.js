
let formulario = document.getElementById('formulario');
formulario.addEventListener('submit', function(event) {
    event.preventDefault();
    // Impede o envio do formulário para evitar recarregar a página

    function gerarescolhas() {
            let escolhastint = document.createElement('div');
            escolhastint.id = 'escolhapneu'

            let pneuescolhido = document.getElementById('escolhapneu');

            pneuescolhido.textContent = 'Escolha o pneu do Stint'

            



    }
    


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
    let voltasRestantes = corrida.voltas % quantidadeStints
    let desgasteStint = desgaste * voltasPorStint

    

    for (let i = 0; i < quantidadeStints; i++){

        let voltasStint = voltasPorStint;
        

        if (voltasRestantes > 0){
            voltasRestantes--
            voltasStint++
        }

        let desgasteStint = desgaste * voltasStint
        
        console.log(`Stint ${i + 1}: ${voltasStint} voltas`);

        console.log(`Stint ${i + 1}: ${desgasteStint} por voltas`);
    }


    gerarescolhas();
    
    

    
    console.log(`${desgasteTotal}`)
    console.log(`${quantidadeStints}`)
    console.log(`${voltasPorStint}`)
    console.log(`Desgaste por stint: ${desgasteStint}`);
    console.log(`${voltasRestantes}`)
});
