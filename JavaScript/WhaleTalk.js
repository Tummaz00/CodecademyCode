var input = "turpentine and turtles"
const vowels = ['a', 'e', 'i', 'o', 'u']
var resultArray = []

for(var i = 0; i < input.length; i++){
  //doubles e's in whale language
   if(input[i] === 'e'){
      resultArray.push(input[i])
      resultArray.push(input[i])
  }
  //doubles u's in whale language
  else if(input[i] === 'u'){
        resultArray.push(input[i])
        resultArray.push(input[i])
    }
  for(var j = 0; j < vowels.length; j++){
     if(input[i] === vowels[j] && input[i] != 'e' && input[i] != 'u'){
      resultArray.push(input[i])
    }
  }
}

//combines the items of array into one string (add a parameter seperator or the method will default to a comma seperator)
var resultString = resultArray.join("").toUpperCase()
console.log(resultString)
