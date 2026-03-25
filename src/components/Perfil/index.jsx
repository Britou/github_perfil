import styles from "./Perfil.module.css";

const Perfil = ({ usuario }) => {
  if (!usuario) return null;

  return (
    <div className={styles.card}>
      <img
        className={styles.avatar}
        src={usuario.avatar_url}
        alt={usuario.login}
      />

      <h2 className={styles.name}>{usuario.name || usuario.login}</h2>

      <p className={styles.username}>@{usuario.login}</p>

      {usuario.bio && <p className={styles.bio}>{usuario.bio}</p>}

      <div className={styles.stats}>
        <span>👥 {usuario.followers}</span>
        <span>📦 {usuario.public_repos}</span>
      </div>

      <div className={styles.links}>
        <a href={usuario.html_url} target="_blank" rel="noreferrer">
          <img
            src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
            alt="GitHub"
          />
        </a>

        <a
          href="https://www.linkedin.com/in/raphael-alves-brito/"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src="https://cdn-icons-png.flaticon.com/512/174/174857.png"
            alt="LinkedIn"
          />
        </a>
      </div>
    </div>
  );
};

export default Perfil;