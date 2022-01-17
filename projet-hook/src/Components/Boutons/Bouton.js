
const Bouton = (props) => {
    return(
        <button className="btn btn-outline-secondary" onClick={props.clic}>{props.children}</button>
    )
}


export default Bouton