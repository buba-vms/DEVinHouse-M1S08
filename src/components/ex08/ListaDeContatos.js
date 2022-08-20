// Crie um componente de lista de contatos. Cada contato deve conter uma props photo, name e description.
// Defina valores padrão para as props que o componente deve receber (dedaultProps)

const contatos = [
  {
    id: 1,
    photo: 'https://picsum.photos/70/70',
    name: 'Pedrinho',
    description: 'blablabala',
  },
  {
    id: 2,
    photo: 'https://picsum.photos/70/70',
    name: 'Joãozinho',
    description: 'blablabala',
  },
  {
    id: 3,
    photo: 'https://picsum.photos/70/70',
    name: 'Tony Tunado',
    description: 'blablabala',
  },
  {
    id: 4,
    photo: 'https://picsum.photos/70/70',
    name: 'Relampago Marquinhos',
    description: 'blablabala',
  },
  {
    id: 5,
    photo: 'https://picsum.photos/70/70',
    name: 'Mariazinha',
    description: 'blablabala',
  },
  { id: 6 },
  { id: 7 },
];

const ContactList = () => {
  return (
    <ul>
      {contatos.map((contato, index) => {
        return <ListItem contato={contato} key={index}></ListItem>;
      })}
    </ul>
  );
};

const ListItem = (props) => {
  const {
    id,
    photo = 'https://picsum.photos/68/68',
    name = 'no name',
    description = 'no description',
  } = props.contato;
  return (
    <div className="list-item">
      <img src={photo} alt="" className="pfp08" />
      <div className="contact-info">
        <h4>{name}</h4>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default ContactList;
