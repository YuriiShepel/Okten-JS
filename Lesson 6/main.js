//#dFeorS3m7u
console.log(String('hello world').length);
console.log(String('lorem ipsum').length);
console.log(String('javascript is cool').length);

//#8lld9HMxXWB
console.log('');
console.log(String('hello world').toUpperCase());
console.log(String('lorem ipsum').toUpperCase());
console.log(String('javascript is cool').toUpperCase());

//#ClDsAm7xba7
console.log('');
console.log(String('HELLO WORLD').toLowerCase());
console.log(String('LOREM IPSUM').toLowerCase());
console.log(String('JAVASCRIPT IS COOL').toLowerCase());

//#0b89BkYZwu
console.log('');
let str = ' dirty string   ';
console.log(str.trim());

//#bfoJuse4ZzP
console.log('');
str = 'Ревуть воли як ясла повні';
let stringToArray = (str) => str.split(' ');
console.log(stringToArray(str));

//#Rbr5kEQ
console.log('');
arr = [10, 8, -7, 55, 987, -1011, 0, 1050, 0];
let result = arr.map(el => '' + el);
console.log(result);

//#5hqyKTfmc
console.log('');
let nums = [11, 21, 3];
let sortNums = (nums, direction) => {
    switch (direction) {
        case 'ascending':
            return nums.sort((a, b) => a - b);
        case 'descending':
            return nums.sort((a, b) => b - a);
        default:
            return nums;
    }
}
console.log(sortNums(nums, 'ascending'));
console.log(sortNums(nums, 'descending'));

//#yo06d74c1C
console.log('');
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

coursesAndDurationArray.sort((a, b) => b.monthDuration - a.monthDuration);
console.log(coursesAndDurationArray);
coursesAndDurationArray = coursesAndDurationArray.filter(el => el.monthDuration > 5);
console.log(coursesAndDurationArray);
coursesAndDurationArray = coursesAndDurationArray.map(
    function (el, index) {
        return {...el, id: index + 1};
    }
);
console.log(coursesAndDurationArray);

//#EP5I1UUzAX
console.log('');

let cardsSet = [];
let cardValues = [6, 7, 8, 9, 10, 'jack', 'queen', 'king', 'ace'];
let cardSuits = ['spade', 'diamond', 'heart', 'clubs'];

for (const cardSuit of cardSuits) {
    for (const cardValue of cardValues) {
        cardsSet.push({
            cardSuit: cardSuit,
            value: cardValue,
            color: cardSuit === 'clubs' || cardSuit === 'spade' ? 'black' : 'red'
        })
    }
}
console.log(cardsSet);

console.log(cardsSet.find(el => el.cardSuit === 'spade' && el.value === 'ace'));
console.log(cardsSet.filter(el => el.value === 6));
console.log(cardsSet.filter(el => el.color === 'red'));
console.log(cardsSet.filter(el => el.cardSuit === 'diamond'));
console.log(cardsSet.filter(el => el.cardSuit === 'clubs' && !(el.value < 10)));

//#4LJn7zBx
console.log('');

let coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'python core',
            'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];

console.log(coursesArray.filter(el => el.modules.includes('sass')));
console.log(coursesArray.filter(el => el.modules.includes('docker')));


