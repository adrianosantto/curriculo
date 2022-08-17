import {FaLinkedinIn, FaGithub, FaInstagram} from "react-icons/fa";

import "../styles/components/socialnetworks.sass";

const socialNetowrks = [
    {name: "linkedin", icon:<FaLinkedinIn />, link: 'https://www.linkedin.com/in/adriano-silva-dos-santos-programer/'},
    {name: "github", icon:<FaGithub />, link: 'https://github.com/adrianosantto/'},
    {name: "instagram", icon:<FaInstagram />, link: 'https://https://www.instagram.com/adrianosantto/'},
];

const SocialNetworks = () => {
  return (<section id="social-networks"> 
    {socialNetowrks.map((network) => (

        <a href={network.link} className="social-btn" id={network.name} key={network.name}>
            {network.icon} 
        </a>
               

  ))}
  </section>
  );
};

export default SocialNetworks