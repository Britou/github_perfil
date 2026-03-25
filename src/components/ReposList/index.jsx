import { useEffect, useState } from "react";
import styles from "./ReposList.module.css";

const ReposList = ({ nomeUsuario }) => {
  const [repos, setRepos] = useState([]);
  const [estaCarregando, setEstaCarregando] = useState(false);
  const [erro, setErro] = useState(null);

  useEffect(() => {
    async function fetchRepos() {
      setEstaCarregando(true);
      setErro(null);

      try {
        const response = await fetch(
          `https://api.github.com/users/${nomeUsuario}/repos`
        );

        if (!response.ok) {
          throw new Error();
        }

        const data = await response.json();
        setRepos(data);
      } catch {
        setErro("Erro ao carregar repositórios");
      } finally {
        setEstaCarregando(false);
      }
    }

    if (nomeUsuario) {
      fetchRepos();
    }
  }, [nomeUsuario]);

  if (estaCarregando) return <p>Carregando repositórios...</p>;

  if (erro) return <p style={{ color: "red" }}>{erro}</p>;

  return (
    <div className={styles.container}>
      <h2>Repositórios</h2>

      <ul className={styles.list}>
        {repos.map(({ id, name, language, html_url }) => (
          <li className={styles.card} key={id}>
            <h3>{name}</h3>

            {language && <p>Linguagem: {language}</p>}

            <a href={html_url} target="_blank" rel="noreferrer">
              Ver no GitHub
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ReposList;