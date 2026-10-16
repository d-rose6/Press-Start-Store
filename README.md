Site de uma loja virtual de games, desenvolvido em React como trabalho da faculdade. O objetivo do projeto é praticar a criação de componentes separados e reutilizáveis, organizando melhor o código e reaproveitando partes da interface.

O visual segue um tema neon/gamer, com fundo escuro, brilhos em ciano e rosa e as fontes Orbitron (títulos) e Rajdhani (textos).


Tecnologias utilizadas


React (criado com Create React App)

React Router para a navegação entre páginas

React Icons para os ícones das redes sociais

CSS puro, com um arquivo de estilo para cada componente e página

Google Fonts (Orbitron e Rajdhani)

Páginas

Home (/): banner de boas-vindas e uma seção "Sobre" com um texto de apresentação da loja.

Produtos (/produtos): lista com 6 jogos, cada um exibido em um card com imagem, nome, preço e botão "Comprar".

Contato (/contato): informações de contato fictícias da loja.

Componentes

Header: mostra o nome da loja e o menu de navegação (Início, Produtos e Contato), usando Link do React Router.

Banner: chamada principal da loja, com imagem de fundo em estilo neon, título e subtítulo.

CardProduto: componente reutilizável que recebe nome, imagem e preco por props e exibe um produto com o botão "Comprar". É repetido para cada item da lista com .map().

Footer: rodapé com o nome do aluno, o ano e as redes sociais fictícias (Instagram, X e YouTube) com ícones.
