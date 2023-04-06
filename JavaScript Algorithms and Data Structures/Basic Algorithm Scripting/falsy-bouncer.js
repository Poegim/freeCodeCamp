function bouncer(arr) {

  let newArr = [];

  for (let i = 0; i < arr.length; i++) {

    let el = arr[i];
    el = el ? el : 0;
    
    if(el != 0)
    {
      newArr.push(el);
    }
    
  }
  
  return newArr;
}

bouncer([7, "ate", "", false, 9]);