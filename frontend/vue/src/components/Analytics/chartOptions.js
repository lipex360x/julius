export default {
  responsive: true,
  
  title: {
    display: true,
    text: "Account Behavior",
  },

  tooltips: {
    mode: "index",
    intersect: false,
  },

  hover: {
    mode: "nearest",
    intersect: true,
  },

  scales: {
    xAxes: [
      {
        display: true,
        scaleLabel: {
          display: true,
          labelString: "Days",
        },
      },
    ],

    yAxes: [
      {
        display: true,
        scaleLabel: {
          display: true,
          labelString: "Balance",
        },
      },
    ],

  }
}
