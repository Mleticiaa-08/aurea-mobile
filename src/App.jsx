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
      <Routes>
        <Route path="/" element={<><Header /><HeroSection /></>}/>
        <Route path="/funcionamento" element={<><Header /><Funcionamento /></>} />
        <Route path="/jogo" element={<><Header /><Jogo /></>} />
        <Route path="/equipamentos" element={<><Header /><Equipamentos /></>} />
        <Route path="/referencias" element={<><Header /><Referencias /></>} />
      </Routes>
    </Router>
  );
}

export default App;
