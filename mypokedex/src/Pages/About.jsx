import "../App.css";
import pokeball from "../assets/pokeball.svg";
import linkedin from "../assets/linkedin.png";
import github from "../assets/github.png";

const About = () => {
  return (
    <div className="about-container">
      <div className="introducing-div">
        <div className="overflow-logo">
          <img className="avatar-logo" src={pokeball} alt="HazeFury" />
        </div>
        <div className="about-me-container">
          <h1>Le Pokédex</h1>
          <h2>Projet Personnel #1</h2>
          <div className="skills">
            <p>React & CSS</p>
            <p>Réalisé en 25h réparti sur 3 jours</p>
            <p>Date de réalisation : 01/05/2023</p>
          </div>
          <p className="first-text">
            Voici mon premier projet personnel, un pokédex inspiré du célèbre
            univers de Pokémon. Le but de ce projet était de mettre en pratique
            mes connaissances sur les API. J&#39;ai donc choisi{" "}
            <a href="https://pokebuildapi.fr/api/v1">l&#39;API Pokebuild</a>{" "}
            pour sa facilité d&#39;utilisation et la qualité des données. Ce
            projet m&#39;as permis de conjuguer l&#39;ensemble des connaissances
            que j&#39;ai acquises jusqu&#39;à maintenant au sein de ma formation
            et, bien qu&#39;il pourrait encore être amélioré, je suis assez
            satisafait du résultat.
          </p>
          <p className="second-text">
            Je m&#39;appelle Marc-Antoine et je suis en formation intensive à la{" "}
            <a href="https://www.wildcodeschool.com/fr-FR">Wild Code School</a>{" "}
            de Lyon. Vous pouvez me retrouver sur mes réseaux ci-dessous.
          </p>
          <div className="logo-container">
            <a
              href="https://www.linkedin.com/in/marc-antoine-berger/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                className="logo-from-about"
                src={linkedin}
                href=""
                alt="Linkedin"
              />
            </a>
            <a
              href="https://github.com/HazeFury"
              target="_blank"
              rel="noreferrer"
            >
              <img className="logo-from-about" src={github} alt="Github" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
