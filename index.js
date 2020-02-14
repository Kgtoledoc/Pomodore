const clock = document.getElementById("clock");
const pomodore = document.getElementById("pomodore");
const button = document.getElementById("button");

function currentTime() {
  var date = new Date(); /* creating object of Date class */
  var hour = date.getHours();
  var min = date.getMinutes();
  var sec = date.getSeconds();
  var midday = "AM";
  midday = hour >= 12 ? "PM" : "AM"; /* assigning AM/PM */
  hour =
    hour == 0
      ? 12
      : hour > 12
      ? hour - 12
      : hour; /* assigning hour in 12-hour format */
  hour = updateTime(hour);
  min = updateTime(min);
  sec = updateTime(sec);
  clock.innerText =
    hour +
    " : " +
    min +
    " : " +
    sec +
    " " +
    midday; /* adding time to the div */
  var t = setTimeout(currentTime, 1000); /* setting timer */
}

function updateTime(k) {
  if (k < 10) {
    return "0" + k;
  } else {
    return k;
  }
}

//currentTime();

// Variables Globales
var tiempo = {};
var fixDate = new Date();
var newDate = new Date();
newDate.setTime(newDate.getTime() + 15 * 60000);

var distance = newDate - fixDate;

button.addEventListener("click", () => {
  var newDate = new Date();
  newDate.setTime(newDate.getTime() + 15 * 60000);
  var x = setInterval(function() {
    var old = new Date();
    var distance = newDate - old;

    var hourPomodore = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    var minutePomodore = Math.floor(
      (distance % (1000 * 60 * 60)) / (1000 * 60)
    );
    var secondPomodore = Math.floor((distance % (1000 * 60)) / 1000);

    pomodore.innerHTML =
      hourPomodore + " : " + minutePomodore + " : " + secondPomodore;
  }, 1000);
});

/* pomodoreDate.setMinutes(pomodoreDate.getMinutes() + 14);
var intervalo = window.setInterval(mostrar_hora, 1); // Frecuencia de actualización
var i = 0; // Esta variable me ayudará a definir los estados de intervalo

function mostrar_hora() {
  var now = new Date();
  // Inserta la hora almacenada en clock en el span con id hora
  tiempo.horas = document.getElementById("hora");

  let hourPomodore = 
  let minutePomodore =
  let secondPomodore = 
  // Inserta los minutos almacenados en clock en el span con id minuto
  hourPomodore = updateTime(hourPomodore);
  minutePomodore = updateTime(minutePomodore);
  secondPomodore = updateTime(secondPomodore);

  // Inserta los segundos almacenados en clock en el span con id segundo*/
