import './App.css';
import TituloAula from './components/tituloAula';
import TextoAula from './components/textoAula';
import TituloAula2 from './components/TituloAula2';
import ParagrafoSoma from './components/paragrafoSoma';
import CapsLock from './components/capslock';
import CartaoDePresente from './components/cartaodepresente';
// ex03
import UmTitulo from './components/ex03/UmTitulo';
import UmTexto from './components/ex03/UmTexto';
//ex05
import UmaSoma from './components/ex05/umaSoma';
//ex06
import UmBotao from './components/ex06/UmBotao';
//ex07
import Post from './components/ex07/post';
//ex08
import ContactList from './components/ex08/ListaDeContatos';
//ex09
import ListaDeProdutos from './components/ex09/ListaDeProdutos';
//ex10
import RenderCondicional from './components/ex10/renderCondicional';
function App() {
  return (
    <>
      {/* <TituloAula />
      <TituloAula2 />
      <TextoAula />
      <ParagrafoSoma valor1={300} valor2={42} />
      <CapsLock>ola</CapsLock>
      <CapsLock legal="sim e vc?">Ola tudo bem?</CapsLock>
      <CartaoDePresente titulo="ola" corDeFundo="#f4f4f4">
        <div>
          <h5>ola</h5>
          <h6>{<CapsLock>tudo bem</CapsLock>}</h6>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem
            similique at minima veniam corrupti quis, perferendis, autem
            quisquam sint doloribus consectetur alias reiciendis facilis quos
            adipisci corporis dignissimos illum dolor!
          </p>
        </div>
      </CartaoDePresente> */}
      {/* ex 03 */}
      <UmTitulo />
      <UmTexto />
      {/* ex 05 */}
      <UmaSoma valor1={2} valor2={5} />
      {/* ex 06 */}
      <UmBotao title="pão com feijão" corDeFundo="yellow" />
      {/* ex 07 */}
      <Post
        pfp="https://picsum.photos/100/100"
        tempo="5"
        nome="joão joão"
        texto="balablalbalablablbalbalblablalballbalalbalbalbla"
        imagem="https://picsum.photos/200/300"
        shareUrl="https://youtube.com"
        numeroDeLikes="25"
      />
      {/* ex08 */}
      <ContactList />
      {/* ex09 */}
      <ListaDeProdutos />
      {/* ex10 */}
      <RenderCondicional isLoading />
      <RenderCondicional />
    </>
  );
}

export default App;
