<template>
  <div class="dashboard container">
    <TransactionDash />
  </div>
</template>

<script>
import TransactionDash from '../components/Transactions/TransactionDash.vue'

export default {
  name: 'Dashboard',
  components: {
    TransactionDash
  }
}
</script>

<style scoped>

.dashboard {
  background: rgba(255,255,255,0.6);
  padding: 10px;
  width: 1020px;
  border-radius:6px;
}
</style>