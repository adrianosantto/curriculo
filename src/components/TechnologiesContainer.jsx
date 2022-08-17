import{
  DiHtml5,
  DiCss3,
  DiJsBadge,
  DiWordpress,
  DiMysql,
  DiReact
} from "react-icons/di";

import '../styles/components/technologiescontainer.sass';

const technologies = [
  {id: "html", name: "HTML5", icon: <DiHtml5 />},
  {id: "css", name: "CSS3", icon: <DiCss3 />},
  {id: "js", name: "JAVAScript", icon: <DiJsBadge />},
  {id: "wp", name: "WordPress", icon: <DiWordpress/>},
  {id: "mysql", name: "MySQL", icon: <DiMysql />},
  {id: "react", name: "React", icon: <DiReact />},
];

function TechnologiesConteiner() {
  return (
    <section className="technologies-container">
      <h2>Tecnologias</h2>
      <div className="technologies-grid">
        {technologies.map((tech) =>(
          <div className="tecnology-card" id={tech.id} key={tech.id}>
            {tech.icon}
            <div classname="technology-info">
              <h3>{tech.name}</h3>
              <p>Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum</p>
            </div>
            
          </div>
        ))}
        
      </div> 
      
    </section>
  );
};
export default TechnologiesConteiner