import { icons } from "react-icons";
import "./styles.scss";

const PageHeaderContent = (props) => {
  const { headerText, icons } = props;

  return (
    <div className="wrapper">
      <h2>{headerText}</h2>
      <span>{icons}</span>
    </div>
  );
};

export default PageHeaderContent;
