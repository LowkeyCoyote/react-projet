import React from "react";
import Bouton from "../../components/Bouton/Bouton";

const Livre = (props) => {


        return (
            <>
                <td>{props.titre}</td>
                <td>{props.auteur}</td>
                <td>{props.nbPages}</td>
                <td><Bouton typeButton="warning" clic={props.modification}>Modifier</Bouton></td>
                <td><Bouton typeButton="danger" clic={props.suppression}>Supprimer</Bouton></td>
            </>
        )

    }
;

export default Livre;

