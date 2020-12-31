<template>
  <div class="dashboard container">
    <TransactionDashboard />
    <SummaryDashboard />
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import TransactionDashboard from '@/components/Transactions/TransactionDashboard.vue'
import SummaryDashboard from '@/components/Summary/SummaryDashboard.vue'

export default defineComponent({
  name: 'Dashboard',
  components: { TransactionDashboard, SummaryDashboard }
})

</script>

<style scoped>
.dashboard {
  background: #fff;
  padding: 10px;
  width: 1020px;
  border-radius:6px;
}

.dashboard > div {
  margin: 15px;
}
</style>
