const changeNum = (point, title) => {
  const randomNum = Math.round(point);
  const degrees = Math.round((randomNum / 100) * 180);
  const root = document.querySelector(":root");
  let gauge_title = document.querySelector(`#${title}`);

  let currentNumber = randomNum;
  
  gauge_title.innerText = currentNumber;
  root.style.setProperty("--rotation", `${degrees}deg`);
};


export const drawGaugeChart = (point, title) => changeNum(point, title);