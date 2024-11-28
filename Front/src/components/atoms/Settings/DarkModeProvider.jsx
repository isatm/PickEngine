import { createContext, useContext, useState } from 'react';

// Crear el contexto para el modo oscuro
const DarkModeContext = createContext();

// El Provider para envolver la aplicación y proporcionar el estado
export const DarkModeProvider = ({ children }) => {
    const [darkMode, setDarkMode] = useState(true); // Estado inicial en modo oscuro

    return (
        <DarkModeContext.Provider value={{ darkMode, setDarkMode }}>
            {children}
        </DarkModeContext.Provider>
    );
};

// Hook para usar el contexto en otros componentes
export const useDarkMode = () => useContext(DarkModeContext);
