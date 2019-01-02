
const secondHand = document.querySelector('.second-hand');
const minsHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

function setDate() {
  // grab the date
  const now = new Date();
  const seconds = now.getSeconds();
  // to convert seconds into degrees for sec hand to rotate by
  const secondsDegrees = ((seconds / 60) * 360) + 90; // 90deg is added to correct the seconds offset from hand styling
  secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

// min hand

  const mins = now.getMinutes();
  const minsDegrees = ((mins/60) * 360) + 90;
  minsHand.style.transform = `rotate(${minsDegrees}deg)`;

// hour

  const hour = now.getMinutes();
  const hourDegrees = ((mins/12) * 360) + 90;
  hourHand.style.transform = `rotate(${hourDegrees}deg)`;
}



// to define how often we need setDate(to get the date and seconds)
setInterval(setDate, 1000);
setDate();