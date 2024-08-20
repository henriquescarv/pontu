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

let alarmTime, isAlarmSet, ringTone = new Audio("https://www.soundjay.com/button/beep-07.wav");

console.log(alarmTime)

let hours = null;
let minutes = null;

var date = new Date();
var currentHours = date.getHours();
var currentMinutes = date.getMinutes();

if (alarmTime === `${hours}:${minutes}`) {
  ringTone.play();
  ringTone.loop = true;
}

function setAlarm() {
  hours = document.getElementById("hour").value;
  minutes = document.getElementById("minute").value;

  alarmTime = `${hours}:${minutes}`;
  isAlarmSet = true;
}