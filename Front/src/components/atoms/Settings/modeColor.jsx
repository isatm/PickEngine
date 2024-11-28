import "./modeColor.css";
import { useDarkMode } from "./DarkModeProvider";
import { useEffect } from "react";


export default function ModeColor() {
    const { darkMode, setDarkMode } = useDarkMode(); // Obtener darkMode y setDarkMode desde el contexto

    // Establecer el modo oscuro o claro al cargar la página
    useEffect(() => {
        if (darkMode) {
            document.body.classList.add('dark-mode');
            document.documentElement.classList.add('dark-mode');
        } else {
            document.body.classList.remove('dark-mode');
            document.documentElement.classList.remove('dark-mode');
        }
    }, [darkMode]);  // Se ejecutará cada vez que darkMode cambie

    // Alternar entre modo oscuro y claro
    const toggleDarkMode = () => {
        setDarkMode(prevDarkMode => !prevDarkMode);  // Cambiar el estado de darkMode
    };

    return (
        <div>
            <button onClick={toggleDarkMode}>
                {darkMode ? "Desactivar modo oscuro" : "Activar modo oscuro"}
            </button>
        </div>
    );
}