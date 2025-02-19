//#XjJuucOMR0
function Client(id, name, surname, email, phone) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
}

let clients = [];
for (let i = 1; i < 11; i++) {
    clients.push(new Client(i, `name${i}`, `surname${i}`, `email${i}@gmail.com`, `111-222-333${1}`));
}
console.log(clients);

//#2ikXsE2WiKZ
console.log('');
console.log(clients.filter(el => el.id % 2 === 0));

//#pOeHKct
console.log('');
console.log(clients.sort((a, b) => a.id - b.id));

//#nkMXISv
function ClientWithOrders(id, name, surname, email, phone, order) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
    this.order = order;
}

clients = [];
for (let i = 1; i < 11; i++) {
    let order = [];
    for (j = 0; j < (3 + Math.floor(Math.random() * 10)); j++) {
        order.push({
            title: `item${j + 1}`,
            price: Math.floor(Math.random() * 1000)
        });
    }
    clients.push(new ClientWithOrders(i, `name${i}`, `surname${i}`, `email${i}@gmail.com`, `111-222-333${1}`, order));
}
console.log(clients);

//#8abtVjRv
console.log('');
console.log(clients.sort((a, b) => a.order.length - b.order.length));


//#vV9a6584I5
function Car(model, make, year, maxSpeed, engine){
    this.model = model;
    this.make = make;
    this.year = year;
    this.maxSpeed = maxSpeed;
    this.engine = engine;

    this.drive = () => console.log(`Drive with ${this.maxSpeed} km/h speed`);
    this.info = () =>{
        for (const field in this) {
            if (typeof this[field] !== 'function')
                console.log(`${field} - ${this[field]}`);
        }
    }
    this.increaseMaxSpeed = (newSpeed) => this.maxSpeed = newSpeed > 0 ? (this.maxSpeed + newSpeed) : this.maxSpeed;
    this.changeYear = (newValue) => this.year = newValue > 0 ? (this.year + newValue) : this.year;
    this.addDriver = (driver) => this.driver = driver ?? {};
}

let car = new Car('Q7', 'Audi', 2000, 200, '3.0');
console.log(car);
car.drive();
car.info();
car.increaseMaxSpeed(20);
car.changeYear(2024);
car.addDriver({
    name: 'Okten',
    age: '25'
});
console.log(car);

//#5kla3yMpgp
console.log('');
class CarClass{
    constructor(model, make, year, maxSpeed, engine)
    {
        this.model = model;
        this.make = make;
        this.year = year;
        this.maxSpeed = maxSpeed;
        this.engine = engine;
    }
    drive = () => console.log(`Drive with ${this.maxSpeed} km/h speed`);
    info = () =>{
        for (const field in this) {
            if (typeof this[field] !== 'function')
                console.log(`${field} - ${this[field]}`);
        }
    }
    increaseMaxSpeed = (newSpeed) => this.maxSpeed = newSpeed > 0 ? (this.maxSpeed + newSpeed) : this.maxSpeed;
    changeYear = (newValue) => this.year = newValue > 0 ? (this.year + newValue) : this.year;
    addDriver = (driver) => this.driver = driver ?? {};
}

car = new CarClass('Q7', 'Audi', 2000, 200, '3.0');
console.log(car);
car.drive();
car.info();
car.increaseMaxSpeed(20);
car.changeYear(2024);
car.addDriver({
    name: 'Okten',
    age: '25'
});
console.log(car);

//#zg6Fifnqig
console.log('');
class Cinderella {
    constructor(name, age, footSize){
        this.name = name;
        this.age = age;
        this.footSize = footSize;
    }
}

const girls = [];
for (let i = 1; i < 10; i++) {
    girls.push(
        new Cinderella(`Girl ${i}`, 18 + Math.floor(Math.random() * 12), 36 + Math.floor(Math.random() * 4))
    )
}
girls.push(
    new Cinderella(`Cindy`, 22 , 35)
)
console.log(girls);
let prince = new Cinderella('Prince', 30, 35);
console.log(prince);
for (const girl of girls) {
    if (girl.footSize === prince.footSize){
        console.log(`Cinderella was found! This is ${girl.name}!`);
    }
}

let cinderella = girls.find((girl) => girl.footSize === prince.footSize);
if (cinderella)
    console.log(`Cinderella was found! This is ${cinderella.name}!`);

//#gsKLAsNWM
console.log('');
Array.prototype.customForEach = function(processor){
    for (const element of this) {
        processor(element);
    }
}

Array.prototype.customFind = function(condition){
    result = [];
    for (const element of this) {
        if (condition(element))
            result.push(element);
    }
    return result;
}

let testArray = [
    {title : 'First Item', price: 1500},
    {title : 'Second Item', price: 1700},
    {title : 'Third Item', price: 500},
    {title : 'Forth Item', price: 2300},
    {title : 'Fifth Item', price: 1100},
]

testArray.customForEach((el) => console.log(el));
console.log(testArray.customFind(el => el.price > 1500));
