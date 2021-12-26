import React, {Component} from "react";
import Livre from "../Livre/Livre"
import FormulaireAjout from "./FormulaireAjout/FormulaireAjout";
import FormulaireModification from "./FormulaireModification/FormulaireModification";
import Alert from "../../components/Alert/Alert";

class Livres extends Component {


    state = {
        livres: [
            {id: 1, titre: 'l\'Algothmique selon H2prog', auteur: "Matthieu GASTON", nbPages: 200},
            {id: 2, titre: 'La France du 19ème', auteur: "Albert PATRICK", nbPages: 500},
            {id: 3, titre: 'Le monde des animaux', auteur: "Marc MERLIN", nbPages: 250},
            {id: 4, titre: 'Le virus d\'Asie', auteur: "Matthieu Gason", nbPages: 120},
        ],
        lastIdLivre: 5,
        idLivreAModifier: 0,
        alertMessage: null,
    }

    handleSuppresionLivre = (id) => {
        const livreIndexTab = this.state.livres.findIndex(l => {
            return l.id === id
        })

        const newLivres = [...this.state.livres];
        newLivres.splice(livreIndexTab, 1);

        this.setState({
                livres: newLivres,
                alertMessage: {
                    message: "Suppression effectuée",
                    type: "danger"
                }
            }
        );
    }

    handleAjoutLivre = (titre, auteur, nbPages) => {

        const newLivre = {
            id: this.state.lastIdLivre++,
            titre: titre,
            auteur: auteur,
            nbPages: nbPages
        }

        const newListeLivres = [...this.state.livres];
        newListeLivres.push(newLivre);

        this.setState(oldstate => {
            return {
                livres: newListeLivres,
                lastIdLivre: oldstate.lastIdLivre + 1,
                alertMessage: {
                    message: "Ajout effectuée",
                    type: "success"
                }
            }
        })

        this.props.fermezAjoutLivre();
    }

    handleModificationLivre = (id, titre, auteur, nbPages) => {
        const caseDuLivre = this.state.livres.findIndex(l => {
            return l.id === id
        });
        const newLivre = {
            id,
            titre,
            auteur,
            nbPages
        }

        const newListe = [...this.state.livres]
        newListe[caseDuLivre] = newLivre;

        this.setState({
            livres: newListe,
            idLivreAModifier: 0,
            alertMessage: {
                message: "Modification effectuée",
                type: "warning"
            }
        })
    }

    render() {
        return (
            <>
                {this.state.alertMessage &&
                <Alert typeAlert={this.state.alertMessage.type}>{this.state.alertMessage.message}</Alert>}
                <table className='table text-center'>
                    <thead className="table-dark">
                    <tr>
                        <th>Titre</th>
                        <th>Auteur</th>
                        <th>Nombre de Pages</th>
                        <th colSpan="2">Actions</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        this.state.livres.map(livre => {

                            if (livre.id !== this.state.idLivreAModifier) {


                                return (
                                    <tr key={livre.id}>
                                        <Livre
                                            titre={livre.titre}
                                            auteur={livre.auteur}
                                            nbPages={livre.nbPages}
                                            suppression={() => this.handleSuppresionLivre(livre.id)}
                                            modification={() => this.setState({idLivreAModifier: livre.id})}
                                        />
                                    </tr>

                                );
                            } else {
                                return (
                                    <tr key={livre.id}>
                                        <FormulaireModification
                                            id={livre.id}
                                            titre={livre.titre}
                                            auteur={livre.auteur}
                                            nbPages={livre.nbPages}
                                            validationModification={this.handleModificationLivre}
                                        />
                                    </tr>
                                )
                            }
                        })
                    }
                    </tbody>
                </table>
                {this.props.ajoutLivre && <FormulaireAjout validation={this.handleAjoutLivre}/>}
            </>
        );
    }
}

export default Livres;
