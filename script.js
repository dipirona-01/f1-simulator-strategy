// Codigo Simulação
let formulario = document.getElementById('formulario');
formulario.addEventListener('submit', function(event) {
    event.preventDefault();
    // Impede o envio do formulário para evitar recarregar a página

    // Numero de voltas escolhido
    let voltas = document.getElementById('voltas');
    let numeroVoltas = Number(voltas.value);

    // Escolhe o pneu
    let pneu = document.querySelector('input[name="pneu"]:checked');

    // Botões de estrategia
    let paradaSelecionada = document.querySelector('input[name="parada"]:checked');

    let corrida = {
        voltas: numeroVoltas,
        pneu: pneu.id,
        paradas: paradaSelecionada.id
    };

    let desgastePneus = {
        Macio: 0.08,
        Médio: 0.05,
        Duro: 0.03
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

    
    // Monitora o que foi escolhido
    let escolhas = document.querySelectorAll('#escolhapneu select');

    for (let i = 0; i < escolhas.length; i++) {
        escolhas[i].value
        console.log(escolhas[i].value);
    }



    
    console.log(`${desgasteTotal}`)
    console.log(`${quantidadeStints}`)
    console.log(`${voltasPorStint}`)
    console.log(`Desgaste por stint: ${desgasteStint}`);
    console.log(`${voltasRestantes}`)
});

function gerarescolhas(quantidadeStints) {
    let escolhastint = document.getElementById('escolhapneu');

    escolhastint.textContent = ''

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

// Monitora os botões
let paradas = document.querySelectorAll('input[name="parada"]');
// Percorre os botões de estrategia
for (let i = 0; i < paradas.length; i++) {

    paradas[i].addEventListener('change', function() {
        let quantidadeStints;
        
        if (this.id === '1p') {
            quantidadeStints = 2
        } else {
            quantidadeStints = 3
        }


        gerarescolhas(quantidadeStints);
    });

}

