<template>
  <div class="transactionForm">
    <form @submit="newTransaction">

      <div class="transactionType">
        <input type="radio" name="transactionTypeInput" id="upRadio" value="receita" v-model="type">
        <label for="upRadio" class="up">Incoming</label>

        <input type="radio" name="transactionTypeInput" id="downRadio" value="despesa" v-model="type" checked>
        <label for="downRadio" class="down">Outcoming</label>
      </div>

      <label for="inputValue">Value</label>
      <input type="number" step="0.01" min="0" name="transactionValue" id="inputValue" v-model.number="value" required>

      <label for="inputDescription">Description</label>
      <input type="text" name="transactionDescription" id="inputDescription" v-model="description" required>

      <label for="inputDate">Date</label>
      <input type="date" name="transactionDate" id="inputDate" v-model="date" required>

      <div id="transactionButton">
        <button>Create Transaction</button>
      </div>

    </form>
  </div>
</template>
<script>
import { mapActions } from 'vuex'
import TransactionModel from '../../models/TransactionModel'

export default {
  name: 'TransactionForm',
  
  data: () => {
    return {
      type: 'despesa',
      value: undefined,
      description: '',
      date: ''
    }
  },

  methods: {
    ...mapActions(['saveTransaction']),

    newTransaction(event) {
      event.preventDefault()
      const transaction = new TransactionModel({
        date: this.date,
        value: this.type === 'receita' ? this.value : this.value * -1,
        description: this.description
      })
      
      this.saveTransaction(transaction)
      this.cleanForm()
    },
    
    cleanForm() {
      this.type = 'despesa';
      this.value = undefined;
      this.description = '';
      this.date = ''
    }
  }
}
</script>


<style scoped>
.transactionForm {
  font-family: "padrao";
  border-radius: 4px;
  padding: 5px 15px 15px 15px;
  font-size: 90%;
  background-image: linear-gradient(to top, #f1f1f1, #fafafa);
 
}
.transactionForm .transactionType {
  margin: 10px 0
}

.transactionForm .transactionType input {
  margin: 0;
  margin-right: 5px;;
  vertical-align: middle;
  display: inline;
}

.transactionForm .transactionType label {
  vertical-align: middle;
  margin-right: 10px;
  font-family: "negrito";
}

.transactionForm input {
  display: flex;
  flex-direction: row;
  margin-bottom: 15px;
  border: 1px solid #ccc;
  height: 30px;
  border-radius: 4px;
  font-family: "padrao";
  font-size: 110%;
  padding: 0 10px;
}

#inputValue {
  width: 40%
}

#inputDescription{
  width: 94%;
}

#transactionButton {
  display: flex;
  align-content: center;
}

#transactionButton button{
  border: none;
  padding: 10px 8px;
  background-color: var(--cor-destaque);
  color: white;
  cursor: pointer;
  font-family: "padrao";
  border-radius: 4px;
}

</style>