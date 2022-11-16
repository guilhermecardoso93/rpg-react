import { useState } from "react";
import { CharacterSides } from "../@types/sidesType";

export function useCharacter() {
  const [pos, setPos] = useState({ x: 3, y: 5 });
  const [ side, setSide ] = useState<CharacterSides>('down')

  function moveLeft() {
    setPos((pos) => ({
      x: pos.x - 1,
      y: pos.y,
    }));
    setSide('left')
  }

  function moveRight() {
    setPos((pos) => ({
      x: pos.x + 1,
      y: pos.y,
    }));
    setSide('right')

  }

  function moveUp() {
    setPos((pos) => ({
      x: pos.x ,
      y: pos.y - 1,
    }));
    setSide('up')

  }

  function moveDown() {
    setPos((pos) => ({
      x: pos.x ,
      y: pos.y + 1,
    }));
    setSide('down')

  }

  return {
    x: pos.x,
    y: pos.y,
    moveDown,
    moveUp,
    moveLeft,
    moveRight,
  };
}
