import "./ItemMenu.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function ItemMenu({ icon, text, upLine = true }) {
  return (
    <>
      {upLine && <div className="up-line" />}
      <div className="item-menu">
        <FontAwesomeIcon icon={icon} />
        <h5>{text}</h5>
      </div>
    </>
  );
}

export default ItemMenu;
