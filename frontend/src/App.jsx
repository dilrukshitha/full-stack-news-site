import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import PoliticsPage from './pages/PoliticsPage';
import TechPage from './pages/TechPage';
import SportsPage from './pages/SportPage';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/politics" element={<PoliticsPage />} />
        <Route path="/tech" element={<TechPage />} />
        <Route path="/sports" element={<SportsPage />} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
