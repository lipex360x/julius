<template>
  <div class="transactionDashboard">
    <TransactionForm />

    <div id="transactionSection">
      <TransactionBox
        :transaction="{
          type: 'receita',
          value: 250,
          date: '2020-05-30',
          description: 'Teste de Lançamento'
        }"
      />
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import TransactionForm from './TransactionForm.vue'
import TransactionBox from './TransactionBox.vue'

export default defineComponent({
  name: 'TransactionDashboard',
  data: () => {
    return {}
  },
  components: { TransactionForm, TransactionBox }
})
</script>

<style scoped>
.transactionDashboard {
  width: 40%;
}
</style>
