import React from 'react';
import { Container, Map } from './App.styles';
import { Character } from './componets/Character';
import { useCharacter } from './hooks/useCharacter';


export function App() {
  const character = useCharacter()

  return (
    <Container>
      <Map>
        <Character x={character.x} y={character.y}/>
      </Map>
    </Container>
  );
}

