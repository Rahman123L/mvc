var ctx = document.getElementById("myChart17").getContext("2d");
var myChart = new Chart(ctx, {
  type: "bar",
  data: {
    labels: ["SUNGAI KANAN", "TORGAMBA", "KOTAPINANG", "SILANGKITANG", "KAMPUNG RAKYAT"],
    datasets: [
      {
        label: "Kacang Panjang",
        data: [19, 14, 11, 40, 12],
        backgroundColor: "#3182CE",
        borderColor: "#2C5282",
        borderWidth: 1,
      },
      {
        label: "Kangkung",
        data: [26, 14, 12, 36, 41],
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

var ctx = document.getElementById("myChart2017").getContext("2d");
var myChart = new Chart(ctx, {
  type: "bar",
  data: {
    labels: ["SUNGAI KANAN", "TORGAMBA", "KOTAPINANG", "SILANGKITANG", "KAMPUNG RAKYAT"],
    datasets: [
      {
        label: "Kacang Panjang",
        data: [998, 399, 72, 1795, 81],
        backgroundColor: "#3182CE",
        borderColor: "#2C5282",
        borderWidth: 1,
      },
      {
        label: "Kangkung",
        data: [187, 399, 204, 646, 578],
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

var ctx = document.getElementById("myChart17R").getContext("2d");
var myChart = new Chart(ctx, {
  type: "bar",
  data: {
    labels: ["SUNGAI KANAN", "TORGAMBA", "KOTAPINANG", "SILANGKITANG", "KAMPUNG RAKYAT"],
    datasets: [
      {
        label: "Kacang Panjang",
        data: [3344, 4371, 5082, 3170, 4000],
        backgroundColor: "#3182CE",
        borderColor: "#2C5282",
        borderWidth: 1,
      },
      {
        label: "Kangkung",
        data: [2548, 4371, 5041, 2179, 3463],
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