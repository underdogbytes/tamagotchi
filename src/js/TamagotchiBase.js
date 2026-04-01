export class TamagotchiBase {
  //-------------------------------//
  // PROPRIEDADES PRIVADAS
  //-------------------------------//
  #fome;
  #sono;
  #humor;

  //-------------------------------//
  // CONSTRUCTOR
  //-------------------------------//
  constructor(nome, especieConfig = {}) {
    this.nome = nome;
    this.tipo = especieConfig.tipo || 'tubarao-martelo';
    this.limites = {
      fome: especieConfig.fomeMax || 150,
      sono: especieConfig.sonoMax || 150,
      humor: 100
    };

    this.#sono = 0;
    this.#fome = 0;
    this.#humor = 100;
  }

  //-------------------------------//
  // MÉTODOS AUXILIARES PRIVADOS
  //-------------------------------//
  // Verifica se o tamagotchi está morto (pontos <= 0):
  #estaMorto() {
    return this.#fome >= this.limites.fome ||
      this.#sono >= this.limites.sono ||
      this.#humor <= 0;
  }

  /**
   * Helper para garantir que os valores fiquem entre 0 e o limite máximo
   */
  #clamp(valor, max) {
    return Math.min(Math.max(0, valor), max);
  }

  // Retorna a primeira chave onde a condição for verdadeira
  #getNivel(valor, faixas) {
    return Object.keys(faixas).find(chave => faixas[chave]) || 'desconhecido';
  }

  //-------------------------------//
  // GETTERS
  //-------------------------------//
  get status() {
    if (this.#estaMorto()) return ['morto'];

    return [
      this.#getNivel(this.#sono, {
        sono_4: this.#sono >= 100,
        sono_3: this.#sono >= 75,
        sono_2: this.#sono >= 25,
        sono_1: true
      }),
      this.#getNivel(this.#fome, {
        fome_4: this.#fome >= 100,
        fome_3: this.#fome >= 75,
        fome_2: this.#fome >= 25,
        fome_1: true
      }),
      this.#getNivel(this.#humor, {
        humor_4: this.#humor >= 80,
        humor_3: this.#humor >= 50,
        humor_2: this.#humor >= 20,
        humor_1: true
      })
    ];
  }

  get fome() { return this.#fome; }

  get sono() { return this.#sono; }

  get humor() { return this.#humor; }

  //-------------------------------//
  // SETTERS
  //-------------------------------//
  alimentar(pontos) {
    this.#fome = this.#clamp(this.#fome - pontos, this.limites.fome);
  }

  dormir(pontos) {
    this.#sono = this.#clamp(this.#sono - pontos, this.limites.sono);
  }

  humorizar(pontos) {
    this.#humor = this.#clamp(this.#humor + pontos, this.limites.humor);
  }

  viver() {
    if (this.#estaMorto()) return;

    this.#fome = this.#clamp(this.#fome + 5, this.limites.fome);
    this.#sono = this.#clamp(this.#sono + 3, this.limites.sono);
  }

  checaEstado(estado) {
    return this.status.includes(estado);
  }
}