import React from "react";
import "./styles.css";
import { AreaCadastro } from "./SignUpArea";
import { AreaImagemPerfil } from "./ChosePicArea";

export default function Cadastro() {
    return(
        <div className="cadastro-pagina">
            <AreaCadastro />
            <AreaImagemPerfil />
        </div>
    );
}