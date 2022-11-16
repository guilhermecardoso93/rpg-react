import { useState } from "react";
import { CharacterSides } from "../@types/sidesType";

export function useCharacter() {
  const [pos, setPos] = useState({ x: 3, y: 5 });
  const [side, setSide] = useState<CharacterSides>("down");

  function moveLeft() {
    if (canMove(pos.x - 1, pos.y)) {
      setPos((pos) => ({
        x: pos.x - 1,
        y: pos.y,
      }));
    }
    setSide("left");
  }

  function moveRight() {
    if (canMove(pos.x + 1, pos.y)) {
      setPos((pos) => ({
        x: pos.x + 1,
        y: pos.y,
      }));
    }
    setSide("right");
  }

  function moveUp() {
    if (canMove(pos.x, pos.y - 1)) {
      setPos((pos) => ({
        x: pos.x,
        y: pos.y - 1,
      }));
    }
    setSide("up");
  }

  function moveDown() {
    if (canMove(pos.x, pos.y + 1)) {
      setPos((pos) => ({
        x: pos.x,
        y: pos.y + 1,
      }));
    }
    setSide("down");
  }

  function canMove(x: number, y: number) {
    if (x < 0 || y < 0) return false;
    return true;
  }

  return {
    x: pos.x,
    y: pos.y,
    side,
    moveDown,
    moveUp,
    moveLeft,
    moveRight,
  };
}
