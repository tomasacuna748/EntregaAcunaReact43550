
//import './App.css';
import './styles.css';


import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';

import { Children } from 'react';

function App() {
  return (
    <>
    <NavBar/>
    <section className='bkground min-h-screen'>
    
    <div className="tituloObjeto">

      <ItemListContainer name='Chanchito' price='2600' />
      <ItemListContainer name='Elefante' price='2500' />
      <ItemListContainer name='Lobo' price='2800' />
    </div>
    
    </section>
    

  
    </>
  );
}

export default App;
