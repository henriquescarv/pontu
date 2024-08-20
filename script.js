function mountOptionText(value) {
  return value < 10 ? "0" + value : value;
}

var hourElement = document.getElementById("hour");
for (var index = 0; index < 24; index++) {
  var option = document.createElement("option");
  option.text = mountOptionText(index);
  option.value = index;
  hourElement.appendChild(option);
}

var minuteElement = document.getElementById("minute");
for (var index = 0; index < 60; index++) {
  var option = document.createElement("option");
  option.text = mountOptionText(index);
  option.value = index;
  minuteElement.appendChild(option);
}

// let alarmTime, isAlarmSet, ringTone = new Audio("https://www.soundjay.com/button/beep-07.wav");
let alarmTime = null;

let hours = null;
let minutes = null;

var date = new Date();
var currentHours = date.getHours();
var currentMinutes = date.getMinutes();


setInterval(() => {
  if (alarmTime === `${currentHours}:${currentMinutes}`) {
    var alert = document.createElement("alarmAlert");
    alert.innerText = 'ALARM TIME!';
    document.body.appendChild(alert);
    
    // ringTone.play();
    // ringTone.loop = true;
  }
}, 1000)

function setAlarm() {
  hours = document.getElementById("hour").value;
  minutes = document.getElementById("minute").value;
  
  alarmTime = `${hours}:${minutes}`;
  console.log('alarm setted to ' + alarmTime);
}

document.getElementById("setAlarmButton").addEventListener("click", setAlarm);