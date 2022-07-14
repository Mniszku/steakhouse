import React from "react";
import Box from "@mui/material/Box";
import "../Style.scss";
const SwiperCard = () => {
  return (
    <>
      <Box
        sx={{
          width: 300,
          height: 400,
          backgroundColor: " #FFFFFF",
        }}
      >
        <div className="text-container">
          <p className="text-first">Rabat 10%</p>
          <p className="text-second">na pierwsze zamowienie!</p>
        </div>
      </Box>
    </>
  );
};

export default SwiperCard;
