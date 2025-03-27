import { useState } from "react";
import "./reset.css";
import "./App.css";

function SideMenu({}) {
  return (
    <>
      <div className="menu">
        <ul className="menuUL">
          <li className="menuLI">
            <a href="#mon-profil">
              <div className="liSideBar">
                <img className="liImg" src="/src/assets/avatar.png" alt="" />
                <h2 className="menuOption">Mon profil</h2>
              </div>
            </a>
          </li>
          <li className="menuLI">
            <a href="#mes-experiences">
              <div className="liSideBar">
                <img className="liImg" src="https://cdn-icons-png.freepik.com/256/1086/1086511.png?semt=ais_hybrid" alt="" />
                <h2 className="menuOption">Mes experiences</h2>
              </div>
            </a>
          </li>
          <li className="menuLI">
            <a href="#compétences">
              <div className="liSideBar">
                <img className="liImg" src="https://www.freeiconspng.com/thumbs/list-icon/checklist-icon-checklist-icon-png-list-icon-7.png" alt="" />
                <h2 className="menuOption">Compétences</h2>
              </div>
            </a>
          </li>
          <li className="menuLI">
            <a href="#mes-projets">
              <div className="liSideBar">
                <img className="liImg" src="https://cdn-icons-png.flaticon.com/512/1087/1087902.png" alt="" />
                <h2 className="menuOption">Mes projets</h2>
              </div>
            </a>
          </li>
          <li className="menuLI">
            <a href="#veille-technologique">
              <div className="liSideBar">
                <img className="liImg" src="https://cdn-icons-png.flaticon.com/512/85/85595.png" alt="" />
                <h2 className="menuOption">Veille technologique</h2>
              </div>
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}

function Header({}) {
  return (
    <>
      <div className="myProfil">
        <img className="imgLogoSite" src="https://cdn-icons-png.flaticon.com/512/4004/4004113.png" alt="logo application" />
        <h1 className="nameAppli">mon portefolio</h1>
      </div>
    </>
  );
}

function Acceuil({}) {
  return (
    <>
      <div id="mon-profil">
        <a href="#mon-profil"><h2>Mon profil</h2></a>
        <br />
        <p className="pAcceuil">
          Hello, moi c'est Ilann ! Je suis étudiant en BTS SIO option SLAM à
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
      </div>
    </>
  );
}

export default function App() {
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
          </div>
        </div>
      </div>
    </>
  );
}
