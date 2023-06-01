import React from "react";
import { Stack, Slider, Box } from "@mui/material";
import Typography from "@mui/material/Typography";

const CharacterLength = (props) => {
  const [value, setValue] = [props.value, props.setValue];
  const handleChange = (event, newValue) => {
    if (typeof newValue === "number") {
      setValue(newValue);
    }
  };

  return (
    <Box sx={{ width: "auto", pb: "24px" }}>
      <Typography
        id="non-linear-slider"
        variant="h6"
        gutterBottom
        sx={{
          display: "flex",
          top: 0,
          justifyContent: "space-between",
          color: "#fff",
          opacity: "0.7"
        }}
      >
        <span>Characters:</span> <span>{value}</span>
      </Typography>
      <Slider
        value={value}
        min={0}
        step={1}
        max={24}
        onChange={handleChange}
        sx={{ color: "#2A8B8B" }}
      />
    </Box>
  );
};

export default CharacterLength;