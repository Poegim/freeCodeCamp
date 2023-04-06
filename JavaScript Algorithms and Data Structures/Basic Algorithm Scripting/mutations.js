function mutation(arr) {
  
  let expectedLetters = arr[1].length;
  let foundedLetters = 0;
  

  for (let i = 0; i < arr[1].length; i++) {
    if(arr[0].toLowerCase().includes(arr[1][i].toLowerCase()))
    {
      foundedLetters++;
    }    
  }
   
  return expectedLetters == foundedLetters;
}

mutation(["hello", "hey"]);