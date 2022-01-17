import React, {Component} from "react";
import Pays from "./Pays/Pays";
import Titre from "../../components/Titres/TitreH1/TitreH1";
import Bouton from "../../components/Bouton/Bouton";
import axios from "axios";


class PaysManager extends Component {


    state = {
        listePays: [],
        loading: false,
        regionSelection: null,
        numeroPageActuel: 1
    }


    componentDidMount() {
        this.setState({loading: true});
        axios.get("https://restcountries.com/v3.1/all")
            .then(reponse => {
                const listePays = reponse.data.map(pays => {
                    console.log(pays)
                    return {
                        nom: pays.name,
                        nomFrancais: pays.translations.fra.common,
                        capital: pays.capital,
                        region: pays.region,
                        drapeau: pays.flags.svg
                    }
                })
                this.setState({listePays, loading: false});

            })
            .catch(error => {
                console.log(error)
                this.setState({loading: false});
            })
    }


    handleSelectionPaysParRegions = (region) => {
        let param = '';

        if (region === "all") {
            param = region;
        } else {
            param = `region/${region}`;
        }

        this.setState({loading: true});
        axios.get(`https://restcountries.com/v3.1/${param}`)
            .then(reponse => {
                const listePays = reponse.data.map(pays => {
                    console.log(pays)
                    return {
                        nom: pays.name,
                        nomFrancais: pays.translations.fra.common,
                        capital: pays.capital,
                        region: pays.region,
                        drapeau: pays.flags.svg
                    }
                })
                this.setState({listePays, loading: false, regionSelection: region});

            })
            .catch(error => {
                console.log(error)
                this.setState({loading: false});
            })
    }

    render() {

        let pagination = [];
        let listePays = "";
        if (this.state.listePays) {
            let fin = this.state.listePays.length / 10;
            if (this.state.listePays.length%10 !== 0) {
                fin++
            }
            for (let i = 1; i <= fin; i++) {
                pagination.push(
                    <Bouton
                        key={i}
                        typeButton="info"
                        estSelection={this.state.numeroPageActuel === i}
                        clic={() => this.setState({numeroPageActuel: i})}
                    >{i}</Bouton>)
            }


            const debut = (this.state.numeroPageActuel-1)*10;
            const finListe = (this.state.numeroPageActuel-1)*10+10;
            const listeReduite = this.state.listePays.slice(debut, finListe)
             listePays = listeReduite.map(pays => {

                return (<div key={pays.nom} className="col-12 col-md-6">
                    <Pays  {...pays} />
                </div>)
            })

        }

        return (
            <div className='container'>
                <Titre>Liste des pays du monde</Titre>
                <Bouton
                    typeButton='info'
                    clic={() => this.handleSelectionPaysParRegions("all")}
                    estSelection={this.state.regionSelection === "all"}
                >
                    Tous</Bouton>
                <Bouton typeButton='info' clic={() => this.handleSelectionPaysParRegions("Europe")}
                        estSelection={this.state.regionSelection === "Europe"}> Europe</Bouton>
                <Bouton typeButton='info' clic={() => this.handleSelectionPaysParRegions("Africa")}
                        estSelection={this.state.regionSelection === "Africa"}> Afrique</Bouton>
                <Bouton typeButton='info' clic={() => this.handleSelectionPaysParRegions("Asia")}
                        estSelection={this.state.regionSelection === "Asia"}> Asie</Bouton>
                <Bouton typeButton='info' clic={() => this.handleSelectionPaysParRegions("Americas")}
                        estSelection={this.state.regionSelection === "Americas"}> Amériques</Bouton>
                <Bouton typeButton='info' clic={() => this.handleSelectionPaysParRegions("Oceania")}
                        estSelection={this.state.regionSelection === "Oceania"}> Océanie</Bouton>
                Nombre de pays : <span className="badge bg-success text-white">{this.state.listePays.length}</span>
                {
                    this.state.loading ? <div>Chargement...</div> :
                        <div className="row g-0">
                            {listePays}
                        </div>
                }

                <div>{pagination}</div>


            </div>
        );
    }
}

export default PaysManager;
