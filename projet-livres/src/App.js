import React, {Component} from "react";
import TitreH1 from "./components/Titre/TitreH1";
import Bouton from './components/Bouton/Bouton';
import Livres from "./containers/Livres/Livres";

class App extends Component {



    state = {
        ajoutLivre : false
    }

     handleClicAjoutLivre = () => {
        this.setState((oldState, props) => {
            return {ajoutLivre : !oldState.ajoutLivre}
        })
        }


    render() {
        return (

            <div className="container">
                <TitreH1>Page listant les livres</TitreH1>
                <Livres ajoutLivre={this.state.ajoutLivre}
                fermezAjoutLivre={() => this.setState({ajoutLivre : false})}/>

                <Bouton
                    typeButton="success"
                    clic={this.handleClicAjoutLivre}
                    css="w-100">{!this.state.ajoutLivre ? "Ajouter" : "Fermez l'ajout"}</Bouton>
            </div>

        )
    }
}

export default App;