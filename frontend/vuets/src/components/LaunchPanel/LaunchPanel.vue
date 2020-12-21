<template>

  <div class="box">
    <FormEntry />
  </div>

</template>

<script>
import { defineComponent } from 'vue'
import FormEntry from './FormEntry.vue'

export default defineComponent({
  name: 'LaunchPanel',

  props: {
    msg: {
      type: String,
      default: 'Hello LaunchPanel'
    }
  },

  components: { FormEntry }
})

</script>

<style scoped>
.box {
  width: 40%
}
</style>
