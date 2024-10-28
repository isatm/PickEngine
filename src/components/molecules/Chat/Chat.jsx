import './Chat.css' 
import CustomMessage from '../../atoms/Message/CustomMessage'

export default function Chat() {
  return (
    <main className='generalChat'>
        <div className = 'headerChat'>
            <h1>Mensajes</h1>
        </div>
        <section className = 'chats'>
            <CustomMessage
                Name = {"Jero"}
                Text = {"Buenos días"}
            />
            <CustomMessage
                Name = {"Isa"}
                Text = {"Hey ya tengo tu pedido"}
            />
            <CustomMessage
                Name = {"Juanma"}
                Text = {"Jajajjaja"}
            />
        </section>
        <footer className = 'footerChat'>
            <img src="Report.png" alt="Logo" className="image" />
        </footer>
    </main>
  )
}