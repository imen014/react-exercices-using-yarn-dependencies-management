import React, { useState } from "react";

function CreatePlant({ plante, creer_liste_plante, setPlante  }){ //listPlante, param
    const [price,setPrice] = useState(0)
    const [owner, setOwner] = useState("")
    const [categorie, setCategorie] = useState("")

    function enterPrice(event){
        setPrice(event.target.value)
    }

    function enterOwner(event){
        setOwner(event.target.value)
    }

    function enterCategorie(event){
        setCategorie(event.target.value)
    }

    function create_plante_object(){
       const new_Plante = {
        price: price,
        owner: owner,
        categorie: categorie
       }

       setPlante(new_Plante)
    }
    //creer_liste_plante(plante)

    return (
        <div>
            <label htmlFor="price"> price: </label>
            <input type="number" id="price" placeholder="enter price" onBlur={enterPrice} />
            <p>price: {price} </p>
            <label htmlFor="owner"> owner: </label>
            <input type="text" id="owner" placeholder="owner..." onChange={enterOwner} /> 
            <p> {owner} </p>
            <label htmlFor="categorie"> categorie: </label>
            <input type="text" id="categorie" placeholder="categorie" onBlur={enterCategorie} />
            <p> {categorie} </p>
            <button onClick={() => {create_plante_object(); creer_liste_plante();}} >Valider</button>
            <p>plante created succefully: {plante.price} - {plante.owner} - {plante.categorie} </p>
        </div>
    )
}

export default CreatePlant;