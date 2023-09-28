import {Routes, Route, Link} from 'react-router-dom'
import Allplayers from './components/AllPlayers'
import NewPlayerForm from './components/NewPlayerForm'
import Search from './components/Search'
// import SinglePlayer from './components/SinglePlayer'

function App() {

  
  return (
    <>
      <div id="container">
        <div id="navbar">
          <Link to='/'>AllPlayers</Link>
        </div>
        <Search />
        <NewPlayerForm />
      <div id="main-section">
        <Routes>
          <Route path='/' element={<Allplayers />} />
        </Routes>
      </div>
    </div>
    </>
  )
}

export default App
