let time = +prompt('Enter a time value from 0 to 59');

if (time >= 0 && time < 60){
    let quarter = ~~(time / 15) + 1;
    alert(`${quarter} quarter`);
}
else
    alert('Incorrect time value');



