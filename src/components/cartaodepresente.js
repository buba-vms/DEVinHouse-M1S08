const CartaoDePresente = ({ children, titulo, corDeFundo }) => {
  return (
    <div style={{ backgroundColor: corDeFundo }}>
      <h3>{titulo}</h3>
      {children}
    </div>
  );
};
export default CartaoDePresente;
