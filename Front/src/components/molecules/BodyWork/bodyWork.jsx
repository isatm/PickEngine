import './BodyWork.css';
import Carrocería from '/Carrocería.png';

import CustomButton from '../../atoms/Button/CustomButton';
import ButtonImage from '../../atoms/ButtonImage/buttonImage';

export default function BodyWork({ onBack }) {
  return (
    <main className="general3d">
      {/* Botón para volver */}
      <section className="buttonsBodysWorks">
        <CustomButton text="Volver" onClick={onBack} />
      </section>

      {/* Contenido de la sección "Carrocería" */}
      <section className="bodysWorks">
        <ButtonImage image={Carrocería} />
        <ButtonImage image={Carrocería} />
        <ButtonImage image={Carrocería} />
        <ButtonImage image={Carrocería} />
        <ButtonImage image={Carrocería} />
        <ButtonImage image={Carrocería} />
      </section>
    </main>
  );
}
