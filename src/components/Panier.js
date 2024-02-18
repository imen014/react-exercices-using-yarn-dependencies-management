import React from "react";


function Panier({ listPlante   }){
    return (
        <div>
            <p>liste de plantes</p>
            <ul>
                {listPlante.map((plante,index) => (
                    <li key={index}> plante{index} - {plante.price}dt - {plante.owner} - {plante.categorie} </li>
                ))}

            </ul>
        </div>
    )
}

export default Panier;