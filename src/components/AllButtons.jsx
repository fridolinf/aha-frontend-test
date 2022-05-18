import React from "react";
import styled from "@emotion/styled";
import { Button, Typography } from "@mui/material";
import PropTypes from "prop-types";

const ContainButton = styled(Button)({
  background: "#fff",
  "&:hover": {
    background: "#121212",
    border: "1px solid #fff",
  },
});
const OutlineButton = styled(Button)({
  background: "#000",
  border: "1px solid #fff",
  "&:hover": {
    background: "#fff",
  },
});

export function ContainedButton({
  text,
  width,
  height,
  borderRadius,
  textColor,
  textWeight,
  textFamily,
  textAlign,
  textSize,
  textTransform,
  hoverColor,
  onClick,
}) {
  return (
    <ContainButton
      onClick={onClick}
      variant="contained"
      sx={{ width, height, borderRadius }}
    >
      <Typography
        color={textColor}
        fontWeight={textWeight}
        fontFamily={textFamily}
        textAlign={textAlign}
        fontSize={textSize}
        fontStyle="normal"
        textTransform={textTransform}
        sx={{
          ":hover": {
            color: hoverColor,
          },
        }}
      >
        {text}
      </Typography>
    </ContainButton>
  );
}

export function OutlinedButton({
  text,
  width,
  height,
  borderRadius,
  textColor,
  textWeight,
  textFamily,
  textAlign,
  textSize,
  textTransform,
  hoverColor,
  onClick,
}) {
  return (
    <OutlineButton
      onClick={onClick}
      variant="outlined"
      sx={{ width, height, borderRadius }}
    >
      <Typography
        color={textColor}
        fontWeight={textWeight}
        fontFamily={textFamily}
        textAlign={textAlign}
        fontSize={textSize}
        textTransform={textTransform}
        sx={{
          ":hover": {
            color: hoverColor,
          },
        }}
      >
        {text}
      </Typography>
    </OutlineButton>
  );
}

ContainedButton.propTypes = {
  text: PropTypes.string,
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  borderRadius: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  textColor: PropTypes.string,
  textWeight: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  textFamily: PropTypes.string,
  textAlign: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  textSize: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  textTransform: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  hoverColor: PropTypes.string,
  onClick: PropTypes.func,
};

OutlinedButton.propTypes = {
  text: PropTypes.string,
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  borderRadius: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  textColor: PropTypes.string,
  textWeight: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  textFamily: PropTypes.string,
  textAlign: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  textSize: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  textTransform: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  hoverColor: PropTypes.string,
  onClick: PropTypes.func,
};

export default { ContainedButton, OutlinedButton };
