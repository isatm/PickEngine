import { useState } from 'react';
import './MisChats.css';

const MisChats = () => {
  const [chats] = useState([
    { id: 1, name: 'Juanma', lastMessage: 'Hola, ¿cómo estás?' },
    { id: 2, name: 'Jerozzzzz', lastMessage: '¿Cuándo podemos hablar?' },
    { id: 3, name: 'Stiven Alejandro', lastMessage: 'Gracias por tu ayuda' },
  ]);
  const [selectedChat, setSelectedChat] = useState(null);
  const [messages, setMessages] = useState({
    1: ['Hola, ¿cómo estás?', 'Bien, ¿y tú?', 'Perfecto, gracias.'],
    2: ['Hola María', 'Podemos hablar mañana.', 'Perfecto, gracias.'],
    3: ['Gracias por tu ayuda', '¡De nada!', '¿Necesitas algo más?'],
  });
  const [showMenu, setShowMenu] = useState(false);
  const [currentMessage, setCurrentMessage] = useState('');
  const [editingIndex, setEditingIndex] = useState(null);
  const [newMessage, setNewMessage] = useState('');

  const enterChat = (chatId) => {
    setSelectedChat(chatId);
  };

  const goBack = () => {
    setSelectedChat(null);
  };

  const toggleMenu = (index) => {
    setShowMenu((prev) => prev === index ? null : index);  // Mostrar/ocultar el menú de opciones
  };

  const editMessage = (index) => {
    setCurrentMessage(messages[selectedChat][index]);  // Establece el mensaje a editar
    setEditingIndex(index);  // Establece el índice de mensaje a editar
    setShowMenu(false);  // Cierra el menú de opciones
  };

  const saveMessage = () => {
    const updatedMessages = [...messages[selectedChat]];  // Copia los mensajes
    updatedMessages[editingIndex] = currentMessage;  // Actualiza el mensaje editado
    setMessages({ ...messages, [selectedChat]: updatedMessages });
    setEditingIndex(null); 
    setCurrentMessage('');  
  };

  const deleteMessage = (index) => {
    const updatedMessages = messages[selectedChat].filter((_, i) => i !== index);  // Elimina el mensaje
    setMessages({ ...messages, [selectedChat]: updatedMessages });
    setShowMenu(false);  // Cierra el menú de opciones
  };

  const sendMessage = () => {
    if (newMessage.trim() !== '') {
      setMessages({
        ...messages,
        [selectedChat]: [...(messages[selectedChat] || []), newMessage],
      });
      setNewMessage('');
    }
  };

  return (
    <div className="chats-page">
      {selectedChat === null ? (
        <div className="chat-list">
          <h1>Mis Chats</h1>
          {chats.map((chat) => (
            <div
              key={chat.id}
              className="chat-item"
              onClick={() => enterChat(chat.id)}
            >
              <h2>{chat.name}</h2>
              <p>{chat.lastMessage}</p>
            </div>
          ))}
        </div>
      ) : (
        <div className="chat-window">
          <h1>Chat con {chats.find((chat) => chat.id === selectedChat)?.name}</h1>

          <div className="messages">
            {messages[selectedChat]?.map((msg, index) => (
              <div key={index} className="message">
                {editingIndex === index ? (
                  <>
                    <input
                      type="text"
                      value={currentMessage}  // Muestra el mensaje en un input cuando se edita
                      onChange={(e) => setCurrentMessage(e.target.value)}  // Actualiza el valor mientras se edita
                    />
                    <button onClick={saveMessage}>Guardar</button>
                  </>
                ) : (
                  <>
                    {msg}
                    <button className='bMenuChats' onClick={() => toggleMenu(index)}>⋮</button> 
                  </>
                )}

                {/* Mostrar el menú de opciones (Editar, Eliminar) si es necesario */}
                {showMenu === index && (
                  <div className="menu-options">
                    <button onClick={() => editMessage(index)}>Editar</button>
                    <button onClick={() => deleteMessage(index)}>Eliminar</button>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="chat-bar">
            <input
              type="text"
              placeholder="Escribe un mensaje..."
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
            />
            <button onClick={sendMessage}>Enviar</button>
          </div>

          <button className="back-button" onClick={goBack}>
            Volver
          </button>
        </div>
      )}
    </div>
  );
};

export default MisChats;