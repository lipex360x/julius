<template>
  <div class="transactionDash">
    <TransactionForm />

    <div id="transactionSection">
      <TransactionBox 
        v-for="transaction in getTransactions"
        :key="transaction.lancamento_id"
        :transactionType="transaction.value > 0 ? 'receita' : 'despesa'"
        :transaction="transaction"
      />
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import TransactionForm from './TransactionForm.vue'
import TransactionBox from './TransactionBox.vue'

export default {
  name: 'TransactionDash',
  components: { TransactionForm, TransactionBox },
  computed: mapGetters(['getTransactions']),
  methods: mapActions(['getAllTransactions']),
  
  created() {
    this.getAllTransactions()
  }
}

</script>

<style scoped>
.transactionDash {
  width: 40%;
}
</style>
