function sumAll(arr) {
  let max = Math.max(...arr);
  let min = Math.min(...arr);

  const beetween = [];

  while (min < max) {
    beetween.push(min);
    min++;
  }
   
  return beetween.reduce((acc,cur) => {
    return acc+cur;
  })+max;
}

sumAll([1, 4]);