import styled from "@emotion/styled";
import { Divider, TextField, Typography } from "@mui/material";
import React from "react";
import PropTypes from "prop-types";

function InputText({ changeKeyword, keywords }) {
  const TextFields = styled(TextField)({
    "& .MuiOutlinedInput-root": {
      "&:hover fieldset": {
        border: "3px solid rgba(255,255,255, 0.5)",
      },
      "& input": {
        width: "45vw",
        color: "#ffff",
      },
      "& fieldset": {
        width: "305px",
        "&:placeholder": {
          textAlign: "center",
        },
        height: "60px",
        border: "3px solid rgba(255,255,255, 0.5)",
      },
      "&.Mui-focused fieldset": {
        border: "3px solid #FF9B33",
      },
      "@media (min-width: 1440px)": {
        "& input": {
          marginTop: "8px",
          marginBottom: "30px",
        },
        "& fieldset": {
          marginTop: "6px",
          width: "725px",
        },
      },
    },
  });

  return (
    <div>
      <TextFields
        className="textFieldsSearch"
        placeholder="keyword"
        onChange={changeKeyword}
        type="search"
        value={keywords}
        autoFocus
      />
      <Divider
        sx={{
          background: "#fff",
          opacity: 0.1,
          marginBottom: "30px",
          display: {
            xs: "none",
            sm: "none",
            md: "block",
            xl: "block",
          },
        }}
      />
      <Typography
        sx={{
          color: "white",
          fontWeight: 400,
          fontSize: "24px",
          marginTop: "25px",
        }}
      >
        # Of Results Per Page
      </Typography>
    </div>
  );
}

InputText.propTypes = {
  changeKeyword: PropTypes.func,
  keywords: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default InputText;
