import './Chat.css' 
import CustomMessage from '../../atoms/Message/CustomMessage'

export default function Chat() {
  return (
    <main className='generalChat'>
        <header className = 'headerChat'>
            <h1>Chat</h1>
        </header>
        <section className = 'chats'>
            <CustomMessage
                Name = {"Jero"}
                Text = {"Buenos días"}
            />
            <CustomMessage
                Name = {"Jero"}
                Text = {"Buenos días"}
            />
            <CustomMessage
                Name = {"Jero"}
                Text = {"Buenos días"}
            />
        </section>
        <footer className = 'footerChat'>
            <img src="Report.png" alt="Logo" className="image" />
        </footer>
    </main>
  )
}