import React from "react";
import "./styles.css";
import { CamposCadastro } from "./SignUpLabels";

export function AreaCadastro() {
    return(
        <div className="cadastro-area"> 
            <h1 className="cadastro-area-titulo">Cadastro</h1>
            <CamposCadastro title={"Nome completo"} placeholder={"Seu nome"} type={"text"} />
            <CamposCadastro title={"Data de nascimento"} type={"date"} />
            <CamposCadastro title={"Usuário"} placeholder={"Usuário"} type={"text"} />
            <CamposCadastro title={"Senha"} placeholder={"Senha"} type={"password"} />
        </div>
    );
}