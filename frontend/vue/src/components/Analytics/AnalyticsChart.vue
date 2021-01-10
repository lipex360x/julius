<template>
  <div class="analyticsChart">
    <canvas id="chartArea"></canvas>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Chart from 'chart.js'
import dateFormat from '../../utils/dateFormat'
import chartOptions from './chartOptions'

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

        

        transactionsOrdered.forEach( transaction => {
          const date = dateFormat(transaction.date)
          dates.push(date)

          currentValue += parseFloat(transaction.value)
          values.push(currentValue)
        })

        const colorCurve = currentValue < 0 ? 'red' : 'blue'
        const chartConfig = {
          type: 'line',
          options: chartOptions,
          data: {
            labels: dates,
            datasets: [{
              label: 'History',
              backgroundColor: colorCurve,
              borderColor: colorCurve,
              data: values,
              fill: false
            }],
          }
        }

        const ctx  = chartArea.getContext('2d')
        new Chart(ctx , chartConfig)
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

};
</script>

<style></style>
