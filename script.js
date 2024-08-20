function mountOptionText(value) {
  return value < 10 ? "0" + value : value;
}

var hourSelect = document.getElementById("hora");
Object.keys(10).forEach(function (index) {
  var option = document.createElement("option");
  option.text = mountOptionText(index);
  option.value = index;
  hourSelect.appendChild(option);
});

var minuteSelect = document.getElementById("minuto");
Object.keys(10).forEach(function (index) {
  var option = document.createElement("option");
  option.text = mountOptionText(index);
  option.value = index;
  minuteSelect.appendChild(option);
});
