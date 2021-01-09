<template>
  <div class="transactionBox">
    <div class="iconAction">
      <img
        :src="transactionType === 'receita' ? maisImg : menosImg"
        :alt="transactionType === 'receita' ? 'Receita' : 'despesa'"
        class="transactionType"
      />

      <button @click="deleteTransaction(transaction.id)">
        <img :src="lixeiraImg" alt="Delete Transaction" />
      </button>
    </div>

    <div class="transactionDetails">
      <span :class="transactionType === 'receita' ? 'value up' : 'value down'">
        {{ currencyFormat(transaction.value) }}
      </span>

      <span class="data">
        {{ dateFormat(transaction.date) }}
      </span>

      <span class="description">
        {{ transaction.description }}
      </span>
      
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

import maisImg from "../../assets/images/mais.png";
import menosImg from "../../assets/images/menos.png";
import lixeiraImg from '../../assets/images/lixeira.png'

import dateFormat from '../../utils/dateFormat'
import currencyFormat from '../../utils/currencyFormat'

export default {
  name: "TransactionBox",  
  methods: mapActions(['deleteTransaction']), 
  
  props: {
    transactionType: String,
    transaction: {
      id: String,
      value: Number,
      date: String,
      description: String,
    },
  },

  data: () => {
    return {
      dateFormat,
      currencyFormat,
      maisImg,
      menosImg,
      lixeiraImg
    };
  },

};
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

.iconAction {
  width: 50%;
}
.iconAction img.transactionType {
  width: 35%;
}

.iconAction button {
  border: none;
  background: none;
  cursor: pointer
}

.iconAction button img {
  width: 70%
}

.iconAction button img:active {
   filter: invert(60%);
}

.transactionDetails {
  display: flex;
  width: 100%;
  float: right;
  flex-direction: column;
  text-align: right;
}

.transactionDetails .value {

  font-family: "negrito";
  font-size: 140%;
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
