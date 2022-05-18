import { Typography, Slider } from "@mui/material";
import { styled } from "@mui/material/styles";
import React, { useState } from "react";
import PropTypes from "prop-types";

function SliderSize({ changeSliderValue, totalResult }) {
  const marks = [
    {
      value: 3,
      label: "3",
    },
    {
      value: 6,
      label: "6",
    },
    {
      value: 9,
      label: "9",
    },
    {
      value: 12,
      label: "12",
    },
    {
      value: 15,
      label: "15",
    },
    {
      value: 50,
      label: "50",
    },
  ];

  const CustomSlider = styled(Slider)({
    color: "rgba(255,255,255,0.5)",
    height: 8,
    maxWidth: "718px",
    "& .MuiSlider-track": {
      backgroundImage: "linear-gradient(270deg, #FFD25F 0.13%, #FF5C01 100%)",
      border: "none",
    },
    "& .MuiSlider-thumb": {
      backgroundColor: "#000",
      border: "5px solid #FFD25F",
    },
    '& .MuiSlider-markLabel[data-index="1"]': {
      transform: "translateX(980%)",
    },
    '& .MuiSlider-markLabel[data-index="2"]': {
      transform: "translateX(1980%)",
    },
    '& .MuiSlider-markLabel[data-index="3"]': {
      transform: "translateX(2000%)",
    },
    '& .MuiSlider-markLabel[data-index="4"]': {
      transform: "translateX(2000%)",
    },
    '& .MuiSlider-markLabel[data-index="5"]': {
      transform: "translateX(2000%)",
    },
    "& .MuiSlider-markLabel": {
      color: "rgba(255,255,255, 0.5)",
      margin: 0,
      "@media (max-width: 376px)": {
        "&:nth-of-type(6)": {
          marginLeft: "36px",
        },
        "&:nth-of-type(8)": {
          marginLeft: "82px",
        },
        "&:nth-of-type(10)": {
          marginLeft: "123px",
        },
        "&:nth-of-type(12)": {
          marginLeft: "164px",
        },
      },
    },
    "& .MuiSlider-markLabelActive": {
      color: "#fff",
    },
    "& .MuiSlider-mark": {
      display: "none",
    },
  });
  const Aslider = styled(Slider)({
    color: "rgba(255,255,255,0.5)",
    height: 8,
    marginTop: 10,
    maxWidth: "718px",
    "& .MuiSlider-track": {
      backgroundImage: "linear-gradient(270deg, #FFD25F 0.13%, #FF5C01 100%)",
      border: "none",
    },
    "& .MuiSlider-thumb": {
      backgroundColor: "#000",
      border: "5px solid #FFD25F",
    },
    "& .MuiSlider-markLabel": {
      color: "rgba(255,255,255, 0.5)",
      margin: 0,
      "&:nth-of-type(6)": {
        marginLeft: "81px",
      },
      "&:nth-of-type(8)": {
        marginLeft: "162px",
      },
      "&:nth-of-type(10)": {
        marginLeft: "243px",
      },
      "&:nth-of-type(12)": {
        marginLeft: "324px",
      },
      "@media (max-width: 376px)": {
        "&:nth-of-type(6)": {
          marginLeft: "36px",
        },
        "&:nth-of-type(8)": {
          marginLeft: "82px",
        },
        "&:nth-of-type(10)": {
          marginLeft: "123px",
        },
        "&:nth-of-type(12)": {
          marginLeft: "164px",
        },
      },
    },
    "& .MuiSlider-markLabelActive": {
      color: "#fff",
    },
    "& .MuiSlider-mark": {
      display: "none",
    },
  });

  return (
    <div>
      <Typography
        sx={{
          color: "white",
          fontWeight: 400,
          fontSize: "16px",
          marginTop: "4px",
        }}
      >
        <b style={{ fontWeight: 700, fontSize: "48px" }}>{totalResult} </b>
        result
      </Typography>
      <CustomSlider
        marks={marks}
        min={3}
        max={50}
        step={null}
        onChange={changeSliderValue}
      />
      <Aslider
        marks={marks}
        min={3}
        max={50}
        step={null}
        onChange={changeSliderValue}
      />
    </div>
  );
}

SliderSize.propTypes = {
  changeSliderValue: PropTypes.func,
  totalResult: PropTypes.number,
};
export default SliderSize;
