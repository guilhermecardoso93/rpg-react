import styled , { createGlobalStyle} from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
`

export const Container = styled.div`
  background-color: #24282f;
  min-height: 100vh;
  color: #fff;
`

export const Map = styled.div`
  background-image: url('./assets/map.png');
  width: 480px;
  height: 480px;
`

