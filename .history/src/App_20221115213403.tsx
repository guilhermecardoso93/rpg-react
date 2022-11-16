import React from 'react';
import { Container, Map } from './App.styles';
import { Character } from './componets/Character';


export function App() {
  return (
    <Container>
      <Map>
        <Character x={6} y={4}/>
      </Map>
    </Container>
  );
}

