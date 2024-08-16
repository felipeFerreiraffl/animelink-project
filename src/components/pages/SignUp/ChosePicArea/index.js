import React from "react";
import "./styles.css";
import profilePic from "../../../assets/SignUp/profile-pic-choosen.png"
import { AreaEscolhaImagem } from "./ChoosePic";

export function AreaImagemPerfil() {
    return(
        <div className="imagem-perfil-area">
            <h1 className="imagem-perfil-titulo">Escolha uma foto de perfil</h1>
            <img src={profilePic} alt="Imagem de perfil" />
            <AreaEscolhaImagem />
        </div>
    );
}