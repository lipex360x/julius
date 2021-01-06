import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body {
    background-image: linear-gradient(to right, #141e30, #243b55)
  }

  :root{
    --color-default: #141e30
  }

  @font-face{
  font-family: "negrito";
  src: url('../fonts/KumbhSans-Bold.ttf')
  }

  @font-face{
    font-family: "padrao";
    src: url('../fonts/KumbhSans-Regular.ttf')
  }

  .container {
    max-width: 1100px;
    padding: 0 20px;
    margin: 0 auto;
  }
` 