import AboutConteiner from './AboutConteiner';
import ProjectsConteiner from './ProjectsConteiner';
import TechnologiesContainer from './TechnologiesContainer';

import '../styles/components/maincontent.sass';

const MainContent = () => {
  return (
    <main id="main-content">
      <AboutConteiner/>
      <TechnologiesContainer/>
      <ProjectsConteiner/>
    </main>
  );
};

export default MainContent;