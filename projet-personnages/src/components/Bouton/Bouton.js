import React from "react";

const bouton = (props) => {

    const btnCSS = `btn btn-${props.typeButton} ${props.css}`;

    return <button className={btnCSS} onClick={props.clic} >{props.children}</button>;
    }

;

export default bouton;

