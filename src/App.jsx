import { useEffect, useState } from "react";

import Perfil from "./components/Perfil";
import Formulario from "./components/Formulario";
import ReposList from "./components/ReposList";

function App() {
  const [usuario, setUsuario] = useState(null);
  const [usuarioValido, setUsuarioValido] = useState(null);
  const [erro, setErro] = useState(null);
  const [loading, setLoading] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
      if (darkMode) {
        document.body.classList.add("dark");
      } else {
        document.body.classList.remove("dark");
      }
    }, [darkMode]);

  async function buscarUsuario(username) {
    setErro(null);
    setUsuarioValido(null);
    setLoading(true);

    try {
      const response = await fetch(`https://api.github.com/users/${username}`);

      if (!response.ok) {
        throw new Error();
      }

      const data = await response.json();
      setUsuario(data);
      setUsuarioValido(true);
    } catch {
      setErro(
        "Verifique o nome digitado, não encontramos nenhum usuário correspondente"
      );
      setUsuarioValido(false);
    } finally {
      setLoading(false);
    }
  }

  return (
  <div>
      <label className="themeSwitch">
        <input
          type="checkbox"
          checked={darkMode}
          onChange={() => setDarkMode(!darkMode)}
        />
        <span className="slider"></span>
      </label>

    <Formulario onBuscar={buscarUsuario} />

    {loading && <p>Carregando...</p>}

    {erro && <p style={{ color: "red" }}>{erro}</p>}

    {usuarioValido && usuario && (
      <>
        <Perfil usuario={usuario} />
        <ReposList nomeUsuario={usuario.login} />
      </>
    )}
  </div>
  );
}

export default App;