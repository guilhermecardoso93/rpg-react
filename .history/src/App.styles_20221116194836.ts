import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body { 
    background-color: #24282f;
  }
`;


export const Container = styled.div`
    background-color: #24282F;
    min-height: 100vh;
    color: #FFF;
`;

export const Map = styled.div`
    width: 480px;
    height: 480px;
    background-image: url('/assets/map.png');
    background-position: left top;
    background-size: 100%;
`;