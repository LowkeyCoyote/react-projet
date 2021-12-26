import React, {Component} from "react";
import Bouton from "../../../components/Bouton/Bouton"
import {withFormik} from "formik";
import * as Yup from "yup"

class FormulaireAjout extends Component {


    render() {
        return (
            <>
                <h2 className="text-primary text-center" style={{fontFamily: "Sigmar One"}}>Affichage du formulaire
                    d'ajout</h2>

                <form>
                    <div className="mb-3">
                        <label htmlFor="titre" className="form-label">
                            Titre du livre
                        </label>
                        <input type="text"
                               className="form-control"
                               id="titre"
                               name="titre"
                               value={this.props.values.titre}
                               onChange={this.props.handleChange}
                               onBlur={this.props.handleBlur}
                        />
                        {
                            this.props.touched.titre && this.props.errors.titre
                            && <span style={{color: "red"}}>{this.props.errors.titre}</span>
                        }
                    </div>
                    <div className="mb-3">
                        <label htmlFor="auteur" className="form-label">Auteur</label>
                        <input type="text" className="form-control"
                               id="auteur"
                               name="auteur"
                               value={this.props.values.auteur}
                               onChange={this.props.handleChange}
                               onBlur={this.props.handleBlur}
                        />
                        {
                            this.props.touched.auteur && this.props.errors.auteur &&
                            <span style={{color: "red"}}>{this.props.errors.auteur}</span>
                        }

                    </div>
                    <div className="mb-3">
                        <label htmlFor="nbPages" className="form-label">Nombre de pages</label>
                        <input type="number" className="form-control"
                               id="nbPages"
                               name="nbPages"
                               value={this.props.values.nbPages}
                               onChange={(event) => this.props.setFieldValue('nbPages',parseInt(event.target.value) )}
                               onBlur={this.props.handleBlur}
                        />
                        {
                            this.props.touched.nbPages && this.props.errors.nbPages &&
                            <span style={{color: "red"}}>{this.props.errors.nbPages}</span>
                        }
                    </div>
                    <Bouton typeButton="primary" clic={this.props.handleSubmit}>Valider</Bouton>
                </form>
            </>
        );
    }
}

export default withFormik({
    mapPropsToValues: () => ({
        titre: "",
        auteur: "",
        nbPages: ""
    }),
    validationSchema : Yup.object().shape({
        titre : Yup.string()
            .min(3, 'Le titre doit avoir plus de 3 caractères')
            .max(15, "Le titre doit avoir moins de 15 caractères")
            .required("Le titre est obligatoire"),
        auteur : Yup.string()
            .min(3, "L'auteur doit avoir plus de 3 caractères")
            .required("L'auteur est obligatoire"),
        nbPages : Yup.number()
            .lessThan(1000, "nombre de pages inférieur à 1000")
            .moreThan(50, "Nombre de pages supérieur à 50"),
    }),
    /*
    validate: values => {

        const errors = {};
        if(values.titre.length < 3){
            errors.titre = "Le titre doit avoir plus de 3 caractères";
        }
        if(values.titre.length > 15){
            errors.titre = "Le titre doit avoir moins de 15 caractères";
        }
        if(!values.auteur){
            errors.auteur = "Le champs auteur est obligatoire";
        }




        return errors;


    },

     */
    handleSubmit: (values, {props}) => {
        props.validation(values.titre, values.auteur, values.nbPages);

    }
})(FormulaireAjout);
