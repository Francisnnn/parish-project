import Image from "next/image";

export default function Header() {
  return (
    <header>
      <div className="container header-content">
        <div className="logo-container">
          <div className="logo-group">
            <div className="logo">
              <Image
                src="/img/Archdoicese of Ibadan logo.jpg"
                alt="Archdiocese Logo"
                width={100}
                height={100}
              />
            </div>
            <div className="logo">
              <Image
                src="/img/trinity logo.jpeg"
                alt="Trinity Logo"
                width={100}
                height={100}
              />
            </div>
          </div>
          <div className="title-group">
            <h3>Catholic Archdiocese of Ibadan</h3>
            <h1>Holy Trinity Catholic Church</h1>
            <h2>Aba-Panu, Apata, Ibadan, Nigeria</h2>
          </div>
        </div>
        <button className="menu-toggle" id="menu-toggle">
          <i className="fas fa-bars"></i>
        </button>
      </div>
    </header>
  );
}
