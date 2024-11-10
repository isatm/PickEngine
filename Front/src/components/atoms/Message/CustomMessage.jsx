import './CustomMessage.css' 
export default function CustomMessage({Name, Text}) {
  return (
    <main className='generalMessage'>
      <header className='headerMessage'>
        <img src="Avatar.png" alt="Logo" className="image" />
        <h2>{Name}</h2>
      </header>
      <section className='textoMessage'>
        <p>{Text}</p>
      </section>
    </main>
  )
}