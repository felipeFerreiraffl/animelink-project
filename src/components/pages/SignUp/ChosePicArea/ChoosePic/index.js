import React from "react";
import "./styles.css";
import hunterPic from "../../../../assets/Images/ProfilePics/hunter-hunter.png"
import bnhaPic from "../../../../assets/Images/ProfilePics/boku-no-hero.png"
import pokemonPic from "../../../../assets/Images/ProfilePics/pokemon.png"

export function AreaEscolhaImagem() {
    return(
        <div className="imagem-escolha-area">
            <img src={hunterPic} alt="img1" />
            <img src={bnhaPic} alt="img2" />
            <img src={pokemonPic} alt="img3" />
        </div>
    );
}