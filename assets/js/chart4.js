var ctx = document.getElementById("myChart20").getContext("2d");
var myChart = new Chart(ctx, {
  type: "bar",
  data: {
    labels: ["SUNGAI KANAN", "TORGAMBA", "KOTAPINANG", "SILANGKITANG", "KAMPUNG RAKYAT"],
    datasets: [
      {
        label: "Kacang Panjang",
        data: [8, 20, 4, 49, 14],
        backgroundColor: "#3182CE",
        borderColor: "#2C5282",
        borderWidth: 1,
      },
      {
        label: "Kangkung",
        data: [9, 48, 12, 14, 9],
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

var ctx = document.getElementById("myChart2020").getContext("2d");
var myChart = new Chart(ctx, {
  type: "bar",
  data: {
    labels: ["SUNGAI KANAN", "TORGAMBA", "KOTAPINANG", "SILANGKITANG", "KAMPUNG RAKYAT"],
    datasets: [
      {
        label: "Kacang Panjang",
        data: [124, 572, 48, 1330, 113],
        backgroundColor: "#3182CE",
        borderColor: "#2C5282",
        borderWidth: 1,
      },
      {
        label: "Kangkung",
        data: [86, 704, 498, 224, 299],
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

var ctx = document.getElementById("myChart20R").getContext("2d");
var myChart = new Chart(ctx, {
  type: "bar",
  data: {
    labels: ["SUNGAI KANAN", "TORGAMBA", "KOTAPINANG", "SILANGKITANG", "KAMPUNG RAKYAT"],
    datasets: [
      {
        label: "Kacang Panjang",
        data: [3033, 3332, 2613, 3183, 5551],
        backgroundColor: "#3182CE",
        borderColor: "#2C5282",
        borderWidth: 1,
      },
      {
        label: "Kangkung",
        data: [2505, 2697, 2631, 1174, 3150],
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