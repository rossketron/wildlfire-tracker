import { Icon } from "@iconify/react";
import "./styles.css";

const LocationInfoBox = ({ info, onClick, onCloseWindow }) => {
  return (
    <div className="location-info" onClick={onClick}>
      <Icon
        className="close-icon"
        icon="ant-design:close-square-outlined"
        onClick={onCloseWindow}
      />
      <h2>Fire Information</h2>
      <ul>
        <li>
          <strong>ID:</strong> {info.id}
        </li>
        <li>
          <strong>TITLE:</strong> {info.title}
        </li>
      </ul>
    </div>
  );
};

export default LocationInfoBox;
