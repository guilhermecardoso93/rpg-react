import React, { useEffect } from "react";
import { Container, Map } from "./App.styles";
import { Character } from "./componets/Character";
import { useCharacter } from "./hooks/useCharacter";

export function App() {
  const character = useCharacter();

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);

    function handleKeyDown(e: KeyboardEvent) {
      switch (e.code) {
        case "KeyA":
        case "ArrowLeft":
          character.moveLeft();
          break;
        case "KeyW":
        case "ArrowUp":
          character.moveTop();
          break;
        case "KeyD":
        case "ArrowRight":
          character.moveRight();
          break;
        case "KeyS":
        case "ArrowDown":
          character.moveDown();
          break;
      }
    }
  }, []);

  return (
    <Container>
      <Map>
        <Character x={character.x} y={character.y} />
      </Map>
    </Container>
  );
}
