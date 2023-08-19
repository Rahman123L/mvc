var ctx = document.getElementById("myChart19").getContext("2d");
var myChart = new Chart(ctx, {
  type: "bar",
  data: {
    labels: ["SUNGAI KANAN", "TORGAMBA", "KOTAPINANG", "SILANGKITANG", "KAMPUNG RAKYAT"],
    datasets: [
      {
        label: "Kacang Panjang",
        data: [31, 19, 12, 54, 8],
        backgroundColor: "#3182CE",
        borderColor: "#2C5282",
        borderWidth: 1,
      },
      {
        label: "Kangkung",
        data: [33, 59, 12, 27, 27],
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

var ctx = document.getElementById("myChart2019").getContext("2d");
var myChart = new Chart(ctx, {
  type: "bar",
  data: {
    labels: ["SUNGAI KANAN", "TORGAMBA", "KOTAPINANG", "SILANGKITANG", "KAMPUNG RAKYAT"],
    datasets: [
      {
        label: "Kacang Panjang",
        data: [198, 222, 86, 416, 64],
        backgroundColor: "#3182CE",
        borderColor: "#2C5282",
        borderWidth: 1,
      },
      {
        label: "Kangkung",
        data: [214, 493, 197, 296, 717],
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

var ctx = document.getElementById("myChart19R").getContext("2d");
var myChart = new Chart(ctx, {
  type: "bar",
  data: {
    labels: ["SUNGAI KANAN", "TORGAMBA", "KOTAPINANG", "SILANGKITANG", "KAMPUNG RAKYAT"],
    datasets: [
      {
        label: "Kacang Panjang",
        data: [4601, 3545, 3375, 3880, 3658],
        backgroundColor: "#3182CE",
        borderColor: "#2C5282",
        borderWidth: 1,
      },
      {
        label: "Kangkung",
        data: [2226, 2203, 5060, 2983, 2797],
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