import React from 'react';
import { Container, Map } from './App.styles';
import { Character } from './componets/Character';


export function App() {
  return (
    <Container>
      <Map>
        <Character x={30} y={30}/>
      </Map>
    </Container>
  );
}

