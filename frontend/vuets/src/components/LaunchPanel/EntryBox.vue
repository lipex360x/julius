<template>
  <div class="entry">
    <img
      v-if="entry.entryType === 'receita'"
      src="@/img/mais.png"
      alt="Receita"
      class="typeEntry"
    />
    <img
      v-else-if="entry.entryType === 'despesa'"
      src="@/img/menos.png"
      alt="Despesa"
      class="typeEntry"
    />

    <!-- <button class="deleteEntry">
      <img src="@/img/lixeira.png" alt="Remove Entry" />
    </button> -->

    <div class="descriptionEntry">

      <span v-if="entry.entryType === 'receita'" class="value up">{{ entry.valor.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'}) }}</span>
      <span v-else-if="entry.entryType === 'despesa'" class="value down">{{ entry.valor.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'}) }}</span>

      <span class="data">{{ new Date(entry.dataLancamento).toLocaleDateString() }}</span>
      <span class="description">{{ entry.descricao }}</span>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'EntryBox',

  props: {
    entry: {
      entryType: String,
      valor: Number,
      dataLancamento: Date,
      descricao: String
    }
  },

  components: {}
})
</script>

<style scoped>
.entry {
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

img.typeEntry {
  width: 12%;
}
button.deleteEntry {
  border: none;
  background: none;
  float: left;
  cursor: pointer;
}
button.deleteEntry img {
  width: 70%;
}

button.deleteEntry img:active {
  filter: invert(60%);
}

.descriptionEntry {
  display: flex;
  float: right;
  flex-direction: column;
  text-align: right;
}

.descriptionEntry .value {
  font-family: "negrito";
  font-size: 160%;
}

.descriptionEntry .data {
  margin-top: 4px;
  font-size: 80%;
  font-family: "padrao";
}

.descriptionEntry .description {
  font-size: 90%;
  font-family: "padrao";
}
</style>
