import { useState } from "react";
import { CharacterSides } from "../@types/sidesType";
import { mapSpots } from "../data/mapSpots";

export function useCharacter() {
  const [pos, setPos] = useState({ x: 3, y: 5 });
  const [side, setSide] = useState<CharacterSides>("down");

  function moveLeft() {
    setPos((pos) => ({
      x: canMove(pos.x - 1, pos.y) ? pos.x - 1 : pos.x,
      y: pos.y,
    }));
    setSide("left");
  }

  function moveRight() {
    setPos((pos) => ({
      x: canMove(pos.x + 1, pos.y) ? pos.x + 1 : pos.x,
      y: pos.y,
    }));
    setSide("right");
  }

  function moveUp() {
    setPos((pos) => ({
      x: pos.x,
      y: canMove(pos.x, pos.y - 1) ? pos.y - 1 : pos.y,
    }));
    setSide("up");
  }

  function moveDown() {
    setPos((pos) => ({
      x: pos.x,
      y: canMove(pos.y + 1, pos.x) ? pos.y + 1 : pos.y,
    }));
    setSide("down");
  }

  function canMove(x: number, y: number) {
    if (x < 0 || y < 0) return false;

    if (mapSpots[y] !== undefined && mapSpots[y][x] !== undefined) {
      if (mapSpots[y][x] === 1) {
        return true;
      }
    }

    return false;
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
