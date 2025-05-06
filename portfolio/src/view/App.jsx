import { useState } from "react";
import { useEffect } from "react";
import "../css/reset.css";
import "../css/bases.css";
import "../css/card.css";
import "../css/sidebar.css";
import "../css/section.css";
import "../css/zoom.css";
import SideMenu from "./sideMenu";

function Header({ }) {
  return (
    <>
      <div className="myProfil">
        <img className="imgLogoSite" src="/src/assets/logo-portfolio.png" alt="logo application" />
        <h1 className="nameAppli">mon portefolio</h1>
      </div>
      <hr className="hrHeader" />
    </>
  );
}

function Acceuil({ }) {
  return (
    <>
      <section id="mon-profil" className="presClass">
        <a href="#mon-profil"><u><h2>#Mon profil</h2></u></a>
        <br />
        <p className="pAcceuil">
          Je m'appelle John et je suis actuellement étudiant en BTS Services Informatiques aux Organisations (SIO), spécialité Solutions Logicielles et Applications Métiers (SLAM), à l’institut F2i de Vincennes. Dans le cadre de ma formation, j’effectue mon alternance au sein d’une startup innovante située à Station F, à Paris.
          <br /><br />
          Passionné par le développement informatique, je m’intéresse particulièrement à la création d’applications web et logicielles. Mon parcours me permet d’allier théorie et pratique, tout en développant mes compétences techniques et mon sens de l’adaptation en environnement professionnel.
<br /><br />
          Ce portfolio présente les projets sur lesquels j’ai travaillé, ainsi que les compétences que j’ai acquises au fil de mon parcours.
          <br /><br />
          Bonne visite !
        </p>
      </section>
    </>
  );
}

function Zomm({ info, index, zoomExit }) {
  return (
    <>
      <div className="background">
        <div className="info">
          <div className="imageInfo">
            <img className="imgInfoSizing" src={info.image} alt={info.titre} />
          </div>
          <div className="globalInfo">
            <div className="infoTitle">
              <h2 className="h2Title">{info.titre}</h2>
            </div>
            <div className="infoDescription">
              <p className="texteInfo">{info.descriptif}</p>
            </div>
          </div>
          <div className="exit">
            <button className="exitButton" onClick={() => zoomExit(index)}>X</button>
          </div>
        </div>
      </div>
    </>
  )
}

//sous forme de cartes 
function Experiences({ info, moreInfo, zoom, zoomExit }) {
  return (
    <>
      <section id="mes-experiences" className="presClass">
        <a href="#mes-experiences"><u><h2>#Mes expériences</h2></u></a>
        <div className="cardContainer">
          {info.map((info, index) => {
            return (
              <>
                <div className="Card" id={"Card" + index} onClick={() => moreInfo(index)}>
                  <div className="imageCard">
                    <img className="imgimg" src={info.image} alt="" />
                  </div>
                  <div className="descExperience">
                    <div className="titleExperience">
                      <h3><u><b>{info.titre}</b></u></h3>
                    </div>
                    <div className="sumaryExperience">
                      <h4>{info.resume}</h4>
                    </div>
                    <div className="dateExperience">
                      <h5>{info.date}</h5>
                    </div>
                  </div>
                </div>
                {info.zoom && (
                  <Zomm info={info} index={index} zoomExit={(e) => zoomExit(e)} />
                )}
              </>
            )
          })}
        </div>
      </section>
    </>
  )
}

function Competences({ info, moreInfo, zoom, zoomExit }) {
  return (
    <>
      <section id="compétences" className="presClass">
        <a href="#compétences"><u><h2>#compétences</h2></u></a>
        <div className="cardContainer">
          {info.map((info, index) => {
            return (
              <>
                <div className="cardComp" id={"Card" + index} onClick={() => moreInfo(index)}>
                  <div className="imageCard">
                    <img className="imgimg" src={info.image} alt="" />
                  </div>
                  <div className="descExperience">
                    <div className="titleExperience">
                      <h3><u><b>{info.titre}</b></u></h3>
                    </div>
                    <div className="sumaryExperience">
                      <h4>{info.resume}</h4>
                    </div>
                    <div className="dateExperience">
                      <h5>{info.date}</h5>
                    </div>
                  </div>
                </div>
                {info.zoom && (
                  <Zomm info={info} index={index} zoomExit={(e) => zoomExit(e)} />
                )}
              </>
            )
          })}
        </div>
      </section>
    </>
  )
}

