import createViewWeather from './createViewWeather.js';

export default function createDays(wrapperCheckbox, wrapperDays, arrWeathers){
    var i, days, isDays, wrapInput;
    days = ['today', 'tomorrow', 'day after tomorrow'];
    isDays = [true, false, false];
    wrapperCheckbox.innerHTML = "";

    for(i = 0; i < days.length; i++){
        wrapInput = document.createElement('div');
        if(!isDays[i]) {
            wrapInput.innerHTML = `<label><input type="checkbox" value="${days[i]}" data-day="${i}">${days[i]}</label>`;
        } else {
            wrapInput.innerHTML = `<label><input type="checkbox" value="${days[i]}" checked data-day="${i}">${days[i]}</label>`;
        }
        wrapperCheckbox.appendChild(wrapInput);
    }
    wrapperCheckbox.addEventListener('change', changeDays.bind(this));
    wrapperCheckbox.addEventListenecr('change', changeDays.bind(this));
    createViewWeather(wrapperDays, arrWeathers, isDays);

    function changeDays(e){
        var input = e.target.closest('input');
        if (!input) return;
        isDays[input.dataset.day] = !isDays[input.dataset.day];
        createViewWeather(wrapperDays, arrWeathers, isDays);
    }
}