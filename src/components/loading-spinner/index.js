import { Icon } from "@iconify/react";
import "./styles.css";

const LoadingSpinner = () => {
  return (
    <div className="container">
      <Icon icon="eos-icons:three-dots-loading" className={"loading-spinner"} />
    </div>
  );
};

export default LoadingSpinner;
