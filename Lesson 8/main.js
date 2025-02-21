//#AiN5CoUQ

function copyObject(sourceObject) {
    if (!sourceObject) {
        throw ('No sourceObject provided');
    }
    let sourceFunctions = [];
    for (const field in sourceObject) {
        if (typeof sourceObject[field] === 'function') {
            sourceFunctions.push({
                name: field,
                value: sourceObject[field]
            });
        }
    }
    let destObject = {};

    destObject = JSON.parse(JSON.stringify(sourceObject));

    for (const sourceFunction of sourceFunctions) {
        destObject[sourceFunction.name] = sourceFunction.value;
    }

    return destObject;
}

let sourceObject = {
    title: 'Foods',
    count: '12',
    totalAmount: '2400',
    getAveragePrice: function() {
        return Math.round(this.totalAmount / this.count)
    },
    getInfo: function() {
        return `${this.title} (${this.count} items at total amount of ${this.totalAmount})`
    }
}

console.log(sourceObject);
console.log(sourceObject.getAveragePrice());
console.log(sourceObject.getInfo());

const destObject = copyObject(sourceObject);

console.log(destObject);
console.log(destObject.getAveragePrice());
console.log(destObject.getInfo());

//#iz6emEsP2BA
console.log('');
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
console.log(coursesAndDurationArray);

coursesAndDurationArray.map((el, i) => el.id = i + 1);
console.log(coursesAndDurationArray);