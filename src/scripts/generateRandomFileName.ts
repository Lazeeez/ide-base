const adjectives = [
  'awesome',
  'fantastic',
  'amazing',
  'cool',
  'brilliant',
  'spiritual',
  'amused',
  'obscene',
  'willing',
  'smelly',
  'bright',
  'colossal',
  'abstracted',
  'understood',
  'whispering',
  'ignorant',
  'momentous',
  'black',
  'agonizing',
  'fluffy',
  'regular',
  'drunk',
  'harsh',
  'open',
  'closed',
  'entertaining',
  'jobless',
  'periodic',
  'filthy',
  'fast',
  'quick',
  'strong',
  'typed',
  'simple',
  'sunny',
];
const nouns = [
  'project',
  'repo',
  'work',
  'code',
  'app',
  'order',
  'butter',
  'ticket',
  'smoke',
  'birds',
  'rock',
  'wing',
  'fog',
  'sky',
  'water',
  'cream',
  'bikes',
  'shoes',
  'vegetable',
  'cow',
  'fork',
  'haircut',
  'rose',
  'tree',
  'maze',
  'piano',
  'ball',
  'music',
  'food',
  'shower',
  'window',
  'umbrella',
  'fork',
  'plant',
  'towel',
];

export default function generateRandomFileName() {
  const randomAdjective =
    adjectives[Math.floor(Math.random() * adjectives.length)];
  const randomNoun = nouns[Math.floor(Math.random() * nouns.length)];
  const randomNumber = Math.floor(Math.random() * 100);

  return `${randomAdjective}-${randomNoun}-${randomNumber}`;
}
