import React, { useEffect } from 'react';
import { Container, Map } from './App.styles';
import { Character } from './componets/Character';
import { useCharacter } from './hooks/useCharacter';


export function App() {
  const character = useCharacter()

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown)

    function handleKeyDown(e: KeyboardEvent) {
      switch(e.code) {
        case 'KeyA':
        case 'ArrowLeft':

        break
        case 'KeyW':
        case 'ArrowUp':

          break
          case 'KeyD':
          case 'ArrowRight':

            break
            case 'KeyS':
            case 'ArrowDown':

            break
      }
    }
    
  }, []);

  return (
    <Container>
      <Map>
        <Character x={character.x} y={character.y}/>
      </Map>
    </Container>
  );
}

