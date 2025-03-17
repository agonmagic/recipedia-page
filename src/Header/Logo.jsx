import logoImg from "../assets/Recipedia Logo.svg";

export default function Logo() {
  return (
    <div className="logo">
      <img src={logoImg} alt="Logo" />
      <a href="#home">
        <h1>Recipedia</h1>
      </a>
    </div>
  );
}
