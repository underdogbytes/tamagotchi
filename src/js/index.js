import { TamagotchiUI } from './TamagotchiUI.js';
import { createTamagotchi } from './factories.js';

//-------------------------------//
// CRIANDO TAMAGOTCHI & UI
//-------------------------------//
const tutu = createTamagotchi('Sharkyyy', 'SHARK');
const ui = new TamagotchiUI(tutu);

//-------------------------------//
// ELEMENTOS DOM
//-------------------------------//
var domElements = {
  btnIniciar: document.getElementById('btnIniciar'),
  btnActions: document.getElementById('btns-action'),
  btnAlimentar: document.getElementById('btnAlimentar'),
  btnDormir:  document.getElementById('btnDormir')
}

//-------------------------------//
// AÇÕES POR CLICK
//-------------------------------//
domElements.btnAlimentar.addEventListener('click', function () {
  tutu.fome >= 10 ? tutu.alimentar(10) : ui.semFome();
});

domElements.btnDormir.addEventListener('click', function () {
  tutu.sono >= 10 ? tutu.dormir(10) : ui.semSono();
});

//-------------------------------//
// INICIANDO JOGO
//-------------------------------//
btnIniciar.addEventListener('click', function () {
  // Sumindo com o botão de iniciar:
  domElements.btnIniciar.style.display = 'none';

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