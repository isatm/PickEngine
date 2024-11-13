import './InformationPost.css'
import Logo from '/Logo.png'; 
import Separator from '../atoms/Separator/separator';
import SelectorText from "../molecules/SelectorText/SelectorText";

export default function InformationPost({}) {
  return (
    <main className='generalInformation'>
        <div className = 'privacyHeader'>
            <div className = 'privacyImage'>  
                <a href="/"><img src={Logo} alt="Logo" className="logo" /></a>
            </div>
            <h1>Políticas de privacidad</h1>
            <Separator />
        </div>
        <div className = 'privacyText'>
            <SelectorText />
        </div>
    </main>
  );
}