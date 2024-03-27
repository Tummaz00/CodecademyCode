let secretMessage = ['Learning', 'is', 'not', 'about', 'what', 'you', 'get', 'easily', 'the', 'first', 'time,', 'it', 'is', 'about', 'what', 'you', 'can', 'figure', 'out.', '-2015,', 'Chris', 'Pine,', 'Learn', 'JavaScript'];

//remove last string
secretMessage.pop()
console.log(secretMessage)

//get string  length
console.log(secretMessage.length)

//add the word "to" to the array
secretMessage.push('to')
console.log(secretMessage)

//change the word easily to "right"
secretMessage[7] = 'right'
console.log(secretMessage)

//remove first string from array
secretMessage.shift()
console.log(secretMessage)

//add the word "Programming" to the beginning of the array
secretMessage.unshift('Programming')
console.log(secretMessage)

//remove "get right the first time" and replace it with "know"
secretMessage.splice(6, 5, 'know')
console.log(secretMessage)

//combine the items of the array and print
console.log(secretMessage.join())
