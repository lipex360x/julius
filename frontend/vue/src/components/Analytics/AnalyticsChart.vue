<template>
  <div class="analyticsChart">
    <canva id="chart"></canva>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: "AnalyticsChart",
  computed: mapGetters(['getTransactions']),
  
  methods: {
    renderChart() {
      const transactions = [...this.getTransactions]
      const transactionsOrdered = transactions.sort((a, b) => new Date(a.date) - new Date(b.date))

      console.log(transactionsOrdered)
    }
  },

  created() {
    this.renderChart()
  },

  data: () => {
    return {
      chartOptions: {
        responsive: true,
        title: {
          display: true,
          text: "Balance",
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
                labelString: "Renda",
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
