import './ListaDeProdutos.css';

const produtos = [
  { id: 0, photo: '#', name: 'Óleo Essencial', price: 19.99 },
  { id: 1, photo: '#', name: 'Banana', price: 19.99 },
  { id: 2, photo: '#', name: 'Maça', price: 19.99 },
  { id: 3, photo: '#', name: 'feijão', price: 19.99 },
  { id: 4, photo: '#', name: 'Arroz', price: 19.99 },
  { id: 5, photo: '#', name: 'Bife', price: 19.99 },
];

function ListaDeProdutos() {
  return (
    <div className="product-list">
      {produtos.map((produto) => {
        return (
          <Produto
            photo={produto.img}
            name={produto.name}
            price={produto.price}
            key={produto.id}
          />
        );
      })}
    </div>
  );
}

function Produto({ photo, name, price }) {
  return (
    <div className="product-card">
      <img src={photo} alt={name + 'photo'} className="product-img" />
      <h3>{name}</h3>
      <h5 className="price-tag">{price}</h5>
    </div>
  );
}

export default ListaDeProdutos;
