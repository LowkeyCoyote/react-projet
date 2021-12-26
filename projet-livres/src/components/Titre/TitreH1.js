import React from "react";
import classes from "./TitreH1.module.css";


const titreH1 = (props) => {
    const monCss =  `${classes.policeTitre} btn btn-primary border border-dark text-white text-center rounded p-2 mt-2 w-100`
    return <h1 className={monCss}>{props.children}</h1>
};



export default titreH1;