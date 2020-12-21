<template>
  <div class='box'>
    {{ msg }}
  </div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'SummaryPanel',

  props: {
    msg: {
      type: String,
      default: 'Hello SummaryPanel'
    }
  },

  components: {}
})

</script>

<style scoped>
.box {
  width: 60%
}
</style>
