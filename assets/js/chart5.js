var ctx = document.getElementById("myChartR").getContext("2d");
var myChart = new Chart(ctx, {
  type: "bar",
  data: {
    labels: ["Tahun 2017", "Tahun 2018", "Tahun 2019", "Tahun 2020"],
    datasets: [
      {
        label: "Kacang Panjang",
        data: [96, 131, 124, 95],
        backgroundColor: "#3182CE",
        borderColor: "#2C5282",
        borderWidth: 1,
      },
      {
        label: "Kangkung",
        data: [129, 155, 158, 92],
        backgroundColor: "#E53E3E",
        borderColor: "#63171B",
        borderWidth: 1,
      },
    ],
  },
  options: {
    animation: {
      onComplete: function () {
        chartInstance.generateLegend();
      },
      delay: function (context) {
        return context.datasetIndex * 200;
      },
    },
    scales: {
      y: {
        beginAtZero: true,
      },
    },
    legend: {
      display: true,
    },
    responsive: true,
    barThickness: 20,
    maxBarThickness: 25,
  },
});

var ctx = document.getElementById("myChartRk").getContext("2d");
var myChart = new Chart(ctx, {
  type: "bar",
  data: {
    labels: ["Tahun 2017", "Tahun 2018", "Tahun 2019", "Tahun 2020"],
    datasets: [
      {
        label: "Kacang Panjang",
        data: [3345, 1235, 986, 2187],
        backgroundColor: "#3182CE",
        borderColor: "#2C5282",
        borderWidth: 1,
      },
      {
        label: "Kangkung",
        data: [2014, 3059, 1917, 1811],
        backgroundColor: "#E53E3E",
        borderColor: "#63171B",
        borderWidth: 1,
      },
    ],
  },
  options: {
    animation: {
      onComplete: function () {
        chartInstance.generateLegend();
      },
      delay: function (context) {
        return context.datasetIndex * 200;
      },
    },
    scales: {
      y: {
        beginAtZero: true,
      },
    },
    legend: {
      display: true,
    },
    responsive: true,
    barThickness: 20,
    maxBarThickness: 25,
  },
});

var ctx = document.getElementById("myChartRkp").getContext("2d");
var myChart = new Chart(ctx, {
  type: "bar",
  data: {
    labels: ["Tahun 2017", "Tahun 2018", "Tahun 2019", "Tahun 2020"],
    datasets: [
      {
        label: "Kacang Panjang",
        data: [3993, 3245, 3812, 3542],
        backgroundColor: "#3182CE",
        borderColor: "#2C5282",
        borderWidth: 1,
      },
      {
        label: "Kangkung",
        data: [3520, 3287, 3054, 2431],
        backgroundColor: "#E53E3E",
        borderColor: "#63171B",
        borderWidth: 1,
      },
    ],
  },
  options: {
    animation: {
      onComplete: function () {
        chartInstance.generateLegend();
      },
      delay: function (context) {
        return context.datasetIndex * 200;
      },
    },
    scales: {
      y: {
        beginAtZero: true,
      },
    },
    legend: {
      display: true,
    },
    responsive: true,
    barThickness: 20,
    maxBarThickness: 25,
  },
});