function MesProjets({ info, moreInfo, zoomExit }) {
  return (
    <>
      <section id="mes-projets" className="presClass">
        <a href="#mes-projets"><u><h2>#Mes Projets</h2></u></a>
        <div className="cardContainer">
          {info.map((info, index) => {
            return (
              <>
                <div className="cardProjet" id={"Card" + index} onClick={() => moreInfo(index)}>
                  <div className="imageCard">
                    <img className="imgimg" src={info.image} alt="" />
                  </div>
                  <div className="descExperience">
                    <div className="titleExperience">
                      <h3><u><b>{info.titre}</b></u></h3>
                    </div>
                    <div className="sumaryExperience">
                      <h4>{info.resume}</h4>
                    </div>
                    <div className="dateExperience">
                      <h5>{info.date}</h5>
                    </div>
                  </div>
                </div>
                {info.zoom && (
                  <Zomm info={info} index={index} zoomExit={(e) => zoomExit(e)} />
                )}
              </>
            )
          })}
        </div>
        <div className="tableau">
          <a href="/src/assets/6- Annexe 6-1 - Tableau de synthèse - Epreuve E4 - BTS SIO 2024.pdf" target="_blank"><button className="buttonTab">cliquez sur ce bouton pour accéder au tableau de synthèse</button></a>
        </div>
      </section>
    </>
  )
}

function VeilleTechnologique({ info, moreInfo, zoomExit }) {
  return (
    <>
      <section id="veille-technologique" className="presClass">
        <a href="#veille-technologique"><u><h2>#Veille technologique</h2></u></a>
        <div className="cardContainer">
          {info.map((info, index) => {
            return (
              <>
                <div className="cardVeille" id={"Card" + index} onClick={() => moreInfo(index)}>
                  <div className="imageCard">
                    <img className="imgimg" src={info.image} alt="" />
                  </div>
                  <div className="descExperience">
                    <div className="titleExperience">
                      <h3><u><b>{info.titre}</b></u></h3>
                    </div>
                    <div className="sumaryExperience">
                      <h4>{info.resume}</h4>
                    </div>
                    <div className="dateExperience">
                      <h5>{info.date}</h5>
                    </div>
                  </div>
                </div>
                {info.zoom && (
                  <Zomm info={info} index={index} zoomExit={(e) => zoomExit(e)} />
                )}
              </>
            )
          })}
        </div>
      </section>
    </>
  )
}

export default function App() {
  const [experiences, setExperiences] = useState([]);
  const [competences, setCompetences] = useState([]);
  const [projet, setProjet] = useState([]);
  const [veille, setVeille] = useState([]);

  const getExperiencesInfo = function () {
    fetch("/infoExperiences.json")
      .then((res) => res.json())
      .then((data) => {
        setExperiences(data);
      });
  };

  const getCompetencesInfo = function () {
    fetch("/infoCompetences.json")
      .then((res) => res.json())
      .then((data) => {
        setCompetences(data);
      });
  };

  const getVeilleInfo = function () {
    fetch("/infoVeille.json")
      .then((res) => res.json())
      .then((data) => {
        setVeille(data);
      });
  };

  const getProjetInfo = function () {
    fetch("/infoProjet.json")
      .then((res) => res.json())
      .then((data) => {
        setProjet(data);
      });
  };

  useEffect(() => {
    getExperiencesInfo();
    getCompetencesInfo();
    getProjetInfo();
    getVeilleInfo();
  }, []);

  const moreInfoExperiences = function (index) {
    [...experiences][index].zoom = true;
    setExperiences([...experiences]);
  }

  const zoomExitExperiences = function (index) {
    [...experiences][index].zoom = false;
    setExperiences([...experiences]);
  }

  const moreInfoCompetences = function (index) {
    [...competences][index].zoom = true;
    setCompetences([...competences]);
  }

  const zoomExitCompetences = function (index) {
    [...competences][index].zoom = false;
    setCompetences([...competences]);
  }

  const moreInfoProjet = function (index) {
    window.open(projet[index].lienProjet);
  }

  const moreInfoVeille = function (index) {
    window.open(veille[index].lienProjet);
  }

  return (
    <>
      <div className="landscape">
        <div className="website">
          <div className="sidebar">
            <div className="headerLandscape" onClick={() => test()}>
              <Header />
            </div>
            <SideMenu />
          </div>
          <div className="portfolio">
            <Acceuil />
            <Experiences info={experiences} moreInfo={(e) => moreInfoExperiences(e)} zoom={(e) => Zomm(e)} zoomExit={(e) => zoomExitExperiences(e)} />
            <Competences info={competences} moreInfo={(e) => moreInfoCompetences(e)} zoom={(e) => Zomm(e)} zoomExit={(e) => zoomExitCompetences(e)} />
            <MesProjets info={projet} moreInfo={(e) => moreInfoProjet(e)} zoom={(e) => Zomm(e)} />
            <VeilleTechnologique info={veille} moreInfo={(e) => moreInfoVeille(e)} zoom={(e) => Zomm(e)} />
          </div>
        </div>
      </div>
    </>
  );
}
