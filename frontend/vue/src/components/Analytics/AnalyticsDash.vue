<template>
  <div class="analyticsDash">
    <header :class="getBalance > 0 ? 'up' : 'down'">
      <span>Account Balance</span>
      <h2>{{ getBalance.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'}) }}</h2>
    </header>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'AnalyticsDash',
  computed: mapGetters(['getBalance']),
  methods: mapActions(['updateBalance']),

  created() {
    this.updateBalance()
  }
}
</script>

<style>

.analyticsDash {
  padding: 20px 15px;
  width: 60%;
  max-height: 400px;
  margin-left: 15px;
  border-radius: 6px;
  background-image: linear-gradient(to top, #f1f1f1, #fafafa);
}

.analyticsDash header {
  text-align: right;
}

header span {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  font-family: "padrao";
  font-size: 90%;
}

header h2 {
  font-family: "negrito";
  font-size: 180%;
  margin-top: 4px;
}
</style>