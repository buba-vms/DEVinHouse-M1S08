const CapsLock = ({ children, legal }) => {
  const textoEmLetrasMaiusculas = children.toUpperCase();
  return (
    <p>
      {textoEmLetrasMaiusculas} {legal}
    </p>
  );
};

export default CapsLock;
