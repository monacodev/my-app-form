import { useState, useEffect, useRef } from 'react';


function FormColor() {

    // création d'une ref qui va suivre la valeur de l'input qui portera le nom de sa ref dans la balise input 
    const nameColor = useRef();
    const colorHexa = useRef();

    const handle1 = (event) => {
        // évite le chargement de la page qui est le comportement normal suite à un submit 
        event.preventDefault();
        // on récupère la valeur en cours de color en hexa 
        const colorH = colorHexa.current.value;
        // on récupère la valeur en cours du nom de la couleur
        const colorName = nameColor.current.value;
        console.log(`name est : ${colorHexa.current.value}`);
        console.log(`name est : ${nameColor.current.value}`);
        alert(` ${colorH}, ${colorName}`);
        // dès qu'on clique sur ok du message d'alerte les input sont réinitilaisés  
        colorHexa.current.value = "";
        nameColor.current.value = "";

    }

    //affichage : la fonction return nous retourne du html mais faut tout écrire en jsx et les variable déclaré en js faut qu'elles soient enveloppées par des {}   
    return (
        <form onSubmit={handle1} method='POST' >

            <input ref={colorHexa} type='text'></input>
            <input ref={nameColor} type='color'></input>
            <button>submit</button>

        </form>
    );



}

export default FormColor;