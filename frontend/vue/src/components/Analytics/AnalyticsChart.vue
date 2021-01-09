<template>
  <div class="analyticsChart">
    <canvas id="chartArea"></canvas>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Chart from 'chart.js'
import dateFormat from '../../utils/dateFormat'

export default {
  name: "AnalyticsChart",
  computed: mapGetters(['getTransactions']),
  
  methods: {
    renderChart() {
      const chartArea = document.getElementById("chartArea");
      
      if(chartArea) {

        const transactions = [...this.getTransactions]
        const transactionsOrdered = transactions.sort((a, b) => new Date(a.date) - new Date(b.date))

        let dates = []
        let values = []
        let currentValue = 0

        transactions.forEach( transaction => {
          const date = dateFormat(transaction.date)
          dates.push(date)

          currentValue += transaction.value
          values.push(currentValue)
        })

        const colorCurve = currentValue < 0 ? 'red' : 'blue'
        const chartConfig = {
          type: 'line',
          data: {
            labels: dates,
            datasets: [{
              label: 'History',
              backgroundColor: colorCurve,
              borderColor: colorCurve,
              data: values,
              fill: false
            }],
          },
          options: this.chartOptions
        }

        const ctx  = chartArea.getContext('2d')
        new Chart(ctx , chartConfig)

        console.log(transactionsOrdered)
      }
    }
  },

  mounted() {
    this.renderChart();
  },

  created() {
    // eslint-disable-next-line no-unused-vars
    this.$store.subscribe((mutation, state) => {
      if(mutation.type === 'setBalance') {
        this.renderChart()
      }
    })
  },

  data: () => {
    return {
      chartOptions: {
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
        },
      },
    };
  },

};
</script>

<style></style>
