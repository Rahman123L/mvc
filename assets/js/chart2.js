var ctx = document.getElementById("myChart18").getContext("2d");
var myChart = new Chart(ctx, {
  type: "bar",
  data: {
    labels: ["SUNGAI KANAN", "TORGAMBA", "KOTAPINANG", "SILANGKITANG", "KAMPUNG RAKYAT"],
    datasets: [
      {
        label: "Kacang Panjang",
        data: [60, 13, 12, 36, 10],
        backgroundColor: "#3182CE",
        borderColor: "#2C5282",
        borderWidth: 1,
      },
      {
        label: "Kangkung",
        data: [43, 30, 11, 35, 36],
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

var ctx = document.getElementById("myChart2018").getContext("2d");
var myChart = new Chart(ctx, {
  type: "bar",
  data: {
    labels: ["SUNGAI KANAN", "TORGAMBA", "KOTAPINANG", "SILANGKITANG", "KAMPUNG RAKYAT"],
    datasets: [
      {
        label: "Kacang Panjang",
        data: [305, 150, 81, 641, 58],
        backgroundColor: "#3182CE",
        borderColor: "#2C5282",
        borderWidth: 1,
      },
      {
        label: "Kangkung",
        data: [201, 710, 172, 442, 1534],
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

var ctx = document.getElementById("myChart18R").getContext("2d");
var myChart = new Chart(ctx, {
  type: "bar",
  data: {
    labels: ["SUNGAI KANAN", "TORGAMBA", "KOTAPINANG", "SILANGKITANG", "KAMPUNG RAKYAT"],
    datasets: [
      {
        label: "Kacang Panjang",
        data: [1894, 3616, 4161, 2930, 3622],
        backgroundColor: "#3182CE",
        borderColor: "#2C5282",
        borderWidth: 1,
      },
      {
        label: "Kangkung",
        data: [3009, 3177, 4703, 2640, 2907],
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