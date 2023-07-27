import './Navbar.css';

export default function Navbar (){
    return (
        <nav className="home__nav" style={{ transform: 'translate(0px, 0px)', opacity: '1' }} >
        <div className="home__nav__left">
            <div className="nav__name">
                <span>
                    Victor
                    <br />
                    Aderibigbe
                </span>
            </div>
            <div className="hide-mobile nav__folio">
                <span>
                    Fullstack developer
                    <br />
                    Folio / 2022 - 2023
                </span>
            </div>
        </div>
        <div className="home__nav__right">
            <div className="hide-desktop nav__folio">
                <span>
                    Fullstack developer
                    <br />
                    Folio / 2022 - 2023
                </span>
            </div>
            <div className="nav__availability"> 
              <span>Available for freelance 
                <br/> 
                work from March 2023
              </span>
            </div>
            <button className="c-button contact-scroll nav__button">
                <span className="c-link">
                    <span className="c-link__inner">
                        <span> contact </span>
                        <span className="c-link__animated"> contact </span>
                     </span>
                </span>
            </button>
        </div>
        </nav>
    )
}