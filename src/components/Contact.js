import './style/Contact.css';

import { FiPhoneCall, FiMail, FiHome } from 'react-icons/fi';

function Contact() {
  const size = '4rem';
  return (
    <div className="contact">
      <div className="input">
        <input type="text" placeholder="Nome" />
        <input type="email" placeholder="Email" />
        <textarea placeholder="Insira sua Mensagem!" />
        <button onClick={() => {}}>Enviar</button>
      </div>
      <div className="contactInfoContainer">
        <div className="contactInfo">
          <FiMail size={size} />
          <p>
            <span>Email</span>: empresa@gmail.com
          </p>
        </div>
        <div className="contactInfo">
          <FiPhoneCall size={size} />
          <p>
            <span>Telefone</span>: 0800 999 9999
          </p>
        </div>
        <div className="contactInfo">
          <FiHome size={size} />
          <p>
            Algum Lugar <br />
            Alguma Rua <br />
            Alguma Coisa
          </p>
        </div>
      </div>
    </div>
  );
}

export default Contact;
