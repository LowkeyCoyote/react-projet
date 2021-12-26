import React, {Component} from "react";
import axios from "axios";
import Titre from "../../components/Titres/TitreH1/TitreH1"
import Personnage from "./Personnage/Personnage"

class ListePersonnages extends Component {

    state = {
        personnages: null,
        loading: false
    }

    loadData = () => {
        this.setState({loading: true})
        axios.get("https://creaperso-379cb-default-rtdb.europe-west1.firebasedatabase.app/perso.json")
            .then(reponse => {
                const personnages = Object.values(reponse.data);
                this.setState({
                    personnages: personnages,
                    loading: false
                })
            })
            .catch(error => {
                console.log(error);
                this.setState({loading: false})
            })
    }

    componentDidMount = () => {
        this.loadData();
    }

    componentDidUpdate = (oldProps, oldState) => {
        if(oldProps.refresh !== this.props.refresh){
            this.loadData();
        }

    }

    render() {
        return (
            <>
                {this.state.loading && <div>Chargement...</div>}
                {!this.state.loading && this.state.personnages && <div className="row g-0">
                    {this.state.personnages.map((perso, indice) => {
                        return (
                            <div key={indice} className="col-6">
                                <Titre>{perso.nom}</Titre>
                                <Personnage {...perso.perso} />
                            </div>)
                    })}
                </div>}
            </>
        );
    }
}

export default ListePersonnages;
