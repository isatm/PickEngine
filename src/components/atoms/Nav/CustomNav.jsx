import './CustomNav.css' 

export default function CustomNav({text}) {
  return (
    <main className='generalNav'>
        <input type="text" placeholder={text}></input>
    </main>
  )
}