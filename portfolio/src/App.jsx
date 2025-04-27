import { useState } from "react";
import { useEffect } from "react";
import "./reset.css";
import "./App.css";
import SideMenu from "./sideMenu";



function Header({}) {
  return (
    <>
      <div className="myProfil">
        <img className="imgLogoSite" src="/src/assets/logo-portfolio.png" alt="logo application" />
        <h1 className="nameAppli">mon portefolio</h1>
      </div>
      <hr className="hrHeader"/>
    </>
  );
}

function Acceuil({}) {
  return (
    <>
      <section id="mon-profil" className="presClass">
        <a href="#mon-profil"><u><h2>#Mon profil</h2></u></a>
        <br />
        <p className="pAcceuil">
          Hello, moi c'est Ilann ! <br /> <br /> Je suis étudiant en BTS SIO option SLAM à
          l'institut F2i de Vincennes, où je me spécialise dans le développement
          d'applications. <br /> En parallèle, je travaille en alternance dans une
          startup à Station F, un environnement dynamique qui me permet de
          mettre en pratique mes compétences et d'en apprendre toujours plus. <br /><br />
          Passionné par le code et les nouvelles technologies, j'aime créer des
          applications fonctionnelles et bien pensées. <br /><br /> Que ce soit du
          développement web, mobile ou logiciel, je suis toujours curieux de
          découvrir de nouvelles choses et d'améliorer mes projets. <br /><br /> Ce portfolio
          est là pour partager mon travail et montrer ce que je sais faire.
          Bonne visite !
        </p>
      </section>
    </>
  );
}

function Zomm ({info, index, zoomExit}) {
  console.log(info);
  return (
    <>
      <div className="background">
        <div className="imgInfo">
          <img className="imgInfoSizing" src={info.image} alt="" />
        </div>
      </div>
    </>
  )
}

//sous forme de cartes 
function Experiences ({info, moreInfo, zoom, zoomExit}) {
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
                    <h3>{info.titre}</h3>
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
                <Zomm info={info} index={index} zoomExit={(e) => zoomExit(e)}/>
              )}
            </>
          )
        })}
      </div>
    </section>
    </>
  )
}

function Competences ({}) {
  return (
    <>
      <section id="compétences" className="presClass">
        <a href="#compétences"><u><h2>#compétences</h2></u></a>
      </section>
    </>
  )
}

function MesProjets ({}) {
  return (
    <>
      <section id="mes-projets" className="presClass">
        <a href="#mes-projets"><u><h2>#Mes Projets</h2></u></a>
      </section>
    </>
  )
}

function VeilleTechnologique ({}) {
  return (
    <>
      <section id="veille-technologique" className="presClass">
        <a href="#veille-technologique"><u><h2>#Veille technologique</h2></u></a>
      </section>
    </>
  )
}

export default function App() {
  const [experiences, setExperiences] = useState([]);

  const getData = function () {
    fetch("/infoExperiences.json")
      .then((res) => res.json())
      .then((data) => {
        setExperiences(data);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  const moreInfo = function (index) {
    [...experiences][index].zoom = true;
    setExperiences([...experiences]);
  }

  const zoomExit = function (index) {
    [...experiences][index].zoom = false;
    setExperiences([...experiences]);
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
            <Acceuil/>
            <Experiences info={experiences} moreInfo={(e) => moreInfo(e)} zoom = {(e) => Zomm(e)} zoomExit={(e) => zoomExit(e)}/>
            <Competences />
            <MesProjets />
            <VeilleTechnologique />
          </div>
        </div>
      </div>
    </>
  );
}
