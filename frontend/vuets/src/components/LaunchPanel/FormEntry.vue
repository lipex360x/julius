<template>
  <div class="formEntry">
    <form onsubmit="setEntry(event)">

      <div class="typeEntry">
        <input type="radio" name="inputTypeEntry" id="upRadio">
        <label for="upRadio" class="up">Entrada</label>

        <input type="radio" name="inputTypeEntry" id="downRadio" checked>
        <label for="downRadio" class="down">Saída</label>
      </div>

      <label for="inputValor">Valor </label>
      <input type="number" step="0.01" min="0" name="value" id="inputValor" required>

      <label for="inputDescricao">Descrição</label>
      <input type="text" name="description" id="inputDescricao" required>

      <label for="inputData">Data do Lançamento</label>
      <input type="date" name="dataEntry" id="inputData" required>

      <div id="buttonEntry">
        <button>Criar Lançamento</button>
      </div>

    </form>
  </div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'FormEntry'
})

</script>

<style scoped>
.formEntry {
  font-family: "padrao";
  margin-top: 15px;
  border-radius: 4px;
  padding: 20px 15px;
  font-size: 90%;
  background-image: linear-gradient(to top, #f1f1f1, #fafafa);
  -webkit-box-shadow: 0px 1px 6px 0px rgba(190, 190, 190);
  -moz-box-shadow: 0px 1px 6px 0px rgba(190, 190, 190);
  box-shadow: 0px 1px 6px 0px rgb(190, 190, 190);
}
.formEntry .typeEntry {
  margin: 10px 0
}

.formEntry .typeEntry input {
  margin: 0;
  margin-right: 5px;;
  vertical-align: middle;
  display: inline;
}

.formEntry .typeEntry label {
  vertical-align: middle;
  margin-right: 10px;
  font-family: "negrito";
}

.formEntry input {
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

#inputValor {
  width: 40%
}

#inputDescricao{
  width: 94%;
}

#buttonEntry {
  display: flex;
  align-content: center;
}

#buttonEntry button{
  border: none;
  padding: 10px 8px;
  background-color: var(--cor-destaque);
  color: white;
  cursor: pointer;
  font-family: "padrao";
  border-radius: 4px;
}

</style>
