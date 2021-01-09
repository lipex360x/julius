<template>
  <div class="transactionDash">
    <TransactionForm />

    <div id="transactionSection">

      <!-- <TransactionBox
        v-for="transaction in getTransactions"
        v-bind:key="transaction.id"
        :transactionType="transaction.value > 0 ? 'receita' : 'despesa'"
        :transaction="transaction"
      /> -->

    </div>
  </div>
</template>

<script>
import TransactionForm from './TransactionForm.vue'

export default {
  name: 'TransactionDash',
  components: { TransactionForm }
}

</script>

<style scoped>
.transactionDash {
  width: 40%;
}
</style>
