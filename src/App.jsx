import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import HeaderDark from './components/HeaderDark';
import HeroSection from './components/HeroSection';
import HeroSectionDark from './components/HeroSectionDark';
import Funcionamento from './components/Funcionamento';
import FuncionamentoDark from './components/FuncionamentoDark';
import Jogo from './components/Jogo';
import JogoDark from './components/JogoDark';
import Equipamentos from './components/Equipamentos';
import EquipamentosDark from './components/EquipamentosDark';
import Referencias from './components/Referencias';
import ReferenciasDark from './components/ReferenciasDark';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/dark" element={<><HeaderDark /><HeroSectionDark /></>}/>
        <Route path="/" element={<><Header /><HeroSection /></>}/>
        <Route path="/funcionamento" element={<><Header /><Funcionamento /></>} />
        <Route path="/funcionamentodark" element={<><HeaderDark /><FuncionamentoDark /></>} />
        <Route path="/jogo" element={<><Header /><Jogo /></>} />
        <Route path="/jogodark" element={<><HeaderDark /><JogoDark /></>} />
        <Route path="/equipamentos" element={<><Header /><Equipamentos /></>} />
        <Route path="/equipamentosdark" element={<><HeaderDark /><EquipamentosDark /></>} />
        <Route path="/referencias" element={<><Header /><Referencias /></>} />
        <Route path="/referenciasdark" element={<><HeaderDark /><ReferenciasDark /></>} />
      </Routes>
    </Router>
  );
}

export default App;
