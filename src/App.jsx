import { Header } from "./components/Header";

import styles from './App.module.css'

import './global.css'
import { Post } from "./Post";
import { Sidebar } from "./components/Sidebar";

export function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post
            author="Diego Fernandes"
            content= "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis reiciendis dignissimos quaerat ipsum repellat sit aperiam asperiores, cumque ad! Voluptas unde ex doloremque maiores assumenda temporibus animi optio autem quisquam!"
            />

            <Post 
            author="Thiago Oliveira"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis reiciendis dignissimos quaerat ipsum repellat sit aperiam asperiores, cumque ad! Voluptas unde ex doloremque maiores assumenda temporibus animi optio autem quisquam!"
            />

        </main>
      </div>
    </div>
  )
}


