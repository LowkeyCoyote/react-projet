import React from "react";
import ImagePerso from "./ImagePerso/ImagePerso";
import CaracPerso from "./CaracPerso/CaracPerso";

const personnage = (props) => {
        return (
            <div className="row g-0">
                <div className="col-6">
                    <ImagePerso
                        numImage={props.image}
                        flecheGauche={props.precedente}
                        flecheDroite={props.suivante}
                    />
                </div>
                <div className="col-6">
                    <CaracPerso
                        nbPointsDisponibles={props.nbPointsDisponibles}
                        force={props.force}
                        agilite={props.agilite}
                        intelligence={props.intelligence}
                        enleverPoint={props.enleverPoint}
                        ajouterPoint={props.ajouterPoint}

                    />
                </div>
            </div>)
    }
;

export default personnage;

