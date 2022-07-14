import React from "react";
import SetImage from "./SetImage/dana-devolk-x2cNcfz_xXU-unsplash.png";
import CardMedia from "@material-ui/core/CardMedia";
import { Card, CardContent } from "@material-ui/core";
import "../Style.scss";

const Set = () => {
  return (
    <>
      <Card>
        <div>
          <CardContent>
            <div>
              <CardMedia component="img" src={SetImage} />
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
            </div>
          </CardContent>
        </div>
      </Card>
    </>
  );
};

export default Set;
