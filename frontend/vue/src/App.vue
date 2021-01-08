<template>
  <Header/>
</template>

<script>
import Header from './components/Header.vue'

export default {
  name: 'App',
  components: {
    Header
  }
}
</script>

<style>
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  @font-face {
    font-family: "padrao";
    src: url("./assets/fonts/KumbhSans-Regular.ttf");
  }

  @font-face {
    font-family: "negrito";
    src: url("./assets/fonts/KumbhSans-Bold.ttf");
  }

  :root {
    --cor-destaque: #243b55;
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
