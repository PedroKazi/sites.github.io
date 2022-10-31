const wheel = document.getElementById("wheel");
const spinBtn = document.getElementById("spin-btn");
const finalValue = document.getElementById("final-value");
const container = document.getElementById("wheel_cont");
const alert = document.getElementById("alert1");
const set = [10, 10, 10, 10, 20, 20, 20, 30, 30, 40];
var spin_datas = [];
var slices = [];
var arrowP;
//Object that stores values of minimum and maximum angle for a value

function randomizePrizes(set) {
    var rndm = Math.floor(Math.random() * set.length);
    slices.push(set[rndm]);
    return set[rndm];
}

function arrowprize(set) {
    var rndm = Math.floor(Math.random() * set.length);
    arrowP = set[rndm];
    slices.push(set[rndm]);
    return set[rndm];
}

function alertUpdate(id) {
  document.getElementById(id).style.visibility = "hidden";
}

const rotationValues = [
  { minDegree: 31, maxDegree: 90, value: randomizePrizes(set) },
  { minDegree: 0, maxDegree: 30, value: arrowprize(set) },
  { minDegree: 211, maxDegree: 270, value: arrowP },
  { minDegree: 271, maxDegree: 330, value: randomizePrizes(set) },
  { minDegree: 331, maxDegree: 360, value: randomizePrizes(set) },
  { minDegree: 151, maxDegree: 210, value: randomizePrizes(set) },
  { minDegree: 91, maxDegree: 150, value: randomizePrizes(set) },
];
//Size of each piece
const data = [16, 16, 16, 16, 16, 16];
//background color for each piece
var pieColors = [
  "#989898",
  "#B5B5B5",
  "#989898",
  "#B5B5B5",
  "#989898",
  "#B5B5B5",
];
//Create chart
let myChart = new Chart(wheel, {
  //Plugin for displaying text on pie chart
  plugins: [ChartDataLabels],
  //Chart Type Pie
  type: "pie",
  data: {
    //Labels(values which are to be displayed on chart)
    labels: slices,
    //Settings for dataset/pie
    datasets: [
      {
        backgroundColor: pieColors,
        data: data,
      },
    ],
  },
  options: {
    //Responsive chart
    responsive: true,
    animation: { duration: 0 },
    plugins: {
      //hide tooltip and legend
      tooltip: false,
      legend: {
        display: false,
      },
      //display labels inside pie chart
      datalabels: {
        color: "#ffffff",
        formatter: (_, context) => context.chart.data.labels[context.dataIndex],
        font: { size: 24 },
      },
    },
  },
});
//display value based on the randomAngle
const valueGenerator = (angleValue) => {
  for (let i of rotationValues) {
    //if the angleValue is between min and max then display it
    if (angleValue >= i.minDegree && angleValue <= i.maxDegree) {
      finalValue.innerHTML = `${i.value}`;
      alert.style.visibility = "visible";
      spinBtn.disabled = false;
      break;
    }
  }
};

//Spinner count
let count = 0;
//100 rotations for animation and last rotation for result
let resultValue = 101;
//Start spinning
spinBtn.addEventListener("click", () => {

  var today = new Date();
  var dd = String(today.getDate()).padStart(2, '0');
  var mm = String(today.getMonth() + 1).padStart(2, '0');
  var yyyy = today.getFullYear();

  today = mm + '/' + dd + '/' + yyyy;

  if (spin_datas.includes(today)) {
    spinBtn.disabled = true;
    finalValue.innerHTML = `<p>Você ja rodou hoje!</p>`;
  } else {
    document.getElementById("audiospin").play();
    spin_datas.push(today);
    spinBtn.disabled = true;
    //Empty final value
    finalValue.innerHTML = `<p>Boa Sorte!</p>`;
    //Generate random degrees to stop at
    let randomDegree = Math.floor(Math.random() * (355 - 0 + 1) + 0);
    //Interval for rotation animation
    let rotationInterval = window.setInterval(() => {
      //Set rotation for piechart
      /*
      Initially to make the piechart rotate faster we set resultValue to 101 so it rotates 101 degrees at a time and this reduces by 1 with every count. Eventually on last rotation we rotate by 1 degree at a time.
      */
      myChart.options.rotation = myChart.options.rotation + resultValue;
      //Update chart with new value;
      myChart.update();
      //If rotation>360 reset it back to 0
      if (myChart.options.rotation >= 360) {
        count += 1;
        resultValue -= 5;
        myChart.options.rotation = 0;
      } else if (count > 15 && myChart.options.rotation == randomDegree) {
        valueGenerator(randomDegree);
        clearInterval(rotationInterval);
        count = 0;
        resultValue = 101;
      }
    }, 10);
  }
});