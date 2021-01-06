import styled from 'styled-components'

const font = 'Kumbh Sans'

export const Section = styled.section`
  background: #fff;
  padding: 10px 0;
  width: 100%;
`

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
` 

export const Logo = styled.div`
  display: flex;
  align-items: center;

  img {
    width: 40px;
  }

  h1 {
    font-family: ${font};
    font-size: 110%;
    margin-left: 10px;
  }
`

export const Slogan = styled.div`
  span {
    font-family: ${font};
    font-size: 110%;
  }
`
