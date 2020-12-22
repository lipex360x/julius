<template>
  <div class="header">
    <span> Saldo da Conta</span>
    <h2>R$ 0,00</h2>
  </div>

  <canvas></canvas>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'ChartBox',

  props: {},

  components: {}
})
</script>

<style scoped>
.header {
  text-align: right;
}

.header span{
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
