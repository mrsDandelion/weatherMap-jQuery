export default function createViewWeather(container, arrWeathers){
    const timesInDay = 8;
    const amountDays = 5;
    const maxI = amountDays * timesInDay;
    for(let i = 0; i < maxI; i = i + timesInDay){
        const wrapperInfo = document.createElement('div');
        wrapperInfo.classList.add('dayWeather');
        wrapperInfo.innerHTML = `
            <p>${arrWeathers[i].dt_txt}</p>
            <p>temperature: ${Math.round(arrWeathers[i].main.temp - 273.15)} °C</p>
            <p>wind: ${arrWeathers[i].wind.speed}</p>
            <p>pressure: ${arrWeathers[i].main.pressure}</p>`;
        container.appendChild(wrapperInfo);
    }
}