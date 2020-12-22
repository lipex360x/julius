<template>
  <div class="box">

    <FormEntry />

    <div id="entrySection">
      <EntryBox
        :entry="{
          entryType: 'receita',
          valor: 250,
          dataLancamento: '2020-05-30',
          descricao: 'Teste de Lançamento'
        }"
      />

      <EntryBox
        :entry="{
          entryType: 'despesa',
          valor: 130,
          dataLancamento: '2020-06-30',
          descricao: 'Teste de Lançamento'
        }"
      />

      <EntryBox
        :entry="{
          entryType: 'despesa',
          valor: 100,
          dataLancamento: '2020-07-30',
          descricao: 'Teste de Lançamento'
        }"
      />
    </div>

  </div>
</template>

<script>
import { defineComponent } from 'vue'
import FormEntry from './FormEntry.vue'
import EntryBox from './EntryBox.vue'

export default defineComponent({
  name: 'LaunchPanel',

  props: {
    msg: {
      type: String,
      default: 'Hello LaunchPanel'
    }
  },

  components: { FormEntry, EntryBox }
})
</script>

<style scoped>
.box {
  width: 40%;
}
</style>
