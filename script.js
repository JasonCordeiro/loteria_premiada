let ganhador = {
    nome: 'Adamastor',
    nascimento: '16/09/1986',
    cpf: '123.321.789-98',
    estadoCivil: 'Casado'
  }

// Ex. 1

function ganhadorOuNao(nome, cpf) {
    let nomeTratado = nome[0].toUpperCase()
    for (let panda = 1; panda < nome.length; panda++) {
        nomeTratado += nome[panda].toLowerCase()    
    }
    console.log(nomeTratado)
    if (ganhador.nome == nomeTratado) {
        return 'É ganhador!';
    }
    return 'Não é ganhador!'
}

console.log(ganhadorOuNao("Adamastor", "123.321.789-98" ))


// Ex. 2

let naoGanhador1 = {
    nome: 'Adamastor',
    nascimento: '16/09/1986',
    cpf: '123.321.789-98',
    estadoCivil: 'Casado'
  }

  let naoGanhador2 = {
    nome: 'Adamastor',
    nascimento: '16/09/1986',
    cpf: '123.321.789-98',
    estadoCivil: 'Casado'
  }


function naoGanhadores(pessoa) {
    let listaNaoGanhadores = []
    if (ganhadorOuNao(pessoa.nome, pessoa.cpf) === 'Não é ganhador!') {
        listaNaoGanhadores.push(pessoa)
    }
    return `Vieram reclamar o prêmio ${listaNaoGanhadores.length} pessoa(s)`
}

console.log(naoGanhadores(naoGanhador2));
