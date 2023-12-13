const time = document.getElementById("time"),
  greeting = document.getElementById("greeting"),
  name = document.getElementById("name"),
  focus = document.getElementById("focus"),
  container = document.querySelector(".container");

function showTime() {
  let today = new Date(),
    hour = today.getHours(),
    min = today.getMinutes(),
    sec = today.getSeconds();

  const meridiem = hour >= 12 ? "PM" : "AM";

  hour = hour % 12 || 12;

  time.innerHTML = `${hour} <span>:</span>${addZero(
    min
  )}<span>:</span>${addZero(sec)} ${meridiem}`;

  setTimeout(showTime, 1000);
}

function addZero(n) {
  return parseInt(n, 10) < 10 ? `0${n}` : n;
}

function setGreetingBG() {
  let today = new Date(),
    hour = today.getHours();

  if (hour < 12) {
    container.style.setProperty(
      "--beforeBackground",
      "url('img/morning.jpg') no-repeat center"
    );
    greeting.textContent = "Good Morning";
    document.body.style.color = "white";
  } else if (hour < 18) {
    container.style.setProperty(
      "--beforeBackground",
      "url('img/afternoon.jpg') no-repeat center"
    );
    greeting.textContent = "Good Afternoon";
    document.body.style.color = "white";
  } else {
    container.style.setProperty(
      "--beforeBackground",
      "url('img/evening.jpg') no-repeat center"
    );
    greeting.textContent = "Good Evening";
    document.body.style.color = "white";
  }
}

function setName(e) {
    if (e.type === 'keypress') {
        if (e.which == 13 || e.keyCode == 13) {
            localStorage.setItem('name', e.target.innerText)
            name.blur()
        }
    } else {
        localStorage.setItem('name', e.target.innerText)
    }
}

function getName() {
    if (localStorage.getItem('name') === null) {
        name.textContent = '[Enter Name]'
    } else {
        name.textContent = localStorage.getItem('name');
    }
}


function setFocus(e) {
    if (e.type === 'keypress') {
        if (e.which == 13 || e.keyCode == 13) {
            localStorage.setItem('focus', e.target.innerText)
            focus.blur()
        }
    } else {
        localStorage.setItem('focus', e.target.innerText)
    }
}

function getFocus() {
    if (localStorage.getItem('focus') === null) {
        focus.textContent = "[Enter your today's focus]"
    } else {
        focus.textContent = localStorage.getItem('focus');
    }
}

name.addEventListener('keypress', setName)
name.addEventListener('blur', setName)

focus.addEventListener('keypress', setFocus)
focus.addEventListener('blur', setFocus)

showTime();
setGreetingBG();
getName()
getFocus()