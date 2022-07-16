import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import "../Style.scss";
import "../Font/SofiaPro.ttf";
import Grid from "@mui/material/Grid";
const MenuButton = (props) => {
  const { icon, buttonName, path, backgroundColor, color, width } = props;

  return (
    <>
      <Button
        component={Link}
        to={path}
        style={{
          backgroundColor: backgroundColor,
          fontFamily: "SofiaPro",
          textTransform: "none",
          fontstyle: "normal",
          fontweight: 400,
          fontsize: 14,
          lineheight: 14,
          width: width ? width : 97,
          height: 57,
          color: "black",
          borderRadius: 10,
          textAlign: "center",
          color: color,
        }}
      >
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="baseline"
        >
          <Grid item xs={12}>
            <img src={icon} alt="" />
          </Grid>
          <Grid item xs={12}>
            <span>{buttonName}</span>
          </Grid>
        </Grid>
      </Button>
    </>
  );
};

export default MenuButton;
