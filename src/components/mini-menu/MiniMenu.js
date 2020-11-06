import "./MiniMenu.scss";
import ItemMenu from "../item-menu/ItemMenu";
import {
  faUser,
  faFileAlt,
  faPaintBrush,
  faAt,
} from "@fortawesome/free-solid-svg-icons";

function MiniMenu() {
  return (
    <div className="mini-menu">
      <ItemMenu icon={faUser} text="about" upLine={false} />
      <ItemMenu icon={faFileAlt} text="resume" />
      <ItemMenu icon={faPaintBrush} text="works" />
      <ItemMenu icon={faAt} text="contact" />
    </div>
  );
}

export default MiniMenu;
