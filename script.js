
let formulario = document.getElementById('formulario');
formulario.addEventListener('submit', function(event) {
    event.preventDefault();
    // Impede o envio do formulário para evitar recarregar a página

    let voltas = document.getElementById('voltas');
    let numeroVoltas = Number(voltas.value);

    let pneu = document.querySelectorAll('input[name="pneu"]');

    let paradas = document.querySelectorAll('input[name="parada"]');

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

    let pneusescolhidos = [escolhaspneus.value]

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

    function gerarescolhas() {
    let escolhastint = document.getElementById('escolhapneu');

    escolhastint.textContent = 'Escolha o pneu do Stint'

    for (let i = 0; i < quantidadeStints; i++) {
            
            let labelpneu = document.createElement('label')

            labelpneu.textContent = `Escolha o pneu do Stint ${i + 1}`

            escolhastint.appendChild(labelpneu);


            let escolhaspneus = document.createElement('select')

            let pneus = ['Macio', 'Médio', 'Duro']

            for (let j = 0; j < pneus.length; j++){

                let Opcoes = document.createElement('option')

                Opcoes.textContent = `${pneus[j]}`

                escolhaspneus.appendChild(Opcoes)
            }

            
            escolhastint.appendChild(escolhaspneus); 
        }

    }



    gerarescolhas();
    
    

    
    console.log(`${desgasteTotal}`)
    console.log(`${quantidadeStints}`)
    console.log(`${voltasPorStint}`)
    console.log(`Desgaste por stint: ${desgasteStint}`);
    console.log(`${voltasRestantes}`)
});
