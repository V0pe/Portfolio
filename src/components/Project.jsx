import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import './Projects.css';

export default function Project ({id, niche, dev, title, link, github}){
    const [isAnimated, setIsAnimated] = useState(false);

    useEffect(() => {
      const handleScroll = () => {
        const element = document.querySelector('.scroll-animation');
        const topPosition = element.getBoundingClientRect().top;
        // const bottomPosition = element.getBoundingClientRect().bottom;
        const isVisible = topPosition < window.innerHeight - 20;
  
        setIsAnimated(isVisible);
      };
  
      // Attach the event listener for scrolling
      window.addEventListener('scroll', handleScroll);
  
      // Cleanup the event listener when the component unmounts
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
    
  return (
    <div>
        <span className="home__projects__line left" style={{opacity: "1", visibility: "inherit"}}>
    <span style={{transform: "translate(0px, 0px)"}}></span>
  </span>
    <div className="home__projects__project">
        <div className="home__projects__project__label">
            <div className="label__inner label-1">
                <p> FEATURED <br/> PROJECTS ({id}) </p>
                <p> {niche} / <br/> {dev} </p>
            </div>
        </div> 
        <a href={link} target="_blank" rel="noopener noreferrer" className="home__projects__project__link">
            <h1 className="home__projects__project__title is-inview" data-scroll="" data-scroll-direction="horizontal" data-scroll-speed="-8">
                <span className="inline-ovh scroll-text-container">
                    <div id="scrolling-text" className={`left title__main scroll-animation ${isAnimated ? 'show' : ''}`} style={{transform: "translate(0px, 0px)"}}>
                        <span className="animated-text" data-content={title} aria-hidden="true"></span>
                        {title}
                    </div>
                </span>
            </h1>
        </a>
        <div className="project__link" style={{transform: "translate(0px, 0px)"}}>
            <a href={link} target="_blank" rel="noopener noreferrer" className="c-button">
                <span className="c-link">
                    <span className="c-link__inner">
                        <span> Visit Site
                            <span className="share-icon">
                                <svg width="20" height="20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M13.337 7.845l-7.173 7.173-1.178-1.179 7.172-7.172H5.837V5h9.166v9.167h-1.666V7.845z" fill="#777"></path>
                                </svg>
                            </span>
                        </span>
                    </span>
                </span>
            </a>
            <a href={github} target="_blank" rel="noopener noreferrer" className="c-button">
                <span className="c-link">
                    <span className="c-link__inner">
                        <span> Visit Github
                            <span className="share-icon">
                                <svg width="20" height="20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M13.337 7.845l-7.173 7.173-1.178-1.179 7.172-7.172H5.837V5h9.166v9.167h-1.666V7.845z" fill="#777"></path>
                                </svg>
                            </span>
                        </span>
                    </span>
                </span>
            </a>
        </div>
    </div>
    </div>
  )
}

Project.propTypes = {
    id: PropTypes.number.isRequired,
    niche: PropTypes.string.isRequired,
    dev: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    github: PropTypes.string.isRequired,
  };