const input = document.getElementById('search');
const btn = document.getElementById('btn');
const list = document.getElementById('information');

async function fetchInformation(e){
    e.preventDefault();
    const API_KEY = '19026796172c0e8399ce60dfe2bc1e04';
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${input.value}&appid=${API_KEY}`)
    input.value = '';
    const data = await response.json();
    console.log(data.cod);
    if(data.cod === 200){
        const name = data.name;
        const temperature = data.main.temp;
        const min_temp = data.main.temp_min;
        const max_temp = data.main.temp_max;
        const li1 = document.createElement('li');
        const li2 = document.createElement('li');
        const li3 = document.createElement('li');
        const li4 = document.createElement('li');
        li1.innerText = name;
        li2.innerText = temperature;
        li3.innerText = min_temp;
        li4.innerText = max_temp;
        list.append(li1);
        list.append(li2);
        list.append(li3);
        list.append(li4);
        console.log(data);
    }
    else{
        const warning = "The city with this name is not found!!!"
        alert(warning)
    }
}


btn.addEventListener('click', fetchInformation);
// console.log('Hello World')