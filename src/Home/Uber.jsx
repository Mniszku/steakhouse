import React from "react";
import UberEats from "./UberEats/aplikacja.png";
import CardMedia from "@material-ui/core/CardMedia";
import { Card, CardContent } from "@material-ui/core";
import "../Style.scss";
const Uber = () => {
  return (
    <>
      {/* <Typography variant="h5" paragraph>
        <img src={UberEats}>

        </img>
      </Typography> */}
      <Card>
        <div>
          <CardContent>
            <div
              style={{
                position: "relative",
              }}
            >
              <CardMedia component="img" src={UberEats} />
              <div
                style={{
                  position: "absolute",
                  color: "white",
                  top: 82,
                  left: 154,
                  transform: "translateX(-50%)",
                  fontFamily: "Sofia Pro",
                  fontStyle: "normal",
                  fontWeight: 700,
                  fontSize: 35,
                }}
              >
                UberEats
              </div>
              <div>
                Zamawiaj w aplikacji 10% taniej. Pobierz aplikację UberEats już
                dziś.
              </div>
            </div>
          </CardContent>
        </div>
      </Card>
    </>
  );
};

export default Uber;
