export const getRandomIntInclusive = (min: number, max: number): number => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; 
}

export const playAudioCorrect = () => {
  const correct = require('../assets/audio/correct.mp3');
  const audio = new Audio(correct);
  audio.autoplay = true;
  audio.play();
}

export const playAudioFailure = () => {
  const failure = require('../assets/audio/failure.mp3');
  const audio = new Audio(failure);
  audio.autoplay = true;
  audio.play();
}

export const createResultText = (result: number) => {
  if(result <= 10) {
    return `Вы набрали ${result} из 30. Возможно вам стоит узнать больше о птицах.`
  }

  if(result <= 20) {
    return `Вы набрали ${result} из 30. У вас удовлетворительные знания о птицах.`
  }

  if(result < 30) {
    return `Вы набрали ${result} из 30. У вас уверенные знания о птицах.`
  }

  return `Вы набрали ${result} из 30. Возможно вы орнитолог?`
}