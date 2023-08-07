import {Routes, Route, Link} from 'react-router-dom'
import './App.css'
import Allplayers from './components/AllPlayers'
// import SinglePlayer from './components/SinglePlayer'

function App() {
  

  return (
    <>
      <div id="container">
        <div id="navbar">
          <Link to='/'>AllPlayers</Link>
          {/* <Link to='/SinglePlayer'>SinglePlayer</Link> */}
        </div>
      <div id="main-section">
        <Routes>
          <Route path='/' element={<Allplayers />} />
          {/* <Route path='/layers/:id' element={<SinglePlayer />} /> */}
        </Routes>
      </div>
    </div>
    </>
  )
}

export default App
