<template>
  <div class="summaryDashboard">
    <div class="header">
      <span> Saldo da Conta</span>
      <h2>{{ getBalance.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'}) }}</h2>
    </div>

    <ChartBox />
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import { mapGetters } from 'vuex'

import ChartBox from './ChartBox.vue'

export default defineComponent({
  name: 'SummaryDashboard',

  computed: mapGetters(['getBalance']),

  components: { ChartBox }
})
</script>

<style scoped>
.summaryDashboard {
  width: 60%;
}
.header {
  text-align: right;
}

.header span {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  font-family: "padrao";
  font-size: 90%;
}

.header h2 {
  font-family: "negrito";
  font-size: 180%;
  margin-top: 4px;
}
</style>
