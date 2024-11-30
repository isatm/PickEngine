import './SelectorText.css' 

export default function SelectorText({title1, text1, title2, text2, title3, text3, title4, text4, title5, text5, title6, text6, title7, text7, title8, text8, title9, text9, title10, text10}) {
  return (
    <div className="app-container">
      <aside className="sidebar">
        <nav>
          <ul>
            <li><a href="#introduction">{title1}</a></li>
            <li><a href="#InformationCollected">{title2}</a></li>
            <li><a href="#UseIC">{title3}</a></li>
            <li><a href="#Sharedinformation">{title4}</a></li>
            <li><a href="#DataSecurity">{title5}</a></li>
            <li><a href="#DataRetentionandDeletion">{title6}</a></li>
            <li><a href="#UserRights">{title7}</a></li>
            <li><a href="#Cookies">{title8}</a></li>
            <li><a href="#Links">{title9}</a></li>
            <li><a href="#UpdatesPrivacyP">{title10}</a></li>
          </ul>
        </nav>
      </aside>

      <main className="contentS">
        <section id="introduction">
          <h2>1. {title1}</h2>
          <p>{text1}</p>
        </section>
        <section id="InformationCollected">
          <h2>2. {title2}</h2>
          <p>{text2}</p>
        </section>
        <section id="UseIC">
          <h2>3. {title3}</h2>
          <p>{text3}</p>
        </section>
        <section id="Sharedinformation">
          <h2>4. {title4}</h2>
          <p>{text4}</p>
        </section>
        <section id="DataSecurity">
          <h2>5. {title5}</h2>
          <p>{text5}</p>
        </section>
        <section id="DataRetentionandDeletion">
          <h2>6. {title6}</h2>
          <p>{text6}</p>
        </section>
        <section id="UserRights">
          <h2>7. {title7}</h2>
          <p>{text7}</p>
        </section>
        <section id="Cookies">
          <h2>8.  {title8}</h2>
          <p>U{text8}</p>
        </section>
        <section id="Links">
          <h2>9. {title9}</h2>
          <p>{text9}</p>
        </section>
        <section id="UpdatesPrivacyP">
          <h2>10. {title10}</h2>
          <p>{text10}</p>
        </section>
      </main>
    </div>
  );
}