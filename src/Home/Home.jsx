import React from "react";
import Box from "@mui/material/Box";
import "../Style.scss";
import { Link } from "react-router-dom";
import Image from "../Image/l.png";
import KoszykImage from "./KoszykImage/koszyk.svg";
import MojeKonto from "./MojeKonto/mojekonto.svg";
const Home = () => {
  return (
    <>
      <Box
        className="container"
        sx={{
          width: 1920,
          height: 1279,
        }}
      >
        <Box
          className="navigation"
          sx={{
            width: 1920,
            height: 81,
          }}
        >
          <img className="logo" src={Image} />
          <Link className="first" to="/">
            Steak
          </Link>
          <Link className="second" to="/">
            Burgers
          </Link>
          <Link className="third" to="/">
            French fries
          </Link>
          <Link className="fourth" to="/">
            Drinks
          </Link>
          <Link className="fifth" to="/">
            Gdzie dowozimy?
          </Link>
          <Link className="sixth" to="/">
            kontakt
          </Link>
          <img className="konto" src={MojeKonto} />
          <Link className="seventh" to="/">
            Moje konto
          </Link>
          <img className="koszyk" src={KoszykImage} />
          <Link className="eighth" to="/">
            Koszyk
          </Link>
          <button className="ninth" to="/">
            <p className="button-text">Zamow</p>
          </button>
        </Box>
      </Box>
    </>
  );
};

export default Home;
