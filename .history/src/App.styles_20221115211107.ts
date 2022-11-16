import styled , { createGlobalStyle} from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body { 
    background-color: #24282f;

  }
`

export const Container = styled.div`
  background-color: #24282f;
  min-height: 100vh;
  color: #fff;
  display: flex;
  justify-content: center;
  margin: 4rem;
`

export const Map = styled.div`
  background-image: url('/assets/map.png');
  background-position: left top;
  background-size:cover;
  width: 480px;
  height: 480px;
`

