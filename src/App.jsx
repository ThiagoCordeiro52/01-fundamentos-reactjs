import Post from './Post'
import { Header } from './components/Header'

import './global.css'

function App() {
  return (
    <div>
      <Header />
      <Post 
        author="Thiago" content="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet deserunt assumenda, a voluptate maiores repellat? Numquam, hic? Atque cupiditate quo, aperiam quas vel odit harum veniam voluptatibus! Eaque, suscipit rem.
        " 
      />
    </div>
  )
}

export default App

