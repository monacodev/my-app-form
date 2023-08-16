
import './App.css';

import Header from './Header';
import Form from './components/Form';
import FormColor from './components/FormColor';



function App() {

  // affichage
  return (

    <div className="App">
      <Header titre="gestion des events " />

      <FormColor></FormColor>

      <Form></Form>

    </div>
  );
}

export default App;
