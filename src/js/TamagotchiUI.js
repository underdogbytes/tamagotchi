const assets = {
  'vivo': {
    imagem: 'src/img/creatures/shark-hammer/happy.png',
    mensagem: ':)'
  },
  'fome_2': {
    imagem: 'src/img/creatures/shark-hammer/bored.png',
    mensagem: 'Uma coquinha gelada seria maneiro, hein!?'
  },
  'fome_3': {
    imagem: 'src/img/creatures/shark-hammer/sad.png',
    mensagem: 'Estou com MUITA fome!!!'
  },
  'sono_2': {
    imagem: 'src/img/creatures/shark-hammer/sleep/comecandoSono.png',
    mensagem: 'Tô capotando o corsa'
  },
  'sono_3': {
    imagem: 'src/img/creatures/shark-hammer/sleep/comSono.png',
    mensagem: 'Vamo dormir logo que não somos herdeiros'
  },
  'sono_4': {
    imagem: 'src/img/creatures/shark-hammer/sleep/insonia.png',
    mensagem: 'Não lembro a última vez que dormi, me tornei um dev em uma startMerda?'
  },
  'morto': {
    imagem: 'src/img/creatures/shark-hammer/dead.png',
    mensagem: 'Morri x.x'
  }
}

export class TamagotchiUI {
  constructor(nome, imagem, falaBalaozinho) {
    this.nome = nome ?? 'Gsszzz';
    this.imagem = imagem ?? assets['vivo'].imagem;
    this.falaBalaozinho = falaBalaozinho ?? 'Olá!';
  }

  atualizarBarraStatus(tamagotchi) {
    document.getElementById('alimentacao').innerHTML = tamagotchi.fome;
    document.getElementById('sono').innerHTML = tamagotchi.sono;

    // Estados é só para debug, pode remover depois:
    document.getElementById('estados').innerHTML = tamagotchi.status;
  }

  renderizar(tamagotchi) {
    this.atualizarBarraStatus(tamagotchi);

    // Atualizando img/msg de acordo com estado:
    let imagem = document.getElementById('tamagotchi');
    let mensagem = document.getElementById('tamagotchi_msg');

    // Morreu agorinha:
    if (tamagotchi.checaEstado('morto')) {
      imagem.src = assets['morto'].imagem;
      mensagem.innerHTML = assets['morto'].mensagem;
    } else if 
    // Na paz de Cristo:
    (tamagotchi.checaEstado('sono_1') && tamagotchi.checaEstado('fome_1')) {
      imagem.src = assets['vivo'].imagem;
      mensagem.innerHTML = assets['vivo'].mensagem;
    } else if
    // Sem sono, mas com fome:
    (tamagotchi.checaEstado('sono_1')) {
      if (tamagotchi.checaEstado('fome_2')) {
        imagem.src = assets['fome_2'].imagem;
        mensagem.innerHTML = assets['fome_2'].mensagem;
      }
      if (tamagotchi.checaEstado('fome_3')) {
        imagem.src = assets['fome_3'].imagem;
        mensagem.innerHTML = assets['fome_3'].mensagem;
      }
    } else if
    // Com sono, mas sem fome:
    (tamagotchi.checaEstado('fome_1')) {
      if (tamagotchi.checaEstado('sono_2')) {
        imagem.src = assets['sono_2'].imagem;
        mensagem.innerHTML = assets['sono_2'].mensagem;
      }

      if (tamagotchi.checaEstado('sono_3')) {
        imagem.src = assets['sono_3'].imagem;
        mensagem.innerHTML = assets['sono_3'].mensagem;
      }

      if (tamagotchi.checaEstado('sono_4')) {
        imagem.src = assets['sono_4'].imagem;
        mensagem.innerHTML = assets['sono_4'].mensagem;
      }
    } else {
      // Com sono e com fome:
      imagem.src = 'src/img/creatures/shark-hammer/babado.png';
      mensagem.innerHTML = 'Você foi comprar um cigarro não foi?';
    }
  }
}