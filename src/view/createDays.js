export default function createViewWeather(container, arrWeathers){
    const timesInDay = 8;
    const amountDays = 5;
    const maxI = amountDays * timesInDay;
    const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    const wrapperDay = document.createElement('div');
    wrapperDay.classList.add('daysWeek');
    for(let i = 0; i < maxI; i = i + timesInDay){

        wrapperDay.innerHTML = `
            <p>${arrWeathers[i].dt_txt}</p>
            <p>temperature: ${Math.round(arrWeathers[i].main.temp - 273.15)} °C</p>
            <p>wind: ${arrWeathers[i].wind.speed}</p>
            <p>pressure: ${arrWeathers[i].main.pressure}</p>`;
        container.appendChild(wrapperDay);
    }
}