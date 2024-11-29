import './BodyWork.css';
import Auto1 from '/Auto1.png'
import Auto2 from '/Auto2.webp';
import Auto3 from '/Auto3.png';
import Auto4 from '/Auto4.png';
import Auto5 from '/Auto5.png';

import CustomButton from '../../atoms/Button/CustomButton';
import ButtonImage from '../../atoms/ButtonImage/buttonImage';

export default function BodyWork({ onBack, onSelectImage }) {
  return (
    <main className="general3d">
      {/* Botón para volver */}
      <section className="buttonsBodysWorks">
        <CustomButton text="Volver" onClick={onBack} />
      </section>

      {/* Contenido de la sección "Carrocería" */}
      <section className="bodysWorks">
        {/* Cada botón cambia la imagen principal usando el callback pasado */}
        <ButtonImage image={Auto1} onClick={() => onSelectImage(Auto1)} />
        <ButtonImage image={Auto2} onClick={() => onSelectImage(Auto2)} />
        <ButtonImage image={Auto3} onClick={() => onSelectImage(Auto3)} />
        <ButtonImage image={Auto4} onClick={() => onSelectImage(Auto4)} />
        <ButtonImage image={Auto5} onClick={() => onSelectImage(Auto5)} />
      </section>
    </main>
  );
}

