
import './App.css';
import { useState, useEffect } from 'react';
import Header from './Header';



function App() {

  let [compteur, setCompteur] = useState(0);

  let [mode, setMode] = useState("normal");

  useEffect(() => {
    console.log(`le guerrier est en mode ${mode}`)
  }, [])


  // State j'ai définit un compteur que j'ai initialisé à un et que je peux modifier que par la fonction SetCompteur
  //state( état,fonction pour modifier des données )

  const Header = function Header(props) {


    // les states données 

    // comportement

    // affichage 

    return (

      <h1>{props.titre}</h1>

    );
  }

  //comportement
  const increment = () => {
    console.log("j'ai cliqué");
    //compteur = compteur + 1;
    //console.log(compteur);
    setCompteur(compteur + 1);
  }


  // affichage
  return (

    <div className="App">

      <Header titre="gestion des events " />

      <Header titre="deuxième titre pour le fun qui ne respecte la règle html un seul h1 " />

      <p> mode  {mode}  </p>
      <p> <button onClick={() => setMode("sayan")}>Sayan</button> <button onClick={() => setMode("Mega guerrier")}>super guerrier</button></p>
      <p>compteur : {compteur}</p>

      <button onClick={increment}> incrémenter </button>

    </div>
  );
}

export default App;
