import React from "react";

const bouton = (props) => {

    const btnCSS = `btn btn-${props.typeButton} ${props.css}`;

    return <button
        style={props.estSelection ? {opacity : 1} : {opacity:   0.5}}
        className={btnCSS}
        onClick={props.clic} >{props.children}</button>;
    }

;

export default bouton;

