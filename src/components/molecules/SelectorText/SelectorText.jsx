import './SelectorText.css' 

export default function SelectorText() {
  return (
    <div className="app-container">
      <aside className="sidebar">
        <nav>
          <ul>
            <li><a href="#introduction">Introducción</a></li>
            <li><a href="#InformationCollected">Información Recopilada</a></li>
            <li><a href="#UseIC">Uso de la Información Recopilada</a></li>
            <li><a href="#Sharedinformation">Compartición de la Información</a></li>
            <li><a href="#DataSecurity">Seguridad de los Datos</a></li>
            <li><a href="#DataRetentionandDeletion">Retención y Eliminación de Datos</a></li>
            <li><a href="#UserRights">Derechos del Usuario</a></li>
            <li><a href="#Cookies">Cookies y Tecnologías de Seguimiento</a></li>
            <li><a href="#Links">Enlaces a Otros Sitios Web</a></li>
            <li><a href="#UpdatesPrivacyP">Actualizaciones de la Política de Privacidad</a></li>
          </ul>
        </nav>
      </aside>

      <main className="contentS">
        <section id="introduction">
          <h2>1. Introducción</h2>
          <p>En este apartado, se proporciona una visión general de la política de privacidad, explicando la importancia de la privacidad de los datos del usuario y cómo esta aplicación se compromete a proteger dicha información. Podrías incluir una breve explicación de las funcionalidades de la aplicación y el objetivo principal de la recopilación de datos, mencionando que incluye IA, modelado 3D y una red social centrada en automovilismo.</p>
        </section>
        <section id="InformationCollected">
          <h2>2. Información Recopilada</h2>
          <p>Este capítulo debería desglosar los tipos de información que recopila la aplicación, incluyendo:
          Datos personales: Nombre, correo electrónico, datos de contacto, y en algunos casos, información de pago.
          Datos de perfil: Preferencias de usuario, historial de actividad y cualquier información que el usuario decida compartir en su perfil.
          Datos generados por IA: Información que la IA utiliza para personalizar la experiencia, como preferencias de automovilismo, historial de uso, etc.
          Datos de modelado 3D: Imágenes y configuraciones que el usuario carga o genera para crear modelos en 3D de vehículos.
          Interacciones en la red social: Publicaciones, comentarios y me gusta en contenido relacionado con automovilismo, junto con interacciones con otros usuarios.</p>
        </section>
        <section id="UseIC">
          <h2>3. Uso de la Información Recopilada</h2>
          <p>Este apartado debe describir cómo la aplicación utiliza la información recopilada para:
          Personalizar la experiencia del usuario.
          Mejorar la precisión de las recomendaciones de IA.
          Crear modelos 3D y ofrecer una experiencia visual ajustada a las preferencias del usuario.
          Facilitar interacciones en la red social y la comunicación con otros usuarios.
          Realizar análisis para mejorar el funcionamiento de la aplicación y ofrecer contenido más relevante.</p>
        </section>
        <section id="Sharedinformation">
          <h2>4. Compartición de la Información</h2>
          <p>Especifica las circunstancias en las que la información podría ser compartida con terceros, por ejemplo:
          Proveedores de servicios: Empresas externas que ayudan con el análisis de datos, almacenamiento en la nube o procesamiento de pagos.
          Socios de automovilismo: Empresas de automovilismo con las que se colabore para ofrecer contenido relevante.
          En redes sociales: Información compartida dentro de la red social de la aplicación será visible para otros usuarios, según la configuración de privacidad del usuario.
          Asegura que se aclare que la aplicación no venderá la información a terceros sin el consentimiento explícito del usuario.</p>
        </section>
        <section id="DataSecurity">
          <h2>5. Seguridad de los Datos</h2>
          <p>Este apartado explica las medidas de seguridad adoptadas para proteger la información de los usuarios, tales como encriptación, protocolos de seguridad y controles de acceso. También puede incluir una explicación de las medidas adoptadas para proteger la integridad de los datos generados por la IA y el modelado 3D.</p>
        </section>
        <section id="DataRetentionandDeletion">
          <h2>6. Retención y Eliminación de Datos</h2>
          <p>Describe el tiempo que la aplicación retiene los datos de los usuarios y cómo se eliminan o anonimiza la información cuando ya no es necesaria. Especifica los derechos del usuario para solicitar la eliminación de su información y el proceso para hacerlo.</p>
        </section>
        <section id="UserRights">
          <h2>7. Derechos del Usuario</h2>
          <p>Explica los derechos de los usuarios con respecto a su información, incluyendo:
          Derecho a acceder a sus datos.
          Derecho a corregir información inexacta.
          Derecho a eliminar sus datos.
          Derecho a oponerse al procesamiento de sus datos, especialmente en lo que respecta a la personalización por IA.
          Derecho a configurar las preferencias de privacidad dentro de la aplicación.</p>
        </section>
        <section id="Cookies">
          <h2>8.  Cookies y Tecnologías de Seguimiento</h2>
          <p>Explica el uso de cookies y otras tecnologías para rastrear el comportamiento del usuario en la aplicación. Este capítulo debe especificar qué tipo de información se recopila a través de cookies y cómo los usuarios pueden gestionar sus preferencias de cookies.</p>
        </section>
        <section id="Links">
          <h2>9. Enlaces a Otros Sitios Web</h2>
          <p>Aclara que la aplicación puede contener enlaces a sitios web externos o contenido de terceros, como noticias o eventos de automovilismo, y que no se hace responsable de las políticas de privacidad de esos sitios.</p>
        </section>
        <section id="UpdatesPrivacyP">
          <h2>10. Actualizaciones de la Política de Privacidad</h2>
          <p>Describe cómo y cuándo se notificarán las actualizaciones de esta política de privacidad. Asegura que el usuario será notificado en caso de cambios significativos en la forma en que se recopila, usa o comparte la información.</p>
        </section>
      </main>
    </div>
  );
}