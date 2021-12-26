import React from "react";
import classes from "./Bouton.module.css"

const bouton = (props) => {



    const btnCss = `btn btn-${props.typeButton} ${props.css}`

    /*
    let typeButton = "";

    if(props.children === "Ajouter"){
        typeButton = "btn btn-success";
    }

    if(props.children === "Modifier"){
        typeButton = "btn btn-warning";
    }

    if(props.children === "Supprimer"){
        typeButton = "btn btn-danger";
    }
     */

    return <button className={btnCss} onClick={props.clic} >{props.children}</button>

    };




export default bouton;

