import { questionParams } from "../types";

export function GenerateRandomNumbers() {
  let arr = [];
  while (arr.length < 6) {
    var r = Math.floor(Math.random() * 120);
    if (arr.indexOf(r) === -1) arr.push(r);
  }

  return arr;
}

export function shuffle(array: questionParams[]) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}
