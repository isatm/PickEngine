import './3d.css'

export default function IA() {
    return (
        <div className="container">
            <main>
                <section className="car-section">
                    <div className="likes">
                        <span className="heart-icon">❤️</span>
                        <span className="like-count">1</span>
                    </div>
                    <h2>Porsche</h2>
                    <img src="/car.png" alt="Porsche Car" className="car-image" />
                </section>
                <section className="options">
                    <div className="option">
                        <img src="/spray.png" alt="Paint Icon" />
                        <p>Paint</p>
                    </div>
                    <div className="option">
                        <img src="/carroceria.png" alt="Body Icon" />
                        <p>Body</p>
                    </div>
                    <div className="option">
                        <img src="/s.png" alt="Parts Icon" />
                        <p>Parts</p>
                    </div>
                </section>

                <div className="search-gallery-container">
                    <section className="search-section">
                        <input type="text" placeholder="Please enter" className="search-input" />
                        <span className="search-icon">🔍</span>
                    </section>

                    <section className="gallery-section">
                        {Array(6).fill().map((_, index) => (
                            <div key={index} className="gallery-item">
                                <img src="/car.png" alt="Car Model" className="gallery-car-image" />
                                <span className="heart-icon">❤️</span>
                            </div>
                        ))}
                    </section>
                </div>
            </main>
        </div>
    );
}