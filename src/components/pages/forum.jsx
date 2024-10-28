import './Forum.css'
import CustomButton from '../atoms/Button/CustomButton';
import Chat from '../molecules/Chat/Chat';

export default function Forum() {
    return (
        <body className = 'bodyForum'>
            <section className = 'personal'>
            <CustomButton
                text = {"Crear una nueva publicación"}
            />
            <Chat/>
            </section>
            <section className = 'publicaciones'>
            </section>
            <section className = 'etiquetas'>
            </section>
        </body>
    );
}