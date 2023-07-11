import './Hero.css';

export default function Hero (){
    return (
    <section className="home__hero">
      <div className="hero__title">
        <h1 className="mobile" style= {{ transform: "translate(0px, 0px)" }}>
           FULL <br/>
            — STACK <br/>
             DEVELOPER
        </h1>
        <h1 className="desktop hero__title__top overflow" style={{overflow: "unset"}}>
          <div className="hero__title__top" title-overflow="" style={{transform: "translate(0px, 0px)"}}>
            <span className="hero__title__left is-inview" data-scroll="" data-scroll-direction="horizontal" data-scroll-position="top" data-scroll-speed="7" style={{transform: "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)"}}>
              <span className="hero__hover">F</span>
              <span className="hero__hover">U</span>
              <span className="hero__hover">L</span>
              <span className="hero__hover">L</span>
            </span>
          <span className="desktop hero__title__dash" style={{transform: "translate3d(0px, 0px, 0px) scale(1.6006, 1)"}}>
            ——
          </span>
          <span className="hero__title__dash tablet">
            ——
          </span>
          <span className="hero__title__right is-inview" data-scroll="" data-scroll-direction="horizontal" data-scroll-position="top" data-scroll-speed="-7" style={{transform: "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)"}}>
            <span className="hero__hover">S</span>
            <span className="hero__hover">T</span>
            <span className="hero__hover">A</span>
            <span className="hero__hover">C</span>
            <span className="hero__hover">K</span>
          </span>
          </div>
        </h1>
        <span className="hero__title__bottom overflow" style={{overflow: "unset"}}>
          <div className="hero__title__bottom">
            <h1 className="bottom__left desktop" title-overflow="" style={{transform: "translate(0px, 0px)"}}>
              <span className="hero__hover">D</span>
              <span className="hero__hover">E</span>
              <span className="hero__hover">V</span>
              <span className="hero__hover">E</span>
              <span className="hero__hover">L</span>
              <span className="hero__hover">O</span>
              <span className="hero__hover">P</span>
              <span className="hero__hover">E</span>
              <span className="hero__hover">R</span>
            </h1> 
          <div className="bottom__right" style={{opacity: "1", transform: "translate(0px, 0px)"}}>
            <p className="hero__paragraph">
              <span className="first-word">About</span>
              &nbsp; I am a developer that hail from Nigeria focused on creating interactive
              digital experiences on the web, working with brands and 
              different products niche such as <span>Disney,</span><span>Fashion, </span>
              <span>Entertainment,</span> and <span>Sport</span> amongst others to achieve this.
            </p>
            <div className="hero__scroll">
              <p>Scroll down</p>
            <div className="c-infinite">
              <span className="c-link">
                <span className="c-link__inner">
                   <span> 
                    <svg width="20" height="21" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.833 13.977l4.47-4.47 1.179 1.178L10 17.167l-6.482-6.482 1.179-1.178 4.47 4.47V3.833h1.666v10.144z" fill="#777">
                      </path>
                    </svg> 
                    </span> 
                    <span className="c-link__animated">
                       <svg width="20" height="21" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.833 13.977l4.47-4.47 1.179 1.178L10 17.167l-6.482-6.482 1.179-1.178 4.47 4.47V3.833h1.666v10.144z" fill="#777"></path>
                        </svg>
                        </span>
                        </span> 
                        </span> 
                 </div>
              </div>
              </div>
              </div> 
              </span>
      </div>
    </section>)
}