import React from "react";

const alert = (props) => {

        const mesClassesCss = `alert alert-${props.typeAlert}`

        return(<div className={mesClassesCss} role="alert">
                {props.children}
        </div>)

};

export default alert;

