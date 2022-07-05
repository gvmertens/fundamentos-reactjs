import { PencilLine } from 'phosphor-react'
import { Avatar } from './Avatar';

import styles from "./Sidebar.module.css";

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img
        className={styles.cover}
        src="https://images.unsplash.com/photo-1551958219-acbc608c6377?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=40"
      />
      <div className={styles.profile}>
        <Avatar source="https://media-exp1.licdn.com/dms/image/C4E03AQG7uTAAA-OV4g/profile-displayphoto-shrink_400_400/0/1572790001781?e=1662595200&v=beta&t=3nNjSwebnIl-6wucLHJu5wfLCbM4U51qU3NMOIMtg4E" />
        <strong>Guilherme Mertens</strong>
        <span>Web Developer</span>

        <footer>
          <a href="#"><PencilLine size={20}/> Editar seu perfil</a>
        </footer>
      </div>
    </aside>
  );
}
