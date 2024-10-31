import { useNavigate, useLocation } from "react-router-dom";
import { Alimento, nomesAlimentos, quantidadePessoas } from "../types";
import styles from "./ResultadoChurrasco.module.css";

type ResultadoChurrasco = {
    pessoas: number;
    alimentosSelecionados: Alimento[];
};

const ResultadoChurrasco = () => {
    const location = useLocation();
    const navegate = useNavigate();

    const state = location.state as ResultadoChurrasco;

    const totalPorAlimento = state.alimentosSelecionados.reduce(
        (acc, alimento) => {
            acc[alimento] =
                (quantidadePessoas[alimento] * state.pessoas) / 1000;
            return acc;
        },
        {} as Record<Alimento, number>
    );

    const reiniciar = () => {
        navegate("/");
    };

    return (
        <div className={styles.container}>
            <h2 className={styles.title}>
                Resultado para {state.pessoas} pessoas:
            </h2>
            {state.alimentosSelecionados.map((alimento) => (
                <p key={alimento} className={styles.resultText}>
                    {nomesAlimentos[alimento]}: {totalPorAlimento[alimento]} kg
                </p>
            ))}
            <button onClick={reiniciar} className={styles.resetButton}>
                Reiniciar
            </button>
        </div>
    );
};

export default ResultadoChurrasco;
