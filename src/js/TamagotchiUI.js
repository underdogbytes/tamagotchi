import { assets, tamagotchiElement } from './assets.js';

export class TamagotchiUI {
  constructor() {
  }

  atualizarBarraStatus(tamagotchi) {
    document.getElementById('alimentacao').innerHTML = tamagotchi.fome;
    document.getElementById('sono').innerHTML = tamagotchi.sono;

    // Estados é só para debug, pode remover depois:
    document.getElementById('estados').innerHTML = tamagotchi.status;
  }

  renderizar(tamagotchi) {
    this.atualizarBarraStatus(tamagotchi);
    // Morreu agorinha:
    if (tamagotchi.checaEstado('morto')) {
      tamagotchiElement.imagem.src = assets['morto'].imagem;
      tamagotchiElement.mensagem.innerHTML = assets['morto'].mensagem;
    } else if 
    // Na paz de Cristo:
    (tamagotchi.checaEstado('sono_1') && tamagotchi.checaEstado('fome_1')) {
      tamagotchiElement.imagem.src = assets['vivo'].imagem;
      tamagotchiElement.mensagem.innerHTML = assets['vivo'].mensagem;
    } else if
    // Sem sono, mas com fome:
    (tamagotchi.checaEstado('sono_1')) {
      if (tamagotchi.checaEstado('fome_2')) {
        tamagotchiElement.imagem.src = assets['fome_2'].imagem;
        tamagotchiElement.mensagem.innerHTML = assets['fome_2'].mensagem;
      }
      if (tamagotchi.checaEstado('fome_3')) {
        tamagotchiElement.imagem.src = assets['fome_3'].imagem;
        tamagotchiElement.mensagem.innerHTML = assets['fome_3'].mensagem;
      }
    } else if
    // Com sono, mas sem fome:
    (tamagotchi.checaEstado('fome_1')) {
      if (tamagotchi.checaEstado('sono_2')) {
        tamagotchiElement.imagem.src = assets['sono_2'].imagem;
        tamagotchiElement.mensagem.innerHTML = assets['sono_2'].mensagem;
      }

      if (tamagotchi.checaEstado('sono_3')) {
        tamagotchiElement.imagem.src = assets['sono_3'].imagem;
        tamagotchiElement.mensagem.innerHTML = assets['sono_3'].mensagem;
      }

      if (tamagotchi.checaEstado('sono_4')) {
        tamagotchiElement.imagem.src = assets['sono_4'].imagem;
        tamagotchiElement.mensagem.innerHTML = assets['sono_4'].mensagem;
      }
    } else
    // Com sono e com fome:
    {
      tamagotchiElement.imagem.src = 'src/img/creatures/shark-hammer/babado.png';
      tamagotchiElement.mensagem.innerHTML = 'Você foi comprar um cigarro não foi?';
    }
  }

  semFome() {
    tamagotchiElement.imagem.src = assets['fome_1'].imagem;
    tamagotchiElement.mensagem.innerHTML = assets['fome_1'].mensagem;
  }

  semSono() {
    tamagotchiElement.imagem.src = assets['sono_1'].imagem;
    tamagotchiElement.mensagem.innerHTML = assets['sono_1'].mensagem;
  }
}