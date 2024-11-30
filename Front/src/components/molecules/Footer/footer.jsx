import './Footer.css';

const Footer = () => {
    return (
        <footer className='footer'>
            <div className = 'links'>
                <p>&copy; 2024 PickEngine. Todos los derechos reservados.</p>
                <a href="/privacyp" target="_blank" rel="noopener noreferrer">
                    <p>Políticas de Privacidad</p>
                </a>
                <a href="/conditionS" target="_blank" rel="noopener noreferrer">
                    <p>Condiciones de Servicio</p>
                </a>
            </div>
        </footer>
    );
};

export default Footer;