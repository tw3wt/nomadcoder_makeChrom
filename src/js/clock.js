const clock = document.querySelector("#clock");

function getClockTime() {
  const date = new Date();
  let hours = String(date.getHours());
  let minutes = String(date.getMinutes());
  let seconds = String(date.getSeconds());
  let years = String(date.getFullYear());
  let months = String(date.getMonth() + 1);
  let dateDay = String(date.getDate());
  let days = date.getDay();
  let tempDay;
  switch (days) {
    case 0:
      tempDay = "Sunday";
      break;
    case 1:
      tempDay = "Monday";
      break;
    case 2:
      tempDay = "Tuesday";
      break;
    case 3:
      tempDay = "Wednesday";
      break;
    case 4:
      tempDay = "Thursday";
      break;
    case 5:
      tempDay = "Friday";
      break;
    case 6:
      tempDay = "Saturday";
      break;
    default:
      tempDay = "Friday";
  }
  clock.innerText = `${years.padStart(2, "0")}-${months.padStart(
    2,
    "0"
  )}-${dateDay.padStart(2, "0")} ${tempDay}
  ${hours.padStart(2, "0")}:${minutes.padStart(2, "0")}:${seconds.padStart(
    2,
    "0"
  )}`;
}

getClockTime();
setInterval(getClockTime, 1000);
