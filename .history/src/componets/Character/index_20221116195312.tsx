import { CharacterSides } from "../../@types/sidesType";
import { Container } from "./styles";

type CharacterProps = {
  x: number;
  y: number;
  side: CharacterSides;
};

export function Character({ x, y, side }: CharacterProps) {
  const size = 30;
  const sides = {
    down: 0,
    left: -30,
    right: -60,
    up: -90,
  };

  return (
    <Container
      size={size}
      left={x * size}
      top={y * size}
      sidePos={sides[side] ?? 0}
    ></Container>
  );
}
