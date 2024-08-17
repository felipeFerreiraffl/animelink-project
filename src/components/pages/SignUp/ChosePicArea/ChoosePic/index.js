import React from "react";
import "./styles.css";
import hunterPic from "../../../../assets/Images/ProfilePics/hunter-hunter.png"
import bnhaPic from "../../../../assets//Images/ProfilePics/boku-no-hero.png"
import pokemonPic from "../../../../assets/Images/ProfilePics/pokemon.png";
import esquerda from "../../../../assets/Icons/left-arrow.svg"; 
import direita from "../../../../assets/Icons/right-arrow.svg"; 

export function AreaEscolhaImagem() {
    return(
        <div className="imagem-escolha-area">
            <img src={esquerda} alt="Esquerda" width={40} /> 
            <img src={hunterPic} alt="img1" />
            <img src={bnhaPic} alt="img2" />
            <img src={pokemonPic} alt="img3" />
            <img src={direita} alt="Esquerda" width={40} /> 
        </div>
    );
}