<template>
  <Header />
  <Banner msg="Hello Joe" />
  <Dashboard />
  
</template>

<script>
import Header from './components/Header.vue'
import Banner from './components/Banner.vue'
import Dashboard from './components/Dashboard.vue'

export default {
  name: 'App',
  components: {
    Header,
    Banner,
    Dashboard
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
    background: rgb(110,117,222);
    background: linear-gradient(49deg, rgba(110,117,222,1) 0%, rgba(125,46,108,1) 100%) fixed;
  }
  .container {
    max-width: 1040px;
    display: flex;
    margin: 0 auto;
  }
  .down {
    color: #E64F3E
  }
  .up {
    color: #3f8814
  }
</style>
