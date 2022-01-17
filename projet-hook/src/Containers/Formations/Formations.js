import {useEffect, useRef, useState} from "react";
import Bouton from "../../Components/Boutons/Bouton";
import TitreH1 from "../../Components/TitreH1/TitreH1";
import useLoadData from "../../Hooks/useLoadData";



function Formations(){


    const [formations, loadFormations] = useLoadData();
    const [categorie, setCategorie] = useState("all");


    const estMonte = useRef(false);


    useEffect(() => {
        loadFormations("https://dev.h2prog.com/API_TEST/formations")
    },[])

    useEffect(() => {
        if(estMonte.current) {
            if(categorie !== "all") {
                loadFormations("https://dev.h2prog.com/API_TEST/formations/" + categorie)
            }
            else{
                loadFormations("https://dev.h2prog.com/API_TEST/formations")
            }
        }
    },[categorie])


    useEffect(() => {
        estMonte.current = true;
    },[])



    return(
        <div>
            <TitreH1>Bienvenue sur le site listant les formations H2PROG</TitreH1>
            <Bouton  clic={() => setCategorie("all")}>Toutes</Bouton>
            <Bouton  clic={() => setCategorie("PHP")}>PHP</Bouton>
            <Bouton  clic={() => setCategorie("JavaScript")}>JavaScript</Bouton>
            <Bouton  clic={() => setCategorie("Algorithmique")}>Algorithmique</Bouton>


            <table className="table">
                <thead>
                    <th>numéro</th>
                    <th>libellé</th>
                    <th>description</th>
                    <th>catégorie</th>
                    <th>image</th>
                </thead>

                <tbody>
                {
                    formations && formations.map(formation => {
                        return (
                            <tr key={formation.id}>
                                <td>{formation.id}</td>
                                <td>{formation.libelle}</td>
                                <td>{formation.description}</td>
                                <td>{formation.categorie}</td>
                                <td><img src={formation.image} alt="image" width="100px"/></td>
                            </tr>
                        )
                    })
                }
                </tbody>
            </table>
        </div>
    )
}

export default Formations