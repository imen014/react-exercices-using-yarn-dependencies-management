import React, {  useState } from "react";
import Panier from "./Panier";
import CreatePlant from "./CreatePlant";

function AddPlant(){
    const [plantAdded, setPlantAdded] = useState(false)
    const [count, setCount] = useState(0)
    const [plante, setPlante] = useState({})
    const [listPlante, setListPlant] = useState([])


    function planteNmber(){
        setPlantAdded(true);
        setCount(count + 1);
    };

    function creer_liste_plante(){
        setListPlant([ ...listPlante, plante  ]);
    };

   

    return (
        <div>
            <button onClick={planteNmber}>{plantAdded ? "Add a new plant":"add a plant"}</button>
            <p>{count} x plant </p>
            <Panier listPlante={listPlante}  />
            <CreatePlant plante={plante} creer_liste_plante={creer_liste_plante} setPlante={setPlante} /> 

        </div>
    )
}

export default AddPlant;