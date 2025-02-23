//#8Nmt60ZT
let block = document.createElement('div');
block.innerText = 'New block';
block.classList.add('wrap', 'collapse', 'alpha', 'beta');
block.style.backgroundColor = 'black';
block.style.color = 'yellow';
block.style.fontSize = '150%';
document.body.appendChild(block);

let clonedBlock = block.cloneNode(true);
document.body.appendChild(clonedBlock);

//#OPLI89c9G
let items = ['Main','Products','About us','Contacts'];
let list = document.createElement('ul');
for (const item of items) {
    const li = document.createElement('li');
    li.innerText = item;
    list.appendChild(li);
}
document.body.appendChild(list);

//#jeBqHV525U5
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

for (const item of coursesAndDurationArray) {
    const block = document.createElement('div');
    block.innerText = `${item.title} - ${item.monthDuration}`;
    document.body.appendChild(block);
}

//#Kx1xgoKy8
for (const item of coursesAndDurationArray) {
    const block = document.createElement('div');
    block.classList.add('item');
    const h1 = document.createElement('h1');
    h1.innerText = item.title;
    h1.classList.add('heading');
    const p = document.createElement('p');
    p.innerText = item.monthDuration;
    p.classList.add('description');
    block.append(h1, p);
    document.body.appendChild(block);
}

