import React from "react";
import "./styles.css";
import { CamposCadastro } from "./SignUpLabels";
import { BotaoCadastro } from "./SignUpButton";
import fecharCadastro from "../../../assets/Icons/close-button.svg";

export function AreaCadastro() {
    return(
        <div className="cadastro-area">
            <div className="cadastro-icone-fechar-area">
                <img className="cadastro-icone-fechar" src={fecharCadastro} width={24} alt="Fechar" />
            </div> 
            <h1 className="cadastro-area-titulo">Cadastro</h1>
            <CamposCadastro title={"Nome completo"} placeholder={"Seu nome"} type={"text"} />
            <CamposCadastro title={"Data de nascimento"} type={"date"} />
            <CamposCadastro title={"Usuário"} placeholder={"Usuário"} type={"text"} />
            <CamposCadastro title={"Senha"} placeholder={"Senha"} type={"password"} />
            <BotaoCadastro />
        </div>
    );
}