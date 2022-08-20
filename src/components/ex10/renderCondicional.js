// const isLoading = true;

const RenderCondicional = ({ isLoading }) => {
  if (isLoading) {
    return (
      <div>
        <h1>O site carregou</h1>
      </div>
    );
  } else {
    return (
      <div>
        <h1>o site está carregando</h1>
      </div>
    );
  }
};

export default RenderCondicional;
