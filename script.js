// Codigo Simulação
let formulario = document.getElementById('formulario');
formulario.addEventListener('submit', function(event) {
    event.preventDefault();
    let resultado = document.getElementById('resultado');

    // Impede o envio do formulário para evitar recarregar a página

    // Numero de voltas escolhido
    let voltas = document.getElementById('voltas');
    let numeroVoltas = Number(voltas.value);

    // Botões de estrategia
    let paradaSelecionada = document.querySelector('input[name="parada"]:checked');

    let corrida = {
        voltas: numeroVoltas,
        paradas: paradaSelecionada.id
    };

    let desgastePneus = {
        macio: 0.08,
        medio: 0.05,
        duro: 0.03
    }

    let nomesPneus = {
        macio: 'Macio',
        medio: 'Médio',
        duro: 'Duro'
    }

    // Monitora o que foi escolhido
    let escolhas = document.querySelectorAll('#escolhapneu select');
    let pneusEscolhidos = [];
    for (let i = 0; i < escolhas.length; i++) {
        pneusEscolhidos.push(escolhas[i].value)

    }



    let quantidadeStints;
    if (corrida.paradas === '1p') {
        quantidadeStints = 2
    } else {
        quantidadeStints = 3
    }

    if (corrida.voltas < quantidadeStints) {
        alert('O número de voltas precisa ser maior ou igual à quantidade de stints.');
        return;
        }
        
    let resumo = document.createElement('h2');

    resumo.textContent = `Resumo da corrida: ${corrida.voltas} voltas | ${quantidadeStints - 1} paradas`;

    resultado.appendChild(resumo);
    let voltasPorStint = Math.floor(corrida.voltas / quantidadeStints)
    let voltasRestantes = corrida.voltas % quantidadeStints



    for (let i = 0; i < quantidadeStints; i++){

        let voltasStint = voltasPorStint;
        

        if (voltasRestantes > 0){
            voltasRestantes--
            voltasStint++
        }

        let desgasteStint = desgastePneus[pneusEscolhidos[i]] * voltasStint;

        let linhaStint = document.createElement('p')

        linhaStint.textContent = `Stint ${i + 1}: ${nomesPneus[pneusEscolhidos[i]]} - ${voltasStint} voltas - Desgaste: ${desgasteStint.toFixed(2)}`;
        resultado.appendChild(linhaStint);

    }
});

function gerarescolhas(quantidadeStints) {
    let escolhastint = document.getElementById('escolhapneu');

    escolhastint.textContent = ''

    for (let i = 0; i < quantidadeStints; i++) {
            
            let labelpneu = document.createElement('label')

            labelpneu.textContent = `Escolha o pneu do Stint ${i + 1}`

            labelpneu.classList.add('label-pneu');

            escolhastint.appendChild(labelpneu);


            let escolhaspneus = document.createElement('select')
            escolhaspneus.required = true;

            escolhaspneus.classList.add('selecao-pneu');

            let opcaoInicial = document.createElement('option');
            opcaoInicial.value = '';
            opcaoInicial.textContent = 'Selecione um pneu';
            opcaoInicial.disabled = true;
            opcaoInicial.selected = true;

            escolhaspneus.appendChild(opcaoInicial);

            

            let valores = ['macio', 'medio', 'duro']
            let pneus = ['Macio', 'Médio', 'Duro']
            

            for (let j = 0; j < pneus.length; j++){

                let Opcoes = document.createElement('option')
                Opcoes.value = valores[j]
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

