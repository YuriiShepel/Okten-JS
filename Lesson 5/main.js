//#I2XsG6f
let rectSquare = (a, b) => a * b;
console.log(rectSquare(4,5));

//#ETGAxbEn8l
console.log('');

let circleSquare = (r) => 3.14 * r * r;
console.log(circleSquare(5));

//#Mbiz5K4yFe7
console.log('');

let tubeSquare = (r, h) => 3.14 * 2 * r * h;
console.log(tubeSquare(5, 20));

//#SIdMd0hQ

let arrayIterator = (arr) => {
    for (const arrElement of arr) {
        console.log(arrElement);
    }
}
arrayIterator([1,2,3,4,5,6]);

//#59g0IsA

let createP = (content) => document.write(`<p>${content}</p>`);
createP('Simple text');

//#hOL6126

let createList = (content) =>
    document.write(`
        <ul>
            <li>${content}</li>
            <li>${content}</li>
            <li>${content}</li>
        </ul>`);
createList('List content');

//#0Kxco1edSN

let createLongList = (content, length) => {
    let list = '<ul>';
    for (let i = 0; i < length; i++) {
        list += `<li>${content}</li>`;
    }
    list += '</ul>';
    document.write(list);
}
createLongList('Long list content', 10);

//#gEFoxMMO

let createMixedList = (content) => {
    let list = '<ul>';
    for (const contentElement of content) {
        list += `<li>${contentElement}</li>`;
    }
    list += '</ul>';
    document.write(list);
}
createMixedList(['text1', 'text2', true, 34, 'text3', 12, false, 90]);

//#bovDJDTIjt

let createObjectList = (objects) => {
    let result = '';
    for (const object of objects) {
        result += `<div>Id - ${object.id}, name - ${object.name}, age - ${object.age}</div>`;
    }
    document.write(result);
}
let objects = [
    {id: 1, name: 'First Name', age: 20},
    {id: 2, name: 'Second Name', age: 21},
    {id: 3, name: 'Third Name', age: 22},
    {id: 4, name: 'Fourth Name', age: 23},
    {id: 5, name: 'Fifth Name', age: 24}
];
createObjectList(objects);

//#pghbnSB
console.log('');

let getMin = (numbers) => {
    let min = numbers[0];
    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] < min)
            min = numbers[i];
    }
    return min;
}
let numbers = [23, 32, 3, 5, 12, 45, 76, 2, 10];
console.log(getMin(numbers));

//#EKRNVPM
console.log('');

let sum = (arr) => {
    let sum = arr[0];
    for (let i = 1; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}
numbers = [23, 32, 3, 5, 12, 45, 76, 2, 10];
console.log(sum(numbers));

//#kpsbSQCt2Lf
console.log('');

let swap = (arr, index1, index2) => {
    let temp1 = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = temp1;
    return arr;
}
let arr = [11,22,33,44];
console.log(arr);
arr = swap(arr, 0, 1);
console.log(arr);

//#mkGDenYnNjn
console.log('');

let exchange = (amount,currencies,targetCurrency) => {
    for (const currency of currencies) {
        if (currency.currency === targetCurrency){
            return amount / currency.value;
        }
    }
    return -1;
}
let result = exchange(10000,[{currency:'USD',value:25},{currency:'EUR',value:42}],'USD');
console.log(result >= 0 ? result : 'Target Currency not found');





