import { assets, tamagotchiElement } from './assets.js';

export class TamagotchiUI {
  #ultimaChave = null;

  constructor() {
    this.els = {
      fome: document.getElementById('alimentacao'),
      sono: document.getElementById('sono'),
      estados: document.getElementById('estados'), // usado par debug
      imagem: tamagotchiElement.imagem,
      mensagem: tamagotchiElement.mensagem
    };
  }

  #getChavePrioritaria(tamagotchi) {
    const status = tamagotchi.status;

    // 1. Prioridade máxima:
    // Morte (aka morreu agorinha)
    if (status.includes('morto')) return 'morto';

    // 2. Prioridade secundária:
    // Estados Críticos 4 ou 3 (exceto humor que é descrecente e até agr não mata o bicho)
    const critico = status.find(s => (s.includes('_4') || s.includes('_3')) && !s.startsWith('humor_'));
    if (critico) return critico;

    // 3. Casos especiais:
    // fome e sono moderados ao mesmo tempo
    if (status.includes('fome_2') && status.includes('sono_2')) return 'chateado';

    // 4. Retorna o primeiro estado relevante que encontrar (exceto humor por enquanto)
    const moderado = status.find(s => s.includes('_2') && !s.startsWith('humor_'));
    if (moderado) return moderado;

    // 5. Default:
    // É sobre isso e tá tudo bem
    return 'vivo';
  }
  
  renderizar(tamagotchi) {
    // Atualizando os dados de fome, sono e estados:
    this.els.fome.textContent = tamagotchi.fome;
    this.els.sono.textContent = tamagotchi.sono;
    this.els.estados.textContent = tamagotchi.status.join(', ');

    // Atualizando UI pelas chaves:
    const chaveAtual = this.#getChavePrioritaria(tamagotchi);

    if (chaveAtual !== this.#ultimaChave) {
      const asset = assets[chaveAtual] || assets['vivo'];
      this.els.imagem.src = asset.imagem;
      this.els.mensagem.textContent = asset.mensagem;

      this.#ultimaChave = chaveAtual;
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