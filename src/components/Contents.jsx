import './Projects.css';

export default function Contents(){
    return (
    <section className="home__content__con">
                <span className="home__projects__line left" style={{opacity: "1", visibility: "inherit"}}>
    <span style={{transform: "translate(0px, 0px)"}}></span>
  </span>
  <div className='home__content'>
        <h2 className="home__content__title">OPEN SOURCE CONTRIBUTIONS</h2>
        <p className="home__content__desc">
            I have worked on some resources and tools; mostly
             for designers and developers like myself, you 
             should checkout&nbsp;
             <a href="https://www.figma.com/community/plugin/943569346291474506/Tints-and-Shades" target="_blank" rel="noopener noreferrer">
                TINTS AND SHADES</a>,
            <a href="https://www.figma.com/community/plugin/949697027067571105/Nigerian-Logos" target="_blank" rel="noopener noreferrer">
                NIGERIAN LOGOS</a>
                &nbsp;and&nbsp;
            <a href="https://www.figma.com/community/plugin/999661511334406897/Bavatars" target="_blank" rel="noopener noreferrer">
                    BAVATARS.</a>
        </p>
    </div>
    <span className="home__projects__line left" style={{opacity: "1", visibility: "inherit"}}>
    <span style={{transform: "translate(0px, 0px)"}}></span>
  </span>
    </section>)
}