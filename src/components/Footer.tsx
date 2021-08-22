import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <h5>
        Dr. Rajendra Prasad Nagar, Navpada, Vile Parle East, Mumbai, Maharashtra
        400047
      </h5>
      <div className="copyrights">
        <p> © Copyright reserved 2021</p>
        <p>
          Designed and Developed by{" "}
          <a
            href="https://linkedin.com/in/darshan-rander"
            target="_blank"
            rel="noreferrer"
          >
            Darshan
          </a>
          ,{" "}
          <a
            href="https://linkedin.com/in/pranav-dani/"
            target="_blank"
            rel="noreferrer"
          >
            Pranav
          </a>
          ,{" "}
          <a
            href="https://linkedin.com/in/dhairya-panjwani"
            target="_blank"
            rel="noreferrer"
          >
            Dhairya
          </a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
