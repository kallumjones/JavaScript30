const secondHand = document.querySelector('.second-hand');
const minuteHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

console.log(secondHand);

function setDate() {
    const now = new Date();
    const seconds = now.getSeconds();
    const secondsInDegrees = ((seconds/60)*360) + 90;

    const minutes = now.getMinutes();
    const minutesInDegrees = ((minutes/60)*360) + 90;

    const hours = now.getHours()
    const hoursInDegrees = ((hours/12) *360) + 90;

    if(secondsInDegrees === 90){
        secondHand.style.transition = 'all 0s';
    } else {
        secondHand.style.transition = 'all 0.05s';
        secondHand.style['transition-timing-function'] = 'cubic-bezier(0.1,2.7,0.58,1)';
    }

    if(minutesInDegrees === 90){
        minuteHand.style.transition = 'all 0s';
    } else {
        minuteHand.style.transition = 'all 0.05s';
        minuteHand.style['transition-timing-function'] = 'cubic-bezier(0.1,2.7,0.58,1)';
    }
    if(hoursInDegrees === 90){
        hourHand.style.transition = 'all 0s';
    } else {
        hourHand.style.transition = 'all 0.05s';
        hourHand.style['transition-timing-function'] = 'cubic-bezier(0.1,2.7,0.58,1)';
    }
    secondHand.style.transform = `rotate(${secondsInDegrees}deg)`;
    minuteHand.style.transform = `rotate(${minutesInDegrees}deg)`;
    hourHand.style.transform = `rotate(${hoursInDegrees}deg)`;
    console.log('Second:', seconds, 'Minutes:', minutes, 'Hours:', hours);

}

const myInterval = setInterval(setDate, 1000);

// function stopInterval() {
//     clearInterval(myInterval);
// }

// setTimeout(stopInterval,10000);