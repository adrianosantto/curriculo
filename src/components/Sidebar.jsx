import SocialNetworks from './SocialNetworks';

import Avatar from '../img/eu.jpg';

import '../styles/components/sidebar.sass';
import InformationConteiner from './informationConteiner';

function Sidebar() {
  return ( <aside id="sidebar">

      <img src={Avatar} alt="Adriano Santto"/>
      <p className="title">Front End JR</p>
     <SocialNetworks />
     <InformationConteiner />
      <a href="" className="btn">Download</a>

    </aside>
  );
};

export default Sidebar;