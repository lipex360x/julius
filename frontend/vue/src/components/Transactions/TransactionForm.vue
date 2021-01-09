<template>
  <div class="transactionForm">
    <form @submit="newTransaction">

      <div class="transactionType">
        <input type="radio" name="transactionTypeInput" id="upRadio" value="receita" v-model="type">
        <label for="upRadio" class="up">Entrada</label>

        <input type="radio" name="transactionTypeInput" id="downRadio" value="despesa" v-model="type" checked>
        <label for="downRadio" class="down">Saída</label>
      </div>

      <label for="inputValue">Valor </label>
      <input type="number" step="0.01" min="0" name="transactionValue" id="inputValue" v-model.number="value" required>

      <label for="inputDescription">Descrição</label>
      <input type="text" name="transactionDescription" id="inputDescription" v-model="description" required>

      <label for="inputDate">Data do Lançamento</label>
      <input type="date" name="transactionDate" id="inputDate" v-model="date" required>

      <div id="transactionButton">
        <button>Criar Lançamento</button>
      </div>

    </form>
  </div>
</template>
<script>
export default {
  name: 'TransactionForm',
  data: () => {
    
  },
}
</script>


<style scoped>
.transactionForm {
  font-family: "padrao";
  margin-top: 15px;
  border-radius: 4px;
  padding: 20px 15px;
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