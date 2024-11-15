import './HeaderTc.css' 
import CustomButton from '../../atoms/Button/CustomButton'

export default function HeaderTC() {
  return (
    <main className="HeaderTc">
      <section className = "SelectedOption">
        <h1>Políticas de privacidad</h1>
      </section>
      <section className = "Options">
        <CustomButton text = "Terminos y condiciones" />
        <CustomButton text = "Configuración de privacidad"/>
        <CustomButton text = "Descargar PDF"/>
      </section>
    </main>
  );
}