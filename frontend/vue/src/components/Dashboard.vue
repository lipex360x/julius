<template>
  <div class="dashboard container">
    <TransactionDash />
    <AnalyticsDash />
  </div>
</template>

<script>
import TransactionDash from '../components/Transactions/TransactionDash.vue'
import AnalyticsDash from '../components/Analytics/AnalyticsDash.vue'

export default {
  name: 'Dashboard',
  components: {
    TransactionDash,
    AnalyticsDash
  }
}
</script>

<style scoped>

.dashboard {
  display: flex;
  background: rgba(255,255,255,0.3);
  padding: 15px;
  max-width: 1020px;
  border-radius:6px;
}
</style>