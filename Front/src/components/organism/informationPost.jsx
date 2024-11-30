import './InformationPost.css'
import Logo from '/Logo.png'; 
import Separator from '../atoms/Separator/separator';
import SelectorText from "../molecules/SelectorText/SelectorText";
import CustomButton from '../atoms/Button/CustomButton'

export default function InformationPost({title, text, title1, text1, title2, text2, title3, text3, title4, text4, title5, text5, title6, text6, title7, text7, title8, text8, title9, text9, title10, text10}) {
  return (
    <main className='generalInformation'>
        <div className = 'privacyHeader'>
            <div className = 'privacyImage'>  
                <a href="/"><img src={Logo} alt="Logo" className="logo" /></a>
            </div>
            <h1>{title}</h1>
            <Separator />
            <p>{text}</p>
        </div>
        <div className = 'privacyText'>
            <SelectorText 
            title1 = {title1} text1 = {text1}
            title2 = {title2} text2 = {text2}
            title3 = {title3} text3 = {text3}
            title4 = {title4} text4 = {text4}
            title5 = {title5} text5 = {text5}
            title6 = {title6} text6 = {text6}
            title7 = {title7} text7 = {text7}
            title8 = {title8} text8 = {text8}
            title9 = {title9} text9 = {text9}
            title10 = {title10} text10 = {text10}
            />
        </div>
        <div className = 'returnToPage'>
          <section className = 'textReturToPage'>
            <p>Si tiene alguna pregunta o necesita asistencia, no dude en contactarnos haciendo clic en el siguiente botón.</p>
          </section>
          <CustomButton text = "Contáctanos"/>
        </div>
    </main>
  );
}