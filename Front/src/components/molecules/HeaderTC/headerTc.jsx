import './HeaderTc.css' 
import CustomButton from '../../atoms/Button/CustomButton'

export default function HeaderTC({title, button1, button2}) {
  return (
    <main className="HeaderTc">
      <section className = "SelectedOption">
        <h1>{title}</h1>
      </section>
      <section className = "Options">
        <CustomButton text = {button1} />
        <CustomButton text = {button2} />
      </section>
    </main>
  );
}