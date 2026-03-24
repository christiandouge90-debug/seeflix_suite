import "./Footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div className="brand">TizeStreaming</div>
        <nav className="footer-nav">
          <Link to="/">Home</Link>
          <Link to="/media">Media</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </nav>
        <div className="copyright">© 2025 Seeflix. All rights reserved.</div>
      </div>
    </footer>
  );
}

export default Footer;
