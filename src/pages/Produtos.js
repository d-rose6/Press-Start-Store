import "./Produtos.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import CardProduto from "../components/CardProduto";
import botw from "../assets/botw.jpg";
import doom from "../assets/doom.jpg";
import rvillage from "../assets/rvillage.jpg";
import dmc5 from "../assets/dmc5.jpg";
import mgs from "../assets/mgs.jpg";
import tw3 from "../assets/tw3.jpg";


const produtos = [
    {
        id: 1,
        nome: "The Legend of Zelda: Breath of the Wild",
        imagem: botw,
        preco: "R$ 199,90",
    },
    {
        id: 2,
        nome: "Doom Eternal",
        imagem: doom,
        preco: "R$ 199,90",
    },
    {
        id: 3,
        nome: "Resident Evil Village",
        imagem: rvillage,
        preco: "R$ 199,90",
    },
    {
        id: 4,
        nome: "Devil May Cry 5",
        imagem: dmc5,
        preco: "R$ 199,90",
    },
    {
        id: 5,
        nome: "Metal Gear Solid V: The Phantom Pain",
        imagem: mgs,
        preco: "R$ 199,90",
    },
    {
        id: 6,
        nome: "The Witcher 3: Wild Hunt",
        imagem: tw3,
        preco: "R$ 199,90",
    },
];

function Produtos() {
    return (
        <div className="produtos">
            <Header />
            <h1>Produtos</h1>

            <div className="produtos__lista">
                {produtos.map((produto) => (
                    <CardProduto
                    key={produto.id}
                    nome={produto.nome}
                    imagem={produto.imagem}
                    preco={produto.preco}
        />
    ))}
</div>

            <Footer />
        </div>
    );
}

export default Produtos;