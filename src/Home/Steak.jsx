import React from "react";
import CardMedia from "@material-ui/core/CardMedia";
import SteakImage from "./SteakImage/Bitmapv.png";
import { Card } from "@material-ui/core";

const Steak = () => {
  return (
    <>
      <Card>
        <div>
          <CardMedia component="img" src={SteakImage} />
        </div>
      </Card>
    </>
  );
};

export default Steak;
