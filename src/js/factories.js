import { TamagotchiBase } from './TamagotchiBase.js';
//-------------------------------//
// FACTORY FUNCTION
// para criar o tamagotchi (pode ser expandida para diferentes espécies):
//-------------------------------//

const SPECIES_CONFIGS = {
  SHARK: {
    tipo: 'tubarao-martelo',
    fomeMax: 150,
    sonoMax: 200
  },
  DEVELOPER: {
    tipo: 'dev-fullstack',
    fomeMax: 80,
    sonoMax: 300
  }
};

export function createTamagotchi(nome, tipo = 'SHARK') {
  const config = SPECIES_CONFIGS[tipo.toUpperCase()] || SPECIES_CONFIGS.SHARK;

  return new TamagotchiBase(nome, config);
}