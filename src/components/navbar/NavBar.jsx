import "./navbar.scss";

export default function NavBar() {
  return (
    <div className="navbar">
      {/* Sidebar */}
      <div className="wrapper">
        <span> Dara Dev </span>
        <div className="social">
          <a href="#">
            <img src="/facebook.png" alt="" />
            <img src="/instagram.png" alt="" />
            <img src="/youtube.png" alt="" />
            <img src="/dribbble.png" alt="" />
          </a>
        </div>
      </div>
    </div>
  );
}
