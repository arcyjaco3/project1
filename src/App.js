import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from './pages/Login'
import Register from './pages/Register'
import About from './pages/About'
import Home from './pages/Home'
import Account from './pages/Account'

function App() {
  return (
    // <div className="App">
    //   <Login />
    // </div>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/about' element={<About />} />
        <Route path='/account' element={<Account />} />
      </Routes>
    </Router>
  );
}

export default App;
