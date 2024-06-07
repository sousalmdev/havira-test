# Projeto HávFinder

## Visão Geral

Bem-vindo ao projeto HávFinder! Esta é uma aplicação web baseada em React desenvolvida como um teste para a empresa Hávira. A aplicação fornece uma tabela de usuários, um mapa para localizar usuários, um filtro de usuários e um formulário para cadastrar novos usuários. O projeto utiliza várias tecnologias e bibliotecas modernas, incluindo React 18, Chakra UI, Redux, Leaflet, Axios e Docker.

## Índice

- [Primeiros Passos](#primeiros-passos)
- [Scripts Disponíveis](#scripts-disponíveis)
- [Estrutura do Projeto](#estrutura-do-projeto)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Funcionalidades](#funcionalidades)
- [Implantação](#implantação)
- [Saiba Mais](#saiba-mais)

## Primeiros Passos

### Pré-requisitos

Certifique-se de ter o seguinte instalado:

- Node.js (versão 14.x ou superior)
- npm (versão 6.x ou superior)
- Docker (para containerização)

### Instalação

1. Clone o repositório:

```bash
git clone https://github.com/sousalmdev/havira-test.git
cd task-react
```

2. Instale as dependências:

```bash
npm install
```

3. Inicie o servidor de desenvolvimento:

```bash
npm start
```

Abra [http://localhost:3000](http://localhost:3000) para visualizar a aplicação no seu navegador. A página será recarregada quando você fizer alterações. Você também poderá ver quaisquer erros de lint no console.

## Scripts Disponíveis

No diretório do projeto, você pode executar:

### `npm start`

Executa a aplicação no modo de desenvolvimento.\
Abra [http://localhost:3000](http://localhost:3000) para visualizá-la no seu navegador.

A página será recarregada quando você fizer alterações. Você também poderá ver quaisquer erros de lint no console.

### `npm test`

Inicia o executor de testes no modo de observação interativa. Consulte a seção sobre execução de testes para mais informações.

### `npm run build`

Compila a aplicação para produção na pasta `build`. Empacota corretamente o React no modo de produção e otimiza a compilação para o melhor desempenho.

A compilação é minificada e os nomes dos arquivos incluem os hashes. Sua aplicação está pronta para ser implantada!

### `npm run eject`

Nota: esta é uma operação sem volta. Uma vez que você ejetar, não poderá voltar atrás!

Se você não estiver satisfeito com a ferramenta de construção e as escolhas de configuração, você pode ejetar a qualquer momento. Este comando removerá a dependência única de construção do seu projeto.

Em vez disso, copiará todos os arquivos de configuração e as dependências transitivas (webpack, Babel, ESLint, etc.) diretamente para o seu projeto para que você tenha controle total sobre eles. Todos os comandos, exceto ejetar, ainda funcionarão, mas apontarão para os scripts copiados para que você possa modificá-los. A partir deste ponto, você estará por conta própria.

Você nunca precisa usar eject. O conjunto de recursos curados é adequado para pequenos e médios deployments, e você não deve se sentir obrigado a usar esse recurso. No entanto, entendemos que esta ferramenta não seria útil se você não pudesse personalizá-la quando estiver pronto.

## Estrutura do Projeto

```
public/
src/
  components/
    Header.jsx
    Footer.jsx
    HeroSec.jsx
    LoadingScreen.jsx
    UserForm.jsx
    UserTable.jsx
    UserMap.jsx
    homePage.jsx
  img/
    Component 65.png
    havira-espiral.jpg
    logo-havira 1.png
  fonts/
    ClashGrotesk.ttf
  services/
    api/
      api.js
  store.js
  App.js
  index.js
Dockerfile
docker-compose.yml
package.json
README.md

```

## Tecnologias Utilizadas

- **React 18**: Uma biblioteca JavaScript para construir interfaces de usuário.
- **Chakra UI**: Uma biblioteca de componentes simples, modular e acessível para React.
- **Redux**: Um contêiner de estado previsível para aplicativos JavaScript.
- **Leaflet**: Uma biblioteca JavaScript de código aberto para mapas interativos amigáveis para dispositivos móveis.
- **Axios**: Um cliente HTTP baseado em promessas para o navegador e Node.js.
- **Docker**: Um conjunto de produtos de plataforma como serviço que usam virtualização a nível de sistema operacional para entregar software em pacotes chamados contêineres.

## Funcionalidades
- **Tabela de Usuários**: Exibe uma lista de usuários com seus detalhes.
- **Mapa de Usuários**: Mostra as localizações dos usuários em um mapa interativo usando Leaflet.
- **Filtro de Usuários**: Permite filtrar os usuários com base em diferentes critérios.
- **Formulário de Usuários**: Permite a adição de novos usuários à lista.

## Implantação
**Para visualizar o projeto usando Docker**:

## Como Usar a Imagem Docker do Docker Hub

1. Puxe a imagem do Docker Hub:

   ```sh
   docker pull leosousadev/task-react
   ``` 
2. Execute o contêiner Docker:

```
docker run -p 3000:3000 leosousadev/task-react
```
***Abra http://localhost:3000 para visualizar a aplicação.***

Para obter mais informações detalhadas sobre a implantação, consulte a documentação de implantação do Create React App.

Saiba Mais
Você pode aprender mais na documentação do Create React App.

Para aprender React, consulte a documentação do React.

Para configuração avançada, consulte a configuração avançada do Create React App.
