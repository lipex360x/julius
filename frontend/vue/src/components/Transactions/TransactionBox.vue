<template>
  <div class="transactionBox">
    <img
      src="../../assets/images/mais.png"
      alt="Receita"
      class="transactionType"
    />

    <div class="transactionDetails">
      <span class="value up">200</span>
      <span class="data">08/01/2020</span>
      <span class="description">lorem ipsum dolor</span>
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
  -webkit-box-shadow: 0px 2px 4px 0px rgba(190, 190, 190);
  -moz-box-shadow: 0px 2px 4px 0px rgba(190, 190, 190);
  box-shadow: 0px 2px 4px 0px rgb(190, 190, 190);
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