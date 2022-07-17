import React from "react";
import "../Style.scss";
import Image from "../Image/l.png";
import Grid from "@mui/material/Grid";
import KoszykImage from "./KoszykImage/koszyk.svg";
import MenuButton from "./MenuButton";
import ZamowIcon from "./ZamowIcon/zamow_ikona.svg";
import MojeKont from "./MojeKonto/mojekonto.svg";
import AutoPlay from "./AutoPlay/AutoPlay";
import MediaCard from "./MediaCard";
import Box from "@mui/material/Box";
import Steak from "./Steak";
import UberLogo from "./Partners/Bitmap-2.png";
import BoltFood from "./Partners/Bitmap-3.png";
import Glovo from "./Partners/Bitmap.png";
import DeliGoo from "./Partners/e.png";
import Pyszne from "./Partners/Bitmap-4.png";
import UberEats from "./UberEats/aplikacja.png";
import SetImage from "./SetImage/dana-devolk-x2cNcfz_xXU-unsplash.png";
import AppStore from "../Image/App_Store_(iOS).svg";
import Huawei from "../Image/huawei.svg";
import GooglePlay from "../Image/Group 4.svg";

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
          <img src={Image} alt="" />
        </Grid>
        <Grid item xs={7}>
          <MenuButton
            width={105}
            color={"#000000"}
            path={"/"}
            buttonName={"Steak"}
          />
          <MenuButton
            width={105}
            color={"#000000"}
            path={"/"}
            buttonName={"Burgers"}
          />
          <MenuButton
            width={105}
            color={"#000000"}
            path={"/"}
            buttonName={"French fries"}
          />
          <MenuButton
            width={105}
            color={"#000000"}
            path={"/"}
            buttonName={"Drinks"}
          />
          <MenuButton
            width={136}
            color={"#000000"}
            path={"/"}
            buttonName={"Gdzie dowozimy?"}
          />
          <MenuButton
            width={105}
            color={"#000000"}
            path={"/"}
            buttonName={"Kontakt"}
          />
        </Grid>
        <Grid item xs={3} sx={{ mt: 3 }}>
          <MenuButton
            color={"#000000"}
            icon={MojeKont}
            path={"/"}
            buttonName={"Moje Konto"}
          />
          <MenuButton
            color={"#000000"}
            icon={KoszykImage}
            path={"/"}
            buttonName={"Koszyk"}
          />
          <MenuButton
            backgroundColor={"#920303"}
            icon={ZamowIcon}
            color={"#FFFFFF"}
            path={"/"}
            buttonName={"Zamow"}
          />
        </Grid>
      </Grid>
      <Box sx={{ marginTop: 2, width: "100%" }}>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xs={6} sm={6}>
            <AutoPlay />
          </Grid>
          <Grid item xs={6} sm={6}>
            <Steak />
          </Grid>
        </Grid>
        <Grid
          container
          alignContent="center"
          alignItems="center"
          justifyContent="space-evenly"
          sx={{ mt: 2 }}
        >
          <Grid item xs={2}></Grid>
          <Grid item xs={1}>
            <img src={Pyszne} alt="" />
          </Grid>
          <Grid item xs={1}>
            <img src={DeliGoo} alt="" />
          </Grid>
          <Grid item xs={1}>
            <img src={Glovo} alt="" />
          </Grid>
          <Grid item xs={1}>
            <img src={UberLogo} alt="" />
          </Grid>
          <Grid item xs={1}>
            <img src={BoltFood} alt="" />
          </Grid>
          <Grid item xs={2}></Grid>
        </Grid>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xs={6}>
            <MediaCard
              title="Zestaw dla 3 osób"
              backgroundImage={SetImage}
              text={
                <>
                  <span
                    style={{
                      color: "white",
                    }}
                  >
                    Razem smakuje lepiej! Zamów
                  </span>
                  <br></br>
                  <span
                    style={{
                      color: "white",
                    }}
                  >
                    zestawy obiadowy dla 3 osób
                  </span>
                  <br></br>
                  <div>
                    <span
                      style={{
                        color: "white",
                      }}
                    >
                      już od
                    </span>
                    <span
                      style={{
                        color: "white",
                        backgroundColor: "black",
                      }}
                    >
                      39 zł
                    </span>
                  </div>
                </>
              }
            />
          </Grid>
          <Grid item xs={6}>
            <MediaCard
              IconButtons={
                <div style={{ display: "inline" }}>
                  <br></br>
                  <input
                    style={{
                      height: "1.5vw",
                      width: "1.5vw",
                      marginRight: "1vw",
                    }}
                    type="image"
                    src={GooglePlay}
                    alt=""
                  ></input>
                  <input
                    style={{
                      height: "1.5vw",
                      width: "1.5vw",
                      marginRight: "1vw",
                    }}
                    type="image"
                    src={AppStore}
                    alt=""
                  ></input>
                  <input
                    style={{
                      height: "1.5vw",
                      width: "1.5vw",
                    }}
                    type="image"
                    src={Huawei}
                    alt=""
                  ></input>
                </div>
              }
              title="UberEats"
              backgroundImage={UberEats}
              text={
                <>
                  <span
                    style={{
                      color: "white",
                    }}
                  >
                    Zamawiaj w aplikacji
                  </span>
                  <span
                    style={{
                      color: "white",
                      backgroundColor: "#920303",
                    }}
                  >
                    10% taniej.
                  </span>
                  <br></br>
                  <span
                    style={{
                      color: "white",
                    }}
                  >
                    Pobierz aplikację UberEats już dziś.
                  </span>{" "}
                </>
              }
            />
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Home;
