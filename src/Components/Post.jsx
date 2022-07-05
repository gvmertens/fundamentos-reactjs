import styles from "./Post.module.css";

import { Comment } from "./Comment";
import { Avatar } from "./Avatar";

export function Post() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar hasBorder={true} source="https://media-exp1.licdn.com/dms/image/C4E03AQG7uTAAA-OV4g/profile-displayphoto-shrink_400_400/0/1572790001781?e=1662595200&v=beta&t=3nNjSwebnIl-6wucLHJu5wfLCbM4U51qU3NMOIMtg4E" />
          <div className={styles.authorInfo}>
            <strong>Guilherme Mertens</strong>
            <span>Web developer</span>
          </div>
        </div>
        <time dateTime="2022-05-11  08:13:00">Publicado há 1h</time>
      </header>
      <div className={styles.content}>
        <p>Fala Galera</p>
        <p>Acabei de subir mais um projeto</p>
        <p>
          <a href="">github.com/gvmertens</a>
        </p>
        <p>
          <a href="">#novoProjeto #reactjs </a>
        </p>
      </div>
      <form className={styles.commentForm}>
        <strong>Deixe seu feedback:</strong>
        <textarea placeholder="Deixe um comentário" />
        <footer>
          <button type="submit">Publicar</button>
        </footer>
      </form>
      <div className={styles.commentList}>
        <Comment />
        <Comment />
        <Comment />
      </div>
    </article>
  );
}
