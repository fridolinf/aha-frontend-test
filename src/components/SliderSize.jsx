import { Typography } from "@mui/material";
import React from "react";
import PropTypes from "prop-types";
import Slider from "rc-slider";

function SliderSize({ changeSliderValue, totalResult, count }) {
  return (
    <>
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
      <div style={{ maxWidth: "718px" }}>
        <Slider
          onChange={changeSliderValue}
          min={3}
          max={50}
          defaultValue={3}
          marks={{
            3:
              count === 3 ? (
                <span style={{ color: "#fff" }}>3</span>
              ) : (
                <span>3</span>
              ),
            // value on slider change staticaly on home page
            11.3:
              count === 6 ? (
                <span style={{ color: "#fff" }}>6</span>
              ) : (
                <span>6</span>
              ),
            19.6:
              count === 9 ? (
                <span style={{ color: "#fff" }}>6</span>
              ) : (
                <span>9</span>
              ),
            27.9:
              count === 12 ? (
                <span style={{ color: "#fff" }}>12</span>
              ) : (
                <span>12</span>
              ),
            36.2:
              count === 15 ? (
                <span style={{ color: "#fff" }}>15</span>
              ) : (
                <span>15</span>
              ),
            50:
              count === 50 ? (
                <span style={{ color: "#fff" }}>50</span>
              ) : (
                <span>50</span>
              ),
          }}
          handleStyle={{
            border: "5px solid #ffd25f",
            height: 20,
            width: 20,
            marginTop: -9,
            backgroundColor: "#1b1b1b",
            "&:hover": {
              border: "none",
            },
          }}
          step={null}
          railStyle={{
            backgroundColor: "#5d5d5d",
            height: 8,
            maxWidth: "718px",
          }}
          dotStyle={{ display: "none" }}
          trackStyle={{
            backgroundImage:
              "linear-gradient(270deg, #FFD25F 0.13%, #FF5C01 100%)",
            height: 8,
          }}
        />
      </div>
    </>
  );
}

SliderSize.propTypes = {
  changeSliderValue: PropTypes.func,
  totalResult: PropTypes.number,
};
export default SliderSize;
