const Post = (props) => {
  const { pfp, tempo, nome, texto, imagem, shareUrl, numeroDeLikes } = props;

  return (
    <>
      {/*  */}
      <div className="post-header">
        <img src={pfp} alt="foto de perfil" />
        <div className="text-content">
          <h3>{nome}</h3>
          <h5>{tempo}m</h5>
        </div>
      </div>

      <p>{texto}</p>

      <img src={imagem} alt="imagem de post" />

      <div className="image-footer">
        <i></i>
        <span>comments</span>
        <span>
          <a href={shareUrl}>share</a>
        </span>
      </div>

      <p>liked by {numeroDeLikes}</p>
    </>
  );
};

export default Post;
