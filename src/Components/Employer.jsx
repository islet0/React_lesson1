import "./style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter, faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons"; // Corrected import

export const Employer = () => {
  return (
    <div className="people">
      <div className="person">
        <img src="/person.png" alt="one" />
        <h1>Tom Cruise</h1>
        <p>Founder & Chairman</p>
        <div className="empl">
          <FontAwesomeIcon icon={faTwitter} />
          <FontAwesomeIcon icon={faInstagram} />
          <FontAwesomeIcon icon={faLinkedin} />
        </div>
      </div>
      <div className="person">
        <img src="/person2.png" alt="two" />
        <h1>Emma Watson</h1>
        <p>Managing Director</p>
        <div className="empl">
          <FontAwesomeIcon icon={faTwitter} />
          <FontAwesomeIcon icon={faInstagram} />
          <FontAwesomeIcon icon={faLinkedin} />
        </div>
      </div >
      <div className="person">
        <img src="/person3.png" alt="three" />
        <h1>Will Smith</h1>
        <p>Product Designer</p>
        <div className="empl">
          <FontAwesomeIcon icon={faTwitter} />
          <FontAwesomeIcon icon={faInstagram} />
          <FontAwesomeIcon icon={faLinkedin} />
        </div>
      </div>
    </div>
  );
};
