import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div className='App'>
      <Header />
      <Routes>
        <Route
          path='/'
          element={
            <div>{/* insert pages you like to show on front page */}</div>
          }
        />
        {/* <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} /> */}
      </Routes>
      {/* <Footer /> */}
    </div>
  )
}

export default App
