import './App.css';
import Dashboard from './Components/Dashboard';
import Overview from './Components/Overview';
import { createContext, useState, useEffect, useContext } from 'react';

// Create Theme Context
const ThemeContext = createContext();

// Custom Hook for Using Theme
export const useTheme = () => useContext(ThemeContext);

function App() {
  const [lightMode, setLightMode] = useState(() => {
    return localStorage.getItem("theme") === "light";
  });

  useEffect(() => {
    if (lightMode) {
      document.documentElement.classList.add("light");
      localStorage.setItem("theme", "light");
    } else {
      document.documentElement.classList.remove("light");
      localStorage.setItem("theme", "dark");
    }
  }, [lightMode]);

  return (
    <ThemeContext.Provider value={{ lightMode, setLightMode }}>
      <>
        <Dashboard  />
        <Overview />
      </>
    </ThemeContext.Provider>
  );
}

export default App;
