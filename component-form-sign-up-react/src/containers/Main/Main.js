import React, {Component} from "react";
import ContentText from "./ContentText/ContentText";
import './Main.css';
import Form from "./Form/Form";

class Main extends Component {

    render() {
        return (
            <div className='main'>
                <ContentText />
                <Form />
            </div>
        );
    }
}

export default Main;
