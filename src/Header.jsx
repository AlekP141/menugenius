import logo from "./logo.svg";
const Header = () => {
  return (
    <header>
      <img className="headerLogo" src={logo} alt="logo" />
      <h1>Menu Genius</h1>
    </header>
  );
};

export default Header;
