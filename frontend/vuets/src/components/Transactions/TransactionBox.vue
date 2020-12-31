<template>
  <div class="transactionBox">
    <img
      v-if="transaction.type === 'receita'"
      src="@/img/mais.png"
      alt="Receita"
      class="transactionType"
    />
    <img
      v-else-if="transaction.type === 'despesa'"
      src="@/img/menos.png"
      alt="Despesa"
      class="transactionType"
    />

    <!-- <button class="transactionButton">
      <img src="@/img/lixeira.png" alt="Remove Entry" />
    </button> -->

    <div class="transactionDetails">

      <span v-if="transaction.type === 'receita'" class="value up">{{ transaction.value.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'}) }}</span>
      <span v-else-if="transaction.type === 'despesa'" class="value down">{{ transaction.value.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'}) }}</span>

      <span class="data">{{ new Date(transaction.date).toLocaleDateString() }}</span>
      <span class="description">{{ transaction.descricao }}</span>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'TransactionBox',

  props: {
    transaction: {
      type: String,
      value: Number,
      date: Date,
      description: String
    }
  },

  components: {}
})
</script>

<style scoped>
.transactionBox {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 15px;
  padding: 20px 15px;
  border-radius: 6px;
  background-image: linear-gradient(to top, #f1f1f1, #fafafa);
  -webkit-box-shadow: 0px 2px 4px 0px rgba(190, 190, 190);
  -moz-box-shadow: 0px 2px 4px 0px rgba(190, 190, 190);
  box-shadow: 0px 2px 4px 0px rgb(190, 190, 190);
}

.leftContent {
  width: 100%;
}

img.transactionType {
  width: 12%;
}
button.transactionButton {
  border: none;
  background: none;
  float: left;
  cursor: pointer;
}
button.transactionButton img {
  width: 70%;
}

button.transactionButton img:active {
  filter: invert(60%);
}

.transactionDetails {
  display: flex;
  float: right;
  flex-direction: column;
  text-align: right;
}

.transactionDetails .value {
  font-family: "negrito";
  font-size: 160%;
}

.transactionDetails .data {
  margin-top: 4px;
  font-size: 80%;
  font-family: "padrao";
}

.transactionDetails .description {
  font-size: 90%;
  font-family: "padrao";
}
</style>
