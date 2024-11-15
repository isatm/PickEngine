import './InformationPost.css'
import Logo from '/Logo.png'; 
import Separator from '../atoms/Separator/separator';
import SelectorText from "../molecules/SelectorText/SelectorText";
import CustomButton from '../atoms/Button/CustomButton'

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
        <div className = 'returnToPage'>
          <section className = 'textReturToPage'>
            <p>Si tiene alguna pregunta o necesita asistencia, no dude en contactarnos haciendo clic en el siguiente botón.</p>
          </section>
          <img src="Motor.png" alt="Motor" className="imageMotorPrivacyP" />
          <CustomButton text = "Contáctanos"/>
        </div>
    </main>
  );
}