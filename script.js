const dateArea = document.querySelector(".date");

const getDayInfo = (date) => {
  const dateValues = [...date];
  const dateDay = dateValues.slice(0, 2).join("");
  const dateMonth = dateValues.slice(3, 5).join("");
  const dateYear = dateValues.slice(6).join("");
  let day;
  let month;
  let dayValue;
  let monthValue;
  let weekValue;

  const newDateValues = Array.of(dateYear, dateMonth, dateDay); //Поменяли формат даты с day-month-year на year-month-day

  let newDate = new Date(newDateValues);

  day = newDate.getDay();
  month = newDate.getMonth();

  switch (day) {
    case 0:
      dayValue = "Воскресенье";
      break;
    case 1:
      dayValue = "Понедельник";
      break;
    case 2:
      dayValue = "Вторник";
      break;
    case 3:
      dayValue = "Среда";
      break;
    case 4:
      dayValue = "Четверг";
      break;
    case 5:
      dayValue = "Пятница";
      break;
    case 6:
      dayValue = "Суббота";
      break;
  }

  switch (month) {
    case 0:
      monthValue = "Января";
      break;
    case 1:
      monthValue = "Февраля";
      break;
    case 2:
      monthValue = "Марта";
      break;
    case 3:
      monthValue = "Апреля";
      break;
    case 4:
      monthValue = "Мая";
      break;
    case 5:
      monthValue = "Июня";
      break;
    case 6:
      monthValue = "Июля";
      break;
    case 7:
      monthValue = "Августа";
      break;
    case 8:
      monthValue = "Сентября";
      break;
    case 9:
      monthValue = "Октября";
      break;
    case 10:
      monthValue = "Ноября";
      break;
    case 11:
      monthValue = "Декабря";
      break;
  }

  if (dateDay >= 1 && dateDay <= 7) {
    weekValue = 1;
  } else if (dateDay >= 8 && dateDay <= 14) {
    weekValue = 2;
  } else if (dateDay >= 9 && dateDay <= 15) {
    weekValue = 3;
  } else if (dateDay >= 16 && dateDay <= 22) {
    weekValue = 4;
  } else if (dateDay >= 23 && dateDay <= 29) {
    weekValue = 5;
  } else {
    weekValue = 6;
  }

  return `${dayValue}, ${weekValue} неделя ${monthValue} ${dateYear} года`;
};

dateArea.textContent = getDayInfo("08.03.2022");
