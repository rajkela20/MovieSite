import './css/App.css';
import Favorites from './pages/Favorites';
import Home from "./pages/Home"
import {Routes,Route} from "react-router-dom"
import NavBar from './components/NavBar';
import { MovieProvider } from './contexts/MovieContext';
import ThemeToggle from './components/ThemeToggle';


function App() {
  return (

        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/favorites" element={<Favorites />} />
          </Routes>
        </main>

  );
}



export default App;
