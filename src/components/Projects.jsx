import './Projects.css';
import Project from './Project';

export default function Projects (){
    const projects = [
        {
          id: "1",
          niche: 'RECRUITMENT',
          dev: 'Web development',
          title: 'JOB-FOR-CASH MARKETPLACE TEMPLATE',
          link: "https://www.google.com/",
          github: "https://www.github.com/v0pe"
        },
        {
          id: "2",
          niche: 'RECRUITMENT',
          dev: 'Web development',
          title: 'JOB-FOR-CASH MARKETPLACE TEMPLATE',
          link: "https://www.google.com/",
          github: "https://www.github.com/v0pe"
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