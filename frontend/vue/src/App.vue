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
    background: rgb(122,162,255);
    background: linear-gradient(45deg, rgba(122,162,255,1) 0%, rgba(95,50,162,1) 25%, rgba(250,34,66,1) 25%, rgba(122,162,255,1) 100%) fixed;
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
