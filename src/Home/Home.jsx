import React from "react";
import "../Style.scss";
import Image from "../Image/l.png";
import Grid from "@mui/material/Grid";
import KoszykImage from "./KoszykImage/koszyk.svg";
import IconButton from "./IconButton";
import MojeKont from "./MojeKonto/mojekonto.svg";
import CommonButton from "./CommonButton";

const Home = () => {
  return (
    <>
      <Grid
        container
        alignContent="flex-start"
        alignItems="center"
        justify="flex-start"
        sx={{ mt: 2 }}
      >
        <Grid item xs={1}></Grid>
        <Grid item xs={1}>
          <img src={Image} />
        </Grid>
        <Grid item xs={7}>
          <CommonButton path={"/"} buttonName={"Steak"} />
          <CommonButton path={"/"} buttonName={"Burgers"} />
          <CommonButton path={"/"} buttonName={"French fries"} />
          <CommonButton path={"/"} buttonName={"Drinks"} />
          <CommonButton path={"/"} buttonName={"Gdzie dowozimy?"} />
          <CommonButton path={"/"} buttonName={"Kontakt"} />
        </Grid>
        <Grid item xs={3}>
          <IconButton icon={MojeKont} path={"/"} buttonName={"Moje Konto"} />
          <IconButton icon={KoszykImage} path={"/"} buttonName={"Koszyk"} />
          <IconButton path={"/"} buttonName={"Zamow"} />
        </Grid>
      </Grid>
    </>
  );
};

export default Home;
