<template>
  <div class='box'>
    <ChartBox />
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import ChartBox from './ChartBox.vue'

export default defineComponent({
  name: 'SummaryPanel',

  props: {
    msg: {
      type: String,
      default: 'Hello SummaryPanel'
    }
  },

  components: { ChartBox }
})

</script>

<style scoped>
.box {
  width: 60%
}
</style>
