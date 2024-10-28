import './Forum.css'
import CustomButton from '../atoms/Button/CustomButton';
import Chat from '../molecules/Chat/Chat';
import CustomNav from '../atoms/Nav/CustomNav';
import Post from '../organism/post';

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
            <CustomNav
                text = {"Crear una nueva publicación"}
            />
            <Post
                Name = "Jero"
                Text = "Ostias chavales, yo opino que debemos de comprar más bmw para poder dominar el mundo de tal manera que nadie nos detenga."
            />
            </section>
            <section className = 'etiquetas'>
            </section>
        </body>
    );
}