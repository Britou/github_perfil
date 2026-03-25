import { useState } from "react";
import styles from "./Formulario.module.css";

const Formulario = ({ onBuscar }) => {
const [username, setUsername] = useState("");

const handleSubmit = (e) => {
    e.preventDefault();

    if (!username.trim()) return;

    onBuscar(username);
};

return (
    <form className={styles.formContainer} onSubmit={handleSubmit}>
    <input
        type="text"
        placeholder="Digite um usuário do GitHub"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
    />

    <button type="submit">Buscar</button>
    </form>
);
};

export default Formulario;