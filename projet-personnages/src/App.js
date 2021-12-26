import React, {Component} from 'react';
import TitreH1 from './components/Titres/TitreH1/TitreH1';
import Bouton from '../src/components/Bouton/Bouton';
import CreateurPersonnage from "./containers/CréateurPersonnage/CréateurPersonnage";
import ListePersonnages from "./containers/ListePersonnages/ListePersonnages"

class App extends Component {


    state = {
        refresh: false
    }

    handleRefresh = () => {
        this.setState((oldState) => {
            return { refresh : !oldState.refresh}
        })
    }

    render() {
        return (
            <>
                <CreateurPersonnage refresh={this.handleRefresh}/>
                <ListePersonnages refresh={this.state.refresh}/>
            </>

        );
    }
}

export default App;
