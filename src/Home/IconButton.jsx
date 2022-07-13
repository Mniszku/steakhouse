import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import "../Style.scss";

const IconButton = (props) => {
  const { icon, buttonName, path, backgroundColor, textColor } = props;
  return (
    <>
      <Button
        component={Link}
        to={path}
        style={{
          backgroundColor: backgroundColor,
          textTransform: "none",
          fontstyle: "normal",
          fontweight: 400,
          fontsize: 14,
          lineheight: 14,
          textColor: textColor,
        }}
      >
        <img src={icon} />

        <span>{buttonName}</span>
      </Button>
    </>
  );
};

export default IconButton;
