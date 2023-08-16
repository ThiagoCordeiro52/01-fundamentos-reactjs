import { Post } from "./components/Post";
import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";

import styles from "./App.module.css";

import "./global.css";

function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post
            author="Thiago"
            content="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet deserunt assumenda, a voluptate maiores repellat? Numquam, hic? Atque cupiditate quo, aperiam quas vel odit harum veniam voluptatibus! Eaque, suscipit rem.
          "
          />
        </main>
      </div>
    </div>
  );
}

export default App;
