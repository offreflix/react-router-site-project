import './style/Header.css';

function Header() {
  return (
    <header className="header">
      <a href="https://github.com/Reflixzinhu">
        <p>Logo Empresa</p>
      </a>

      <ul className="nav">
        <li>
          <a href="#">Início</a>
        </li>
        <li>
          <a href="#">Serviços</a>
        </li>
        <li>
          <a href="#">Sobre</a>
        </li>
        <li>
          <a href="#">Contato</a>
        </li>
        <li>
          <a href="#">Já tem uma conta?</a>
        </li>
      </ul>
    </header>
  );
}

export default Header;
