import { useState } from "react";
import "./Contato.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

function Contato() {
    return (
        <div className="contato">
            <Header/>

            <main className="contato__conteudo">
                <h1>
                    Contato
                </h1>

                <div className="contato__div">
                    <p>E-mail: contato@pressstartstore.com</p>
                    <p>WhatsApp: (11) 9999-0000</p>
                    <p>Atendimento: seg a sex, das 9h ás 18h</p>

                </div>
            </main>

            <Footer/>
        </div>
    );
}

export default Contato;
