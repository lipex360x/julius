<template>
  <div class="transactionDash">
    <TransactionForm />

    <div id="transactionSection">
      <TransactionBox />
    </div>
  </div>
</template>

<script>
import TransactionForm from './TransactionForm.vue'
import TransactionBox from './TransactionBox.vue'

export default {
  name: 'TransactionDash',
  components: { TransactionForm, TransactionBox }
}

</script>

<style scoped>
.transactionDash {
  width: 40%;
}
</style>
