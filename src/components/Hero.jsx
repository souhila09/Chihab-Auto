import chihab from "../assets/chihab.jpeg";

function Hero() {
  return (
   <section
   id="home"
  className="hero"
  style={{ backgroundImage: 'url(${chihab})'}}
>
      <div className="overlay">
        <h1>Chihab Auto DZ</h1>
        <p>Import Cars From Dubai To Algeria</p>
        <a href="#cars">
        <button>Discover Cars</button>
        </a>
      </div>
    </section>
  );
}

export default Hero;