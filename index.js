const add = (a, b)=>{
    return a + b;
};

const subtract = (a, b)=>{
    return a - b;
};

const multiply = (a, b)=>{
    return a * b;
};

const divide = (a, b)=>{
    return a / b;
};

function factorial(n){
    if(n < 0){
        throw new Error ("Factorial is not defined for negative number")
    }
    
    //base case
    if(n == 0 || n == 1){
        return 1;
    //recursive case
    }else{
        return n * factorial(n-1);
    }
}

function palindrome(str) {
    var re = /[\W_]/g;
    var lowRegStr = str.toLowerCase().replace(re, '');
    var reverseStr = lowRegStr.split('').reverse().join(''); 
    return reverseStr === lowRegStr;
  }


module.exports = {
    add,
    subtract,
    multiply,
    divide,
    factorial,
    palindrome
  };