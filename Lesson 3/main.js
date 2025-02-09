//#y7crMeFwHcS
for (let i = 1; i < 11; i++) {
    document.write(`<div>Okten  (for)</div>`);
}

//#TYj7ncx
for (let i = 1; i < 11; i++) {
    document.write(`<div>Okten ${i} (for)</div>`);
}

//#uzkt71dp
let i = 1;
while (i < 21) {
    document.write(`<h1>Okten (while)</h1>`);
    i++;
}

//#OeT7t3uUMFi
i = 1;
while (i < 21) {
    document.write(`<h1>Okten ${i} (while)</h1>`);
    i++;
}

//#vLSZKMlO
let listOfItems = ['html', 'css', 'javascript', 'mysql', 'mongodb', 'react', 'angular', 'node.js'];
document.write('<ul>');
for (let i = 0; i < listOfItems.length; i++) {
    document.write(`<li>${listOfItems[i]}</li>`);
}
document.write('</ul>');

//#Hdjws7E

// link "https://yogiproducts.com/wp-content/uploads/2009/03/YT-US-CAR-RelaxedMind-C23-202201-V2-3DFront_withGlow-300DPI-1.png" is not working, replaced with
// https://www.pakomarket.pl/wp-content/uploads/NESTEA-Ice-Tea-Green-Tea-Truskawka-Aloes-15L-1.png
let products = [
    {
        title: 'milk',
        price: 22,
        image: 'https://www.mcqueensdairies.co.uk/wp-content/uploads/2019/02/Mcqueens_1litre_whole_organic-300x300-3.jpg'
    },
    {
        title: 'juice',
        price: 27,
        image: 'https://images-na.ssl-images-amazon.com/images/I/61jL2GCuKLL._SX679_PIbundle-24,TopRight,0,0_AA679SH20_.jpg'
    },
    {
        title: 'tomato',
        price: 47,
        image: 'https://dictionary.cambridge.org/ru/images/thumb/tomato_noun_001_17860.jpg?version=5.0.74'
    },
    {
        title: 'tea',
        price: 15,
        image: 'https://www.pakomarket.pl/wp-content/uploads/NESTEA-Ice-Tea-Green-Tea-Truskawka-Aloes-15L-1.png'
    },
];

for (const product of products) {
    document.write(`<div class="product-card">
        <h3 class="product-title">${product.title}. Price - ${product.price}</h3>
        <img src="${product.image}" alt="" class="product-image"/>
        </div>`);
}

//#4WrHwFTEop0
let users = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true}
];

let trueUsers = [];
let falseUsers = [];
let adultUsers = [];

for (const user of users) {
    if (user.status)
        trueUsers.push(user);
    else
        falseUsers.push(user);
    if (user.age > 30)
        adultUsers.push(user);
}

console.log('Users with True status', trueUsers);
console.log('Users with False status', falseUsers);
console.log('Users over 30 years old', adultUsers);

