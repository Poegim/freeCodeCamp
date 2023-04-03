//Check if a string (first argument, str) ends with the given target string (second argument, target).
function confirmEnding(str, target) {

  return (str.substr(str.length - target.length) == target);

}

console.log(confirmEnding("Bastian", "n"));
console.log(confirmEnding("Congratulation", "on"));
console.log(confirmEnding("Connor", "n"));
console.log(confirmEnding("Walking on water and developing software from a specification are easy if both are frozen", "specification"));
console.log(confirmEnding("He has to give me a new name", "name"));