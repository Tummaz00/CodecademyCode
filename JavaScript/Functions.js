// normal way to create a function in javascript
function function1(){
    console.log('Function 1')
}

//this one the short way of creating a function
const understanding = num => {
    if(num === 1 || num === 4){
      console.log('yes');
    }
    else{
      console.log('no');
    }
  }
  
  var randomNum = Math.floor(Math.random() * 5);
  console.log(randomNum);
  understanding(randomNum);
