import{AiFillPhone, AiOutlineMail, AiFillEnvironment} from "react-icons/ai";

import '../styles/components/informationconteiner.sass';

const InformationConteiner = () => {
  return (
    <section id="information">
        <div className="info-card">
            <AiFillPhone id="phone-icon"/>
            <div>
                <h3>Telefone</h3>
                <p>11 98654-7598</p>
            </div>
        </div>

        <div className="info-card">
            <AiOutlineMail id="email-icon"/>
            <div>
                <h3>Email</h3>
                <p>adrianosantto@gmail.com</p>
            </div>

        </div>

        <div className="info-card">
            <AiFillEnvironment id="pin-icon"/>
            <div>
                <h3>Localização</h3>
                <p>São Paulo - SP</p>
            </div>

        </div>
    </section>);
};

export default InformationConteiner