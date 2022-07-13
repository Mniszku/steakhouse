import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

const CommonButton = (props) => {
  const { buttonName, path, style, textColor } = props;
  return (
    <>
      <Button
        component={Link}
        to={path}
        style={{
          textTransform: "none",
          fontstyle: "normal",
          fontweight: 400,
          fontsize: 14,
          lineheight: 14,
          textColor: textColor,
        }}
      >
        <span>{buttonName}</span>
      </Button>
    </>
  );
};

export default CommonButton;
