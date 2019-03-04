export default function createViewWeather(container, arrWeathers, isDays){
    const timesInDay = 8;
    const amountDays = isDays.length;
    const maxI = amountDays * timesInDay;
    container.innerHTML = "";
    for(let i = 0, j = 0; i < maxI, j < amountDays; i = i + timesInDay, j++){
        if(isDays[j]){
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
}