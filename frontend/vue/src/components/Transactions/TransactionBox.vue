<template>
  <div class="transactionBox">
    <img
      v-if="transactionType==='receita'"
      src="../../assets/images/mais.png"
      alt="Receita"
      class="transactionType"
    />

    <img
      v-else-if="transactionType==='despesa'"
      src="../../assets/images/menos.png"
      alt="Receita"
      class="transactionType"
    />

    <div class="transactionDetails">
      <span v-if="transactionType === 'receita'" class="value up">{{ transaction.value.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'}) }}</span>
      <span v-else-if="transactionType === 'despesa'" class="value down">{{  transaction.value.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'}) }}</span>
      <span class="data">{{ new Date(transaction.date).toLocaleDateString() }}</span>
      <span class="description">{{ transaction.description }}</span>
    </div>

  </div>
</template>

<script>

export default {
  name: 'TransactionBox',
  props: {
    transactionType: String,
    transaction: {
      value: Number,
      date: String,
      description: String
    }
  }
}
</script>

<style>
.transactionBox {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 15px;
  padding: 20px 15px;
  border-radius: 6px;
  background-image: linear-gradient(to top, #f1f1f1, #fafafa);
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