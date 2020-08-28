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
    return 'very bad'
  }
  if(result <= 15) {
    return 'bad'
  }
  if(result <= 20) {
    return 'normal'
  }
  if(result <= 25) {
    return 'good'
  }
  if(result < 30) {
    return 'very good'
  }

  return "awesome"
}