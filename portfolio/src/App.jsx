import { useState } from "react";
import "./reset.css";
import "./App.css";

function SideMenu({}) {
  return (
    <>
      <div className="menu">
        <ul className="menuUL">
          <li className="menuLI">
            <a href="#acceuil">
              <div className="liSideBar">
                <img
                  className="liImg"
                  src="https://img.icons8.com/office40/512/square.png"
                  alt=""
                />
                <h2 className="menuOption">Acceuil</h2>
              </div>
            </a>
          </li>
          <li className="menuLI">
            <a href="#mon-profil">
              <div className="liSideBar">
                <img
                  className="liImg"
                  src="https://img.icons8.com/office40/512/square.png  "
                  alt=""
                />
                <h2 className="menuOption">Mon profil</h2>
              </div>
            </a>
          </li>
          <li className="menuLI">
            <a href="#experience-professionel">
              <div className="liSideBar">
                <img
                  className="liImg"
                  src="https://img.icons8.com/office40/512/square.png  "
                  alt=""
                />
                <h2 className="menuOption">Experience professionel</h2>
              </div>
            </a>
          </li>
          <li className="menuLI">
            <a href="#compétences">
              <div className="liSideBar">
                <img
                  className="liImg"
                  src="https://img.icons8.com/office40/512/square.png  "
                  alt=""
                />
                <h2 className="menuOption">Compétences</h2>
              </div>
            </a>
          </li>
          <li className="menuLI">
            <a href="#mes-projets">
              <div className="liSideBar">
                <img
                  className="liImg"
                  src="https://img.icons8.com/office40/512/square.png  "
                  alt=""
                />
                <h2 className="menuOption">Mes projets</h2>
              </div>
            </a>
          </li>
          <li className="menuLI">
            <a href="#veille-technologique">
              <div className="liSideBar">
                <img className="liImg" src="https://img.icons8.com/office40/512/square.png" alt=""/>
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
        <img
          className="imgLogoSite"
          src="https://img.icons8.com/office40/512/square.png"
          alt="logo application"
        />
        <h1 className="nameAppli">mon portefolio</h1>
      </div>
    </>
  );
}

export default function App() {
  return (
    <>
      <div className="website">
        <div className="header">
          <Header />
        </div>
        <div className="sidebar">
          <div className="headerLandscape" onClick={() => test()}>
            <Header />
          </div>
          <SideMenu />
        </div>
        <div className="portfolio">
          <div id="acceuil"></div>
          <div id="mon-profil"></div>
        </div>
      </div>
    </>
  );
}
