import React from "react";
import "../Style.scss";
import Image from "../Image/l.png";
import Grid from "@mui/material/Grid";
import KoszykImage from "./KoszykImage/koszyk.svg";
import MenuButton from "./MenuButton";
import ZamowIcon from "./ZamowIcon/zamow_ikona.svg";
import MojeKont from "./MojeKonto/mojekonto.svg";
import SwiperCard from "./SwiperCard";
import Uber from "./Uber";
import Set from "./Set";
import Box from "@mui/material/Box";
import Steak from "./Steak";
import UberLogo from "./Partners/Bitmap-2.png";
import BoltFood from "./Partners/Bitmap-3.png";
import Glovo from "./Partners/Bitmap.png";
import DeliGoo from "./Partners/e.png";
import Pyszne from "./Partners/Bitmap-4.png";
// import Swiper from "react-id-swiper";
const Home = () => {
  // const params = {
  //   spaceBetween: 30,
  //   centeredSlides: true,
  //   autoplay: {
  //     delay: 2500,
  //     disableOnInteraction: false,
  //   },
  //   pagination: {
  //     el: ".swiper-pagination",
  //     clickable: true,
  //   },
  //   navigation: {
  //     nextEl: ".swiper-button-next",
  //     prevEl: ".swiper-button-prev",
  //   },
  // };

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
          <MenuButton
            width={110}
            color={"#000000"}
            path={"/"}
            buttonName={"Steak"}
          />
          <MenuButton
            width={110}
            color={"#000000"}
            path={"/"}
            buttonName={"Burgers"}
          />
          <MenuButton
            width={110}
            color={"#000000"}
            path={"/"}
            buttonName={"French fries"}
          />
          <MenuButton
            width={110}
            color={"#000000"}
            path={"/"}
            buttonName={"Drinks"}
          />
          <MenuButton
            width={125}
            color={"#000000"}
            path={"/"}
            buttonName={"Gdzie dowozimy?"}
          />
          <MenuButton
            width={110}
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

      {/* <Swiper {...params}>
            <div>Slide #1</div>
            <div>Slide #2</div>
            <div>Slide #3</div>
          </Swiper> */}
      <Box sx={{ width: "100%" }}>
        <Grid container spacing={24}>
          <Grid item xs={6} sm={6}></Grid>
          <Grid item xs={6} sm={6}>
            <Steak />
          </Grid>
        </Grid>
        <Grid
          container
          alignContent="center"
          alignItems="center"
          justify="flex-start"
          sx={{ mt: 2 }}
        >
          <Grid item xs={1}></Grid>
          <Grid item xs={2}>
            <img src={Pyszne} />
          </Grid>
          <Grid item xs={2}>
            <img src={DeliGoo} />
          </Grid>
          <Grid item xs={2}>
            <img src={Glovo} />
          </Grid>
          <Grid item xs={2}>
            <img src={UberLogo} />
          </Grid>
          <Grid item xs={2}>
            <img src={BoltFood} />
          </Grid>
          <Grid item xs={1}></Grid>
        </Grid>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xs={6}>
            <Set />
          </Grid>
          <Grid item xs={6}>
            <Uber />
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Home;
