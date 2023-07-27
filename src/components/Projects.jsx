import './Projects.css';
import Project from './Project';

export default function Projects (){
    const projects = [
        {
          id: "1",
          niche: 'FASHION',
          dev: 'Frontend development',
          title: 'FASHION CURATOR GLOBAL MEET',
          link: "https://v0pe.github.io/Conference-Capstone-/",
          github: "https://github.com/V0pe/Conference-Capstone-"
        },
        {
          id: "2",
          niche: 'BUSINESS',
          dev: 'Frontend development',
          title: 'GREATMEN LEGEND',
          link: "https://greatmanlegend.com/",
          github: "https://github.com/V0pe/"
        },
        {
          id: "3",
          niche: 'TRANSPORTATION',
          dev: 'Frontend development',
          title: 'ECOBUS TRANSPORTATION',
          link: "https://www.google.com/",
          github: "https://github.com/V0pe/ecobusproject"
        },
        {
          id: "4",
          niche: 'FINANCE',
          dev: 'Frontend development',
          title: 'CRYPTO MARKET PRICE',
          link: "https://cryptosprice.netlify.app/",
          github: "https://github.com/V0pe/crypto-dict"
        },
        {
          id: "5",
          niche: 'EDUCATION',
          dev: 'Frontend development',
          title: 'IDUMOTA BOOKSTORE',
          link: "https://idumota-bookstore.netlify.app/",
          github: "https://github.com/V0pe/Bookstore"
        },
        {
          id: "6",
          niche: 'RECRUITMENT',
          dev: 'Fullback development',
          title: 'JOB FOR CASH WEBSITE',
          link: "https://www.google.com/",
          github: "https://github.com/V0pe/jobforcash_frontend"
        }
      ];
      

    return (
    <section className='home__projects'>
      {projects.map((project, id) => (
              <Project 
              key={id}
              id={project.id}
              niche={project.niche}
              dev={project.dev}
              title={project.title}
              link={project.link}
              github={project.github}
              />
      ))};
    </section>)
}