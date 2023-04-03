function repeatStringNumTimes(str, num) {
  let newStr = "";
  
  if(num <= 0) return newStr;
  
  for (let i = 0; i < num; i++) {
    newStr = newStr+str;
  }

  return newStr;
}

repeatStringNumTimes("abc", 3);