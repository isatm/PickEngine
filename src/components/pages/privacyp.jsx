import "./PrivacyP.css";
import Logo from '/Logo.png'; 
import Separator from '../atoms/Separator/separator';

export default function PrivacyP() {
    return (
        <main className='generalPrivacyP'>
            <div className = 'privacyImage'>  
                <a href="/"><img src={Logo} alt="Logo" className="logo" /></a>
            </div>
            <div className = 'privacyImage'>
                <section className = 'privacyTitle'>
                    <h1>Políticas de privacidad</h1>
                </section>
                <Separator />
                <section className = 'privacyButtoms'>
                    <h1>Políticas de privacidad</h1>
                </section>
            </div>
            <div className = 'privacyText'>
                <p>hola</p>
            </div>
        </main>
    );
}