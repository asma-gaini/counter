let startBox = document.querySelector('.start-box');
let inputCounter = startBox.querySelector('#input-counter');
let startCounter = startBox.querySelector('#start-counter');
let errorElement = document.querySelector('#error-massage');
let timerCircle = document.querySelector('.c100');
let timerNum = document.querySelector('.c100 > span');
let loadingMessage = document.querySelector('.message .loading');
let successMessage = document.querySelector('.message .success');



startCounter.addEventListener('click' , function(){
    let seconds = parseInt(inputCounter.value);
    if(isNaN(seconds)){
        errorElement.textContent = 'زمان را به درستی وارد کنید';
        errorElement.classList.add('active');
        return;
    }

    errorElement.classList.remove('active');
    timerCircle.style.display = 'block';
    startBox.style.display = 'none';
    timerNum.textContent = seconds;
    loadingMessage.style.display = 'block';
    successMessage.style.display = 'none';

    let originalSeconds = seconds;
    let lastPercent = '';
    let timerId = setInterval(() =>{
        if(lastPercent) {timerCircle.classList.remove(lastPercent);}
        if(seconds <= 0){
            clearInterval(timerId);
            startBox.style.display = 'block';
            timerCircle.style.display = 'none';
            loadingMessage.style.display = 'none';
            successMessage.style.display = 'block';
            inputCounter.value = '';
            return;
        }
        seconds -= 1;

        //ag az tah b sefr bekhaym oon dayere ghermez harekat kone bayad to html p100 bedim va to lastpercent ham meghdar avaliee p100 bedim
        // let percent = Math.abs(Math.floor(((originalSeconds - seconds)/originalSeconds) * 100)-100);
        
        let percent = Math.floor(((originalSeconds - seconds)/originalSeconds) * 100);
        lastPercent = `p${percent}`;
        timerCircle.classList.add(`p${percent}`);
        timerNum.textContent = seconds;
    } , 1000)
})

