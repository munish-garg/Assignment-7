const input = document.getElementById('search');
const btn = document.getElementById('btn');
const list = document.getElementById('information');

async function fetchInformation(e){
    e.preventDefault();
    const API_KEY = '19026796172c0e8399ce60dfe2bc1e04';
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${input.value}&appid=${API_KEY}`)
    input.value = '';
    const data = await response.json();
    // console.log(data.cod);
    if(data.cod === 200){
        const array = [];
        const str = `${data.name}, ${data.sys.country}`;
        array.push(str, new Date().toDateString());
        const temp = data.main.temp - 273;
        const temp_max = data.main.temp_max - 273;
        const temp_min = data.main.temp_min - 273;
        array.push(temp, temp_max, temp_min);
        array.push(data.visibility)
        console.log(array)
        for(let i = 0;i<array.length;i++){
            const li = document.createElement('li');
            li.innerText = array[i];
            list.append(li);
        }
    }
    else{
        const warning = "The city with this name is not found!!!"
        alert(warning)
    }
}

btn.addEventListener('click', fetchInformation);
input.addEventListener('keydown', execution)

// console.log('Hello World')