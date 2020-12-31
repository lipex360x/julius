<template>
  <div class='summaryDashboard'>
    <ChartBox />
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import ChartBox from './ChartBox.vue'

export default defineComponent({
  name: 'SummaryDashboard',

  components: { ChartBox }
})

</script>

<style scoped>
.summaryDashboard {
  width: 60%
}
</style>
