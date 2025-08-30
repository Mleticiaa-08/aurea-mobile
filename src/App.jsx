import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import Funcionamento from './components/Funcionamento';
import Jogo from './components/Jogo';
import Equipamentos from './components/Equipamentos';
import Referencias from './components/Referencias';

function App() {
  return (
    <Router>
    
          <Header />
          <Routes>
            <Route path="/" element={<HeroSection />} />
            <Route path="/funcionamento" element={<Funcionamento />} />
            <Route path="/jogo" element={<Jogo />} />
            <Route path="/Equipamentos" element={<Equipamentos />} />
            <Route path="/Referencias" element={<Referencias />} />
          </Routes>

    
    </Router>
  );
}

export default App;