import ResultadoChurrasco from "../components/ResultadoChurrasco";
import bgImage from "../assets/bg-2.jpg";

const Resultado = () => {
    return (
        <div
            className="pageContainer"
            style={{ backgroundImage: `url(${bgImage})` }}
        >
            <h1>Resultado do Churrasco</h1>
            <ResultadoChurrasco />
        </div>
    );
};

export default Resultado;
