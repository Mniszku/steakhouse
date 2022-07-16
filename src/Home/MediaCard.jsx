import React from "react";
import CardMedia from "@material-ui/core/CardMedia";
import Card from "@mui/material/Card";
import Button from "@mui/material/Button";
import "../Style.scss";
import "../Font/SofiaPro.ttf";
const MediaCard = (props) => {
  const { IconButtons, backgroundImage, title, text } = props;

  return (
    <>
      <Card>
        <div style={{ position: "relative" }}>
          <CardMedia
            style={{ height: "100%" }}
            component="img"
            src={backgroundImage}
            title="Pancakes"
            alt="Pancakes"
          />

          <div
            style={{
              position: "absolute",
              color: "white",
              width: 300,
              top: 82,
              left: 270,
              fontFamily: "SofiaPro",
              fontStyle: "normal",
              fontWeight: 700,
              fontSize: 35,
              transform: "translateX(-50%)",
            }}
          >
            {title}
          </div>
          <div
            style={{
              position: "absolute",
              display: "inline-block",
              fontFamily: "SofiaPro",
              fontWeight: 400,
              top: 150,
              left: 120,
            }}
          >
            {text}
            <br></br>
            {IconButtons}
            <div
              style={{
                marginTop: 70,
              }}
            >
              <Button
                style={{
                  textTransform: "none",
                  background: "#920303",
                  borderRadius: 10,
                  border: "none",
                  height: 49,
                  width: 204,
                  color: "white",
                }}
              >
                Zamow online
              </Button>
            </div>
          </div>
          <div></div>
        </div>
      </Card>
    </>
  );
};

export default MediaCard;
