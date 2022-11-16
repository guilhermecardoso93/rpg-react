import { useState } from "react";

export function useCaracter() {
  const [pos, setPos] = useState({ x: 1, y: 1 });

  function moveLeft() {
    setPos((pos) => ({
      x: pos.x - 1,
      y: pos.y,
    }));
  }

  function moveRight() {
    setPos((pos) => ({
      x: pos.x + 1,
      y: pos.y,
    }));
  }

  function moveTop() {
    setPos((pos) => ({
      x: pos.x ,
      y: pos.y - 1,
    }));
  }

  function moveDown() {
    setPos((pos) => ({
      x: pos.x ,
      y: pos.y + 1,
    }));
  }

  return {
    x: pos.x,
    y: pos.y,
  };
}
