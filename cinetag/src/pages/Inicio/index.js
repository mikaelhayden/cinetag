import Banner from "components/Banner";
import Cabecalho from "components/Cabecalho";
import Footer from "components/Footer";
import Titulo from "components/Titulo";
import Card from "components/Card";

function Inicio() {
    return (
        <>
            <Cabecalho />
            <Banner imagem='home' />
            <Titulo>
                <h1>Um lugar para guardadar seus videos e filmes!</h1>
            </Titulo>
            <Card id='1' titulo='gato' capa='https://img.freepik.com/vetores-premium/gato-fofo-sentado-ilustracao-dos-desenhos-animados_403370-84.jpg?w=740' />
            <Footer />
        </>
    )
}

export default Inicio;