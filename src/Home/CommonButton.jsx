import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

const CommonButton = (props) => {
  const { className, buttonName, icon, path, style } = props;
  return (
    <>
      <Button
        component={Link}
        to={path}
        color="secondary"
        disableElevation
        disableRipple
        underline
        className={className}
        size="large"
        style={style}
      >
        {icon}
        <span>{buttonName}</span>
      </Button>
    </>
  );
};

export default CommonButton;
