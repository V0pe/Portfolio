import { useState } from 'react';
import './Footer.css';

export default function Contact () {
    const [isHovered, setIsHovered] = useState(false);
    const [isCopied, setIsCopied] = useState(false);
 
    const handleHover = () => {
      setIsHovered(true);
    };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };
    
    const handleCopy = () => {
        const textToCopy = document.getElementById('text-to-copy').textContent;
        navigator.clipboard.writeText(textToCopy);
        setIsCopied(true);

    }

    return(
    <section className="home__contact">
        <p className="home__contact__desc"> 
        Got a question, proposal or project or want to work together on something?
         Feel free to reach out. 
         </p>
         <div className="line-wrapper">
            <span className="home__projects__line left" style={{opacity: "1", visibility: "inherit"}}> 
              <span style={{transform: "translate(0px, 0px)"}}></span>
            </span>
        </div>
        <div className="marquee">
            <a href="mailto:vdaderibigbe@gmail.com?subject=Lets%20work%20together!
            &amp;body=Hello%2C%20I%20think%20we%20need%20you%20to%20work%20on%2Fcollaborate%20this%20particular%20product...%20Reach%20out%20as%20soon%20as%20you%20can." 
            className="marquee__wrap">
                <div className="marquee__inner">
                    <span aria-hidden="true" className="inner-span">
                        <span className="slide-up" data-content="LET’S TALK — LET’S COLLABORATE — SAY HELLO — WANNA BE STARTING SOMETHING?" aria-hidden="true"></span>
                        LET’S TALK — LET’S COLLABORATE — SAY HELLO — WANNA BE STARTING SOMETHING?
                        </span><span className="inner-span"> <span className="slide-up" data-content="LET’S TALK — LET’S COLLABORATE — SAY HELLO — WANNA BE STARTING SOMETHING?" aria-hidden="true"></span> 
                        LET’S TALK — LET’S COLLABORATE — SAY HELLO — WANNA BE STARTING SOMETHING?</span> 
                </div>
            </a>
        </div>
        <div className="line-wrapper">
            <span className="home__projects__line right" style={{opacity: "1", visibility: "inherit"}}>
                <span style={{transform: "translate(0px, 0px)"}}></span>
            </span>
        </div> 
        <div className="home__contact__email">
            <button className="email"
            id="text-to-copy"
            onClick={handleCopy}
            onMouseEnter={handleHover}
            onMouseLeave={handleMouseLeave}>
                vdaderibigbe@gmail.com</button>
            <div className={isHovered ? 'display-hover' : 'to-copy'}>
                <span>{isCopied ? 'Copied' : 'Click to Copy'}</span>
            </div>
        </div>
    </section>)
}