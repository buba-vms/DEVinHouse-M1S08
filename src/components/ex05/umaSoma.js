// Crie um componente de soma que recebe duas propriedades (números),
// e que retorna uma frase: “A soma dos números é __”

const UmaSoma = ({ valor1, valor2 }) => {
  return <p>O soma dos números é {valor1 + valor2}</p>;
};

export default UmaSoma;
