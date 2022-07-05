import { ThumbsUp, Trash } from "phosphor-react";
import { Avatar } from "./Avatar";
import styles from "./Comment.module.css";

export function Comment() {
  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} source="https://media-exp1.licdn.com/dms/image/C4E03AQG7uTAAA-OV4g/profile-displayphoto-shrink_400_400/0/1572790001781?e=1662595200&v=beta&t=3nNjSwebnIl-6wucLHJu5wfLCbM4U51qU3NMOIMtg4E" />
      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Guilherme Mertens</strong>
              <time title="11 de maio às 08:13" dateTime="2022-05-11  08:13:00">
                Cerca de 1h atrás
              </time>
            </div>
            <button title="Deletar comentário">
              <Trash size={24} />
            </button>
          </header>
          <p>Muito bom parabéns!!</p>
        </div>
        <footer>
          <button>
            <ThumbsUp />
            Aplaudir <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  );
}
