import { Header } from './Components/Header'
import { Sidebar } from './Components/Sidebar'
import { Post } from './Components/Post'
import './global.css'

import styles from './App.module.css'

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: "https://media-exp1.licdn.com/dms/image/C4E03AQG7uTAAA-OV4g/profile-displayphoto-shrink_400_400/0/1572790001781?e=1662595200&v=beta&t=3nNjSwebnIl-6wucLHJu5wfLCbM4U51qU3NMOIMtg4E",
      name: 'Guilherme Mertens',
      role: 'Java Engineer'
    },
    content: ''
  }
]

function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post />
          <Post />
        </main>
      </div>
    </div>
  )
}

export default App
