import "./ConditionS.css";
import InformationPost from "../organism/informationPost";
import HeaderTC from '../molecules/HeaderTC/headerTc';


export default function PrivacyP() {
    return (
        <main className='generalCondition'>
            <div className = 'HeaderCondition'>
            <HeaderTC 
                    title = "Condiciones de servicio" 
                    button1 = "Terminos y condiciones"
                    button2 = "Descargar PDF"
                />
            </div>
            <div className = 'BodyCondition'>
            <InformationPost title = "Condiciones y servicio" text = "Bienvenido a pickEngine, tu plataforma integral dedicada al mundo del automovilismo. Al usar nuestros servicios, aceptas los siguientes Términos y Condiciones. Por favor, léelos cuidadosamente antes de utilizar nuestra plataforma."
                title1 = "Aceptación de los Términos" text1 = "Bienvenido a pickEngine, tu plataforma integral dedicada al automovilismo. Al acceder o utilizar nuestros servicios, aceptas plenamente estos Términos y Condiciones. Si no estás de acuerdo con ellos, no deberás utilizar la plataforma ni sus funcionalidades."
                title2 = "Servicios Ofrecidos por pickEngine" text2 = "pickEngine pone a tu disposición diversas herramientas y funcionalidades, incluyendo una inteligencia artificial especializada para resolver dudas y problemas relacionados con automovilismo, una red social para compartir contenido como fotos, videos y opiniones, herramientas avanzadas de modelado 3D para personalización de vehículos, y un marketplace que permite la compra, venta e intercambio de productos y servicios automovilísticos."
                title3 = "Registro y Responsabilidades del Usuario" text3 = "Para acceder a determinadas funcionalidades de pickEngine, deberás registrarte proporcionando información veraz, completa y actualizada. Es tu responsabilidad mantener la confidencialidad de tus credenciales y notificar cualquier uso no autorizado de tu cuenta."
                title4 = "Uso Aceptable de la Plataforma" text4 = "Los usuarios se comprometen a utilizar pickEngine de manera ética y responsable, evitando cualquier actividad ilegal o que infrinja derechos de terceros. En la red social, está prohibido compartir contenido ofensivo, difamatorio, ilegal o que vulnere los derechos de autor o de privacidad de otras personas."
                title5 = "Propiedad Intelectual" text5 = "Todo el contenido proporcionado por pickEngine, incluyendo software, herramientas y diseños 3D, es propiedad de la plataforma o sus licenciantes. Los usuarios mantienen la propiedad sobre el contenido que suben, pero al hacerlo, otorgan a pickEngine una licencia no exclusiva para su uso en la plataforma según sea necesario para su funcionamiento."
                title6 = "Uso del Marketplace" text6 = "En el marketplace de pickEngine, los usuarios son responsables de cumplir con las leyes locales aplicables a la compraventa de bienes y servicios. pickEngine no se responsabiliza por la calidad, legalidad o seguridad de los productos y servicios ofrecidos por terceros, ni por las transacciones realizadas entre usuarios."
                title7 = "Limitación de Responsabilidad" text7 = "pickEngine no será responsable de daños derivados del uso de la plataforma, fallos en sus servicios o errores en la información proporcionada. La información generada por la inteligencia artificial es orientativa y no sustituye la consulta con un profesional cuando sea necesario."
                title8 = "Privacidad y Protección de Datos" text8 = "pickEngine respeta la privacidad de sus usuarios y gestiona la información personal conforme a su [Política de Privacidad]. Al utilizar la plataforma, consientes el uso y tratamiento de tus datos conforme a dicha política."
                title9 = "Modificaciones de los Términos y Condiciones" text9 = "PickEngine se reserva el derecho de modificar estos Términos y Condiciones en cualquier momento. Los cambios serán notificados oportunamente mediante un aviso en la plataforma. Es tu responsabilidad revisar regularmente los términos actualizados."
                title10 = "Terminación del Servicio" text10 = "PickEngine puede suspender o cancelar tu acceso a la plataforma si incumples estos Términos y Condiciones o participas en actividades perjudiciales para la comunidad. La terminación del servicio no exime de responsabilidades previas." />
            </div>
        </main>
    );
}