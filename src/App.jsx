import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import { useLocation } from 'react-router-dom';
import Main from './Pages/Main';
import { Route, Routes } from 'react-router-dom';
import RecommendationPages from './Pages/RecommendationPages';
import ExperiencePages from './Pages/ExperiencePages';
import About from './Pages/About';
import Footer from './Components/Footer';


function App() {
  const location = useLocation();
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route element={<Main/>} path="/" />
        <Route element={<RecommendationPages/>} path="recommendation" />
        <Route element={<ExperiencePages/>} path="experience" />
        <Route element={<About/>} path="about" />
      </Routes>
    <Footer/>


    </div>
  );
}

export default App;
