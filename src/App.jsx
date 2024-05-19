import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import { useLocation } from 'react-router-dom';
import Main from './Pages/Main';
import RecommendationPages from './Pages/RecommendationPages';
import ExperiencePages from './Pages/ExperiencePages';
import About from './Pages/About';
import Footer from './Components/Footer';
import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';

function App() {
  const [language, setLanguage] = useState(localStorage.getItem('language') || 'EN');

  const toggleLanguage = () => {
    const newLanguage = language === 'EN' ? 'ID' : 'EN';
    setLanguage(newLanguage);
    localStorage.setItem('language', newLanguage);
  };

  const location = useLocation();
  return (
    <div className="App">
      <Header language={language} toggleLanguage={toggleLanguage} />
      <Routes>
        <Route element={<Main language={language} />} path="/" />
        <Route element={<RecommendationPages language={language} />} path="recommendation" />
        <Route element={<ExperiencePages language={language} />} path="experience" />
        <Route element={<About language={language} />} path="about" />
      </Routes>
      <Footer language={language}/>
    </div>
  );
}

export default App;
