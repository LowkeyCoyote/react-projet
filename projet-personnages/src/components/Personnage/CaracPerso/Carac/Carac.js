import React from "react";
import classes from "./Carac.module.css";

const carac = (props) => {

    let carre = [];

    for(let i = 0; i < props.nbPoints; i++){
        carre.push(<div key={i} className={classes.points}></div>)
    }


    return (
        <div className="row g-0">
            <div className={["col-1", classes.signe, classes.moins].join(' ')}
                onClick={props.moins}>

            </div>
            <div className="col-4">{props.children}</div> {carre}
            <div className={["col-1", classes.signe, classes.plus].join(' ')}
                onClick={props.plus}>

            </div>
        </div>)

}

export default carac;

