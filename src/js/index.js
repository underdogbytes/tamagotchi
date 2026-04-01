import { TamagotchiUI } from './TamagotchiUI.js';
import { createTamagotchi } from './factories.js';

// Criando o tutu:
const tutu = createTamagotchi('Sharkyyy', 'SHARK');
const ui = new TamagotchiUI(tutu);

// Outros elementos da tela:
var domElements = {
  btnActions: document.getElementById('btns-action'),
}

/**
 * ALIMENTAÇÃO
 * Se fome igual a zero, não permitir alimentar
 */
document.getElementById('btnAlimentar').addEventListener('click', function () {
  if (tutu.fome >= 0) {
    tutu.alimentar(10);
  } else {
    // TODO: exibirEstadoTamagotchi('naoEstouComFome');
  }
});

/**
 * SONO
 * Se sono igual a zero, não permitir descansar
 */
document.getElementById('btnDormir').addEventListener('click', function () {
  if (tutu.sono >= 0) {
    tutu.dormir(10);
  } else {
    // TODO: exibirEstadoTamagotchi('naoEstouComSono');
  }
});

/**
 * INICIALIZANDO O JOGO
 * 
 */
var btnIniciar = document.getElementById('btnIniciar');
btnIniciar.addEventListener('click', function () {
  // Sumindo com o botão de iniciar:
  btnIniciar.style.display = 'none';

  // Aparecendo a box do jogo:
  let tamagotchi__box = document.getElementById('tamagotchi__box');
  tamagotchi__box.style.display = 'grid';

  // Aparecendo a box de botões de ação:
  domElements.btnActions.style.display = 'block';
});

setInterval(() => {
  tutu.viver();
  ui.renderizar(tutu);
}, 1000);
