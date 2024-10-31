import CalculadoraChurrasco from "../components/CalculadoraChurrasco";
import bgImage from "../assets/bg-1.jpg";

const Calculadora = () => {
    return (
        <div
            className="pageContainer"
            style={{ backgroundImage: `url(${bgImage})` }}
        >
            <h1>Calculadora de Churrasco</h1>
            <CalculadoraChurrasco />
        </div>
    );
};

export default Calculadora;
