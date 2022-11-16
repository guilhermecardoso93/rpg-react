import { CharacterSides } from '../../@types/sidesType';
import { Container } from './styles';

type CharacterProps = {
  x: number,
  y: number,
  side: CharacterSides;
}


export function Character({x, y, side}: CharacterProps) {
  const size = 30

  return (
    <Container
      left={x * size}
      top={ y * size}
      size={size}
      side={side}
    >
      
    </Container>
  );
}
