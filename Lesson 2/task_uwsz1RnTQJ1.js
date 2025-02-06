let a = +prompt('Enter first number');
let b = +prompt('Enter second number');

if (a === b) {
    alert('The numbers are equal');
}
else{
    let result = a > b ? a : b;
    alert(`Largest number is ${result}`);
}
