<template>
  <div class="transactionDashboard">
    <TransactionForm />

    <div id="transactionSection">

      <TransactionBox
        v-for="transaction in getTransactions"
        v-bind:key="transaction.id"
        :transactionType="transaction.value > 0 ? 'receita' : 'despesa'"
        :transaction="transaction"
      />

    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import { mapGetters } from 'vuex'

import TransactionForm from './TransactionForm.vue'
import TransactionBox from './TransactionBox.vue'

export default defineComponent({
  name: 'TransactionDashboard',
  computed: mapGetters(['getTransactions']),
  components: { TransactionForm, TransactionBox }
})
</script>

<style scoped>
.transactionDashboard {
  width: 40%;
}
</style>
