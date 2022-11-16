import { Container } from './styles';

type CharacterProps = {
  x: number,
  y: number,
}


export function Character({x, y}: CharacterProps) {
  const size = 30

  return (
    <Container
      left={x * size}
      top={ y * size}
      size={size}
    >
      
    </Container>
  );
}
