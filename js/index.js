const apiKey = '4bb55e5704aec5380422e644d0b6a577';
const form = document.querySelector('.container form');
const input = document.querySelector(".container input");
const appNode = document.getElementById('climas');

form.addEventListener('submit', e => {
    e.preventDefault();
    const inputVal = input.value;

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${inputVal}&appid=${apiKey}&units=metric`;

    fetch(url) 
    .then(response => response.json())
    .then(data => { 
        const { main, name, sys, weather } = data;
        const icon = `https://openweathermap.org/img/wn/${weather[0]["icon"]}@2x.png`;
        
        const imagen = document.createElement('img');
        imagen.src = icon;
        imagen.className = 'rounded mx-auto d-block';
        
        const ciudad = document.createElement('h1');
        ciudad.textContent = name;
        ciudad.className ='card-title';

        const pais = document.createElement('sup');
        pais.textContent = sys.country;
        pais.style.color = 'blue'

        const temp = document.createElement('h2');
        temp.textContent = `${Math.round(main.temp)} C°`;
        temp.className = 'lead';

        const clima = document.createElement('h3');
        clima.textContent = weather[0]['main'];
        clima.className = 'lead';

        const descripcion = document.createElement('span');
        descripcion.textContent = weather[0]['description'];
        descripcion.className = 'lead text-capitalize';

        const linea = document.createElement('br')

        const container = document.createElement('div');
        container.append(imagen,ciudad,pais,linea, temp,clima,descripcion);
        container.className = 'card m-2 shadow p-3';

        appNode.appendChild(container); 
        data = '';
    }).catch(() => { 
         const aviso = document.createElement('div');
         aviso.textContent = 'Ese pais no esta disponible :(';
         aviso.className = 'card text-white bg-danger shadow'
         appNode.append(aviso);
    });
    form.reset();
    input.focus();
    appNode.innerHTML = '';

})

