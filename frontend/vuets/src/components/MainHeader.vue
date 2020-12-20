<template>
  <div>

    <div class="container">

      <div class="logo">
        <img src="@/img/LogoJulius.png" alt="Julius">
        <span>JULIUS</span>
      </div>

      <div class="slogan">
        <span>Sua Vida Financeiro no Eixo</span>
      </div>

    </div>

  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'MainHeader'
})

</script>

<style scoped>
div {
  background: #fff;
  font-family: "negrito";
}

.container {
  padding: 10px;
  align-items: center;
  justify-content: space-between;
  color: var(--cor-destaque)
}

.logo {
  display: flex;
  flex-direction: row;
  align-items: center;
  font-family: "negrito";
  font-size: 130%
}

.logo img {
  width: 40px;
  margin-right: 10px;
}

.slogan span{
  font-size: 110%;
  font-family: "padrao";
}

</style>
