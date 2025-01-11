import "./Footer.css"; 

const Footer = () => {
  return (
    <div className="footer-container">
      <h2>CONTACT ME</h2>
      <div className="footer-links">
        <a
          href="https://www.linkedin.com/in/agustinnazer/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="/images/linke.png" alt="LinkedIn" />
          <h2>LinkedIn</h2>
        </a>
        <a
          href="https://github.com/AgusNazer"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="/images/github2.jpeg" alt="GitHub" />
          <h2>GitHub</h2>
        </a>
        <a
          href="mailto:Agustin.nazer@hotmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="/images/email2.jpeg" alt="Email" />
          <h2>Email</h2>
        </a>
      </div>
      <p className="footer-copy">
        Developed by Agustin Nazer
        © 2025 All rights reserved.
      </p>
    </div>
  );
};

export default Footer;
