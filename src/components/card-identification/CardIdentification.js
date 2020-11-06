import "./CardIdentification.scss";
import Button from "../button/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCloudDownloadAlt } from "@fortawesome/free-solid-svg-icons";

function CardIdentification() {
  return (
    <div className="card-identification">
      <div className="shadow-behind" />
      <div
        className="card-header"
        style={{ backgroundImage: 'url("/images/peoples/dijalma.jpg")' }}
      />
      <br />
      <div className="card-content">
        <h1>Manoel Dijalma</h1>
        <p>FullStack Developer</p>
      </div>
      <div className="card-footer">
        <div className="up-line" />
        <br />
        <Button>
          Download CV <FontAwesomeIcon icon={faCloudDownloadAlt} />
        </Button>
      </div>
    </div>
  );
}

export default CardIdentification;
