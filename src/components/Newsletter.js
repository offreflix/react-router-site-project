/* CSS Import */
import './style/Newsletter.css';

function Newsletter(props) {
  return (
    <main className="home">
      <div>
        <div className="newsletterContainer">
          <h1>
            <span>Inscreva-se agora</span> na Newsletter
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>
        <div className="input">
          <input type="text" placeholder="Nome"></input>
          <input type="email" placeholder="Email"></input>
          <button onClick={() => {}}>Enviar</button>
        </div>
      </div>

      <div>
        <img
          src="https://cdn.discordapp.com/attachments/751620046026965022/953278775842463744/image.png"
          alt="girl"
        ></img>
      </div>
    </main>
  );
}

export default Newsletter;
