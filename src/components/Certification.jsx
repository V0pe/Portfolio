import { useState, useEffect } from 'react';
import './Certification.css';

export default function Certificate () {
    const [shouldAnimate, setShouldAnimate] = useState(false);

    useEffect(() => {
      const handleScroll = () => {
        const element = document.getElementById('home_open_source'); // Replace with the ID of your target section
        if (element && window.scrollY + window.innerHeight > element.offsetTop) {
          setShouldAnimate(true);
        }
      };
  
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }, []);

  return (<section className={`home__awards ${shouldAnimate ? 'fade-in' : ''}`} id='home_open_source'>
    <div className="home__awards__left">
        <h2 className="awards__title">
            <span>OPEN SOURCE PROJECTS X </span>
            <br/> <span>RECOGNITION</span>
        </h2>
    <div className="home__awards__table">
        <div className="awards__item" data-fade-in="" style={{opacity: "1", transform: "translate(0px, 0px)"}}>
            Awwwards ⏤ Site of the Day (x2)
        </div>
        <div className="awards__item" data-fade-in="" style={{opacity: "1",transform: "translate(0px, 0px)"}}>
            Awwwards ⏤ Developer Award (x2)
        </div>
        <div className="awards__item" data-fade-in="" style={{opacity: "1",transform: "translate(0px, 0px)"}}>
            Designnominees ⏤ Site of the Day
        </div>
        <div className="awards__item" data-fade-in="" style={{opacity: "1",transform: "translate(0px, 0px)"}}>
            CSSAwards ⏤ Featured of the Day
        </div>
        </div>
        </div>
        <div className='home__awards__right'>
        <div className='home__awards__stack' data-fade-in="" style={{opacity: "1",transform: "translate(0px, 0px)"}}>
        <h2 className="home__content__title">Interests</h2>
        <p className="home__content__desc"> Art Direction, Brand Strategy, Creative Development, E-Commerce, Webflow, 3D/Augmented Reality, Web3 <br/>
          <a href="https://github.com/v0pe" target="_blank" rel="noopener noreferrer">See my Github</a>
        </p>
    </div>
     <div className="home__awards__ice" data-fade-in="" style={{opacity: "1",transform: "translate(0px, 0px)"}}>
        <h2 className="home__content__title">ICEBREAKERS</h2>
        <p className="home__content__desc"> I listen to Electronic and Alt music all the time, you can see what
         I&lsquo;m currently listening to on this <a href="https://music.seyi.dev/" target="_blank" rel="noopener noreferrer">MICROSITE.</a> 
         I like traveling and good food (work with me so I can fund this). &nbsp;
         <button className="contact-scroll">GET IN TOUCH</button> &nbsp; to know more about me. 
         </p>
          </div>
           </div> 
           </section>)
}