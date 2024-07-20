let a = prompt("Enter first number ")

let b = prompt("Enter second number ")

if(isNaN(a) || isNaN(b)){
    throw SyntaxError("This form is not correct")
}

let sum = parseInt(a) +parseInt(b)

try {
    console.log('The sum is', sum*x);
    
} catch (error) {

    throw TypeError("Error aa gya bro")
    
    
}

