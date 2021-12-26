import React from "react";
import classes from "./TitreH1.module.css";


const titreH1 = (props) => {

    const monCss = `${classes.policeTitre} btn btn-primary border-dark rounded text-white text-center p-2 m-2 w-100`


    return <h1 className={monCss}>{props.children}</h1>;
};

export default titreH1;

