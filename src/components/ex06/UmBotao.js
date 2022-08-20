// Crie um componente de botão com as props background (Cor de fundo do botão) e title (Texto do botão).

const UmBotao = ({ corDeFundo, title }) => {
  return <button style={{ backgroundColor: corDeFundo }}>{title}</button>;
};

export default UmBotao;
