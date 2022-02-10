const apiKey = '4bb55e5704aec5380422e644d0b6a577';
const form = document.querySelector('.container form');
const input = document.querySelector(".container input");

form.addEventListener('submit', e => {
    e.preventDefault();
    const inputVal = input.value;

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${inputVal}&appid=${apiKey}&units=metric`;

    fetch(url) 
    .then(response => response.json())
    .then(data => { 
        console.log(data);
    }).catch(() => { 
        console.log('No hay ciudad'); 
    });
})

