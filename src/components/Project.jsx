export default function Project ({id, niche, dev, title, link, github}){
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
        <a href={github} target="_blank" rel="noopener noreferrer" className="home__projects__project__link">
            <h1 className="home__projects__project__title is-inview" data-scroll="" data-scroll-direction="horizontal" data-scroll-speed="-8">
                <span className="inline-ovh">
                    <div className="left title__main" style={{transform: "translate(0px, 0px)"}}>
                        <span className="slide-up" data-content={title} aria-hidden="true"></span>
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