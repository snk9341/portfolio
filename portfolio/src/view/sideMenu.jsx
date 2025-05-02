export default function SideMenu({}) {
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
                  <img className="liImg" src="/src/assets/work.png" alt="" />
                  <h2 className="menuOption">Mes expériences</h2>
                </div>
              </a>
            </li>
            <li className="menuLI">
              <a href="#compétences">
                <div className="liSideBar">
                  <img className="liImg" src="/src/assets/checklist.png" alt="" />
                  <h2 className="menuOption">Mes compétences</h2>
                </div>
              </a>
            </li>
            <li className="menuLI">
              <a href="#mes-projets">
                <div className="liSideBar">
                  <img className="liImg" src="/src/assets/projet.png" alt="" />
                  <h2 className="menuOption">Mes projets</h2>
                </div>
              </a>
            </li>
            <li className="menuLI">
              <a href="#veille-technologique">
                <div className="liSideBar">
                  <img className="liImg" src="/src/assets/veille.png" alt="" />
                  <h2 className="menuOption">Veille technologique</h2>
                </div>
              </a>
            </li>
          </ul>
        </div>
      </>
    );
  }
