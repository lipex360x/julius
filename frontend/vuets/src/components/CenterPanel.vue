<template>
  <div class="container">
    <LaunchPanel />
    <SummaryPanel />
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import LaunchPanel from '@/components/LaunchPanel/LaunchPanel.vue'
import SummaryPanel from '@/components/SummaryPanel/SummaryPanel.vue'

export default defineComponent({
  name: 'CenterPanel',
  components: { LaunchPanel, SummaryPanel }
})

</script>

<style scoped>
.container {
  background: #fff;
  padding: 10px;
  width: 1020px;
  border-radius:6px;
}

.container > div {
  margin: 15px;
}
</style>
