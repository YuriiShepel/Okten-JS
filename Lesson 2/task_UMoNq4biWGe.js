let day = +prompt('Enter a day value from 1 to 31');

if (day >= 0 && day < 60){
    if (day < 11)
        alert(`First decade`);
    else if (day < 21)
        alert(`Second decade`);
    else
        alert(`Third decade`);
}
else
    alert('Incorrect day value');