import { useState, useEffect, useRef } from 'react';
function Form() {

    // des données
    // création d'une ref qui va suivre la valeur de l'input qui portera le nom de sa ref dans la balise input 
    const name = useRef();
    const password = useRef();



    //comportement
    const handle = (event) => {
        event.preventDefault();
        console.log(`name ${name.current.value}`);
        console.log(`password ${password.current.value}`);

        alert(` ${password.current.value} ,  ${name.current.value}`);
        name.current.value = "";
        password.current.value = "";
    }

    // affichage pas optionel avec la fonction return 

    return (
        <form onSubmit={handle} method='POST' >
            <input ref={name} type='text'></input>
            <input ref={password} type='password'></input>
            <button>submit</button>

        </form>

    );



}

export default Form;