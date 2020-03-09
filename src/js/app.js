// TODO: write your code here
import GameSavingLoader from './gameSavingLoader';

GameSavingLoader.load().then((saving) => {
  // saving объект класса GameSaving
  console.log(saving);
}, (error) => {
  // ...
  console.log(error);
});
