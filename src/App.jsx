import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import Funcionamento from './components/Funcionamento';
import Jogo from './components/Jogo';
import Equipamentos from './components/Equipamentos';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<HeroSection />} />
          <Route path="/funcionamento" element={<Funcionamento />} />
          <Route path="/jogo" element={<Jogo />} />
          <Route path="/Equipamentos" element={<Equipamentos />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;