import Banner from "../components/Banner";
import Footer from "../components/Footer";
import Header from "../components/Header";
import "./Home.css";

function Home() {
    return (
        <div className="home">
            <Header />
            <Banner />

            <div className="home_sobre">
                <p>
                Na Press Start Store, cada jogo é uma nova fase. Selecionamos clássicos
                e lançamentos para quem busca desafio, história e diversão, tudo com
                preços justos. Pegue seu controle e bem-vindo ao próximo nível.
                </p>
            </div>
            <Footer />
        </div>
    );
}

export default Home;


