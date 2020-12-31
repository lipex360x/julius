<template>
  <div>
    <MainHeader/>
    <Header msg="Olá, Fulano!"/>
    <Dashboard />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import MainHeader from '@/components/MainHeader.vue'
import Header from '@/components/Header.vue'
import Dashboard from '@/components/Dashboard.vue'

export default defineComponent({
  name: 'App',
  components: { MainHeader, Header, Dashboard }
})
</script>

<style>
@font-face {
  font-family: "padrao";
  src: url("./fonts/KumbhSans-Regular.ttf");
}

@font-face {
  font-family: "negrito";
  src: url("./fonts/KumbhSans-Bold.ttf");
}

:root {
  --cor-destaque: #243b55;
}

* {
  margin: 0;
  padding: 0;
  outline: none;
}

body {
  background-image: linear-gradient(to right, #141e30, #243b55);
}
.container {
  width: 1040px;
  display: flex;
  margin: 0 auto;
}
.down {
  color: #E64F3E
}
.up {
  color: #85BE64
}

</style>
