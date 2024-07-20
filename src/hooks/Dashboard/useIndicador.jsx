import { useState } from "react";

export const useIndicador = () => {
  const [valor, setValor] = useState("100");


  return { valor, setValor };
};
