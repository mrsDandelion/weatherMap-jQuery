import createViewWeather from './createViewWeather.js';

export default function createDays(wrapperCheckbox, wrapperDays, arrWeathers){
    const days = ['today', 'tomorrow', 'day after tomorrow'];
    const isDays = [true, false, false];
    wrapperCheckbox.innerHTML = "";

    for(let i = 0; i < days.length; i++){
        const wrapInput = document.createElement('div');
        if(!isDays[i]) {
            wrapInput.innerHTML = `<label><input type="checkbox" value="${days[i]}" data-day="${i}">${days[i]}</label>`;
        } else {
            wrapInput.innerHTML = `<label><input type="checkbox" value="${days[i]}" checked data-day="${i}">${days[i]}</label>`;
        }
        wrapperCheckbox.appendChild(wrapInput);
    }
    wrapperCheckbox.addEventListener('change', changeDays.bind(this));
    createViewWeather(wrapperDays, arrWeathers, isDays);

    function changeDays(e){
        const input = e.target.closest('input');
        if (!input) return;
        isDays[input.dataset.day] = !isDays[input.dataset.day];
        createViewWeather(wrapperDays, arrWeathers, isDays);
    }
}