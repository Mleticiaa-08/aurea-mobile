import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import SignUp from './components/SignUp';
import Login from './components/Login';
import Funcionamento from './components/Funcionamento';
import Jogo from './components/Jogo';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<HeroSection />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/funcionamento" element={<Funcionamento />} />
          <Route path="/jogo" element={<Jogo />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;