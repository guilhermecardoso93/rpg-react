import { useState } from "react";

export function useCaracter() {
 const [pos, setPos ] = useState({x: 1, y: 1})

 return { 
  x: pos.x,
  y: pos.y
 }

}