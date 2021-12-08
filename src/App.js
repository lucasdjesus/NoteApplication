import React from 'react';
import { ListaDeNotas } from './components/ListaDeNotas';

function App() {
  return (              //Para o return, é necessário somente um componente.É necessário incluir tudo dentro de uma section
  <section>
   <form>
    <input type="text" placeholder="Titulo"/>
    <textarea placeholder="Escreva sua nota..."/>
    <button>Cria Nota</button>
   </form>
   <ListaDeNotas/>
   </section>
  );
}
//react -> lib
//React -> ecossistema
export default App;