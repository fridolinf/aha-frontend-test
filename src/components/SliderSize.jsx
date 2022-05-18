import { Typography } from "@mui/material";
import React, { useState } from "react";
import PropTypes from "prop-types";
import Slider, { Range } from "rc-slider";

function SliderSize({ changeSliderValue, totalResult }) {
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
      <div style={{ maxWidth: "718px" }}>
        <Slider
          onChange={changeSliderValue}
          min={3}
          max={50}
          defaultValue={3}
          marks={{
            3: <span className="onActiveMarks">3</span>,
            11.3: <span className="onActiveMarks">6</span>,
            19.6: <span className="onActiveMarks">9</span>,
            27.9: <span className="onActiveMarks">12</span>,
            36.2: <span className="onActiveMarks">15</span>,
            50: <span className="onActiveMarks">50</span>,
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
    </div>
  );
}

SliderSize.propTypes = {
  changeSliderValue: PropTypes.func,
  totalResult: PropTypes.number,
};
export default SliderSize;
