import "./CardProduto.css";

function CardProduto({ nome, imagem, preco }) {
    return (
        <div className="card-produto">
            <img src={imagem} alt={nome} className="card-produto__img" />
            <h3 className="card-produto__nome">{nome}</h3>
            <p className="card-produto__preco">{preco}</p>
            <button className="card-produto__botao">Comprar</button>
        </div>
    );
}

export default CardProduto;