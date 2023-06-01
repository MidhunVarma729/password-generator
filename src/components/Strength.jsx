import React from "react";
import { Stack, Box, LinearProgress } from "@mui/material";
import Typography from "@mui/material/Typography";

const Strength = () => {
  return (
    <Box
      sx={{
        backgroundColor: "black",
        borderRadius: "4px",
        height: "40px",
        width: "310px",
        m: "auto",
        mb: "12px",
        pr: "20px",
        pl: "20px",
        pt: "14px"
      }}
    >
      <Stack
        direction="row"
        alignItems="center"
        sx={{ top: 0, justifyContent: "space-between", pb: "32px" }}
      >
        <Typography
          variant="h6"
          color="#fff"
          sx={{ fontSize: "16px", opacity: "0.7", fontWeight: "bold" }}
        >
          STRENGTH
        </Typography>
        <Stack direction="column">
          <Typography
            sx={{
              fontSize: "14px",
              opacity: "0.7",
              color: "red",
              fontWeight: "bold"
            }}
          >
            weak
          </Typography>

          <LinearProgress
            variant="determinate"
            value={25}
            color="error"
            classes={{
              bar: {
                transition: "none"
              },
              colorPrimary: {
                backgroundColor: "red"
              },
              barColorPrimary: {
                backgroundColor: "white"
              }
            }}
          />
        </Stack>
      </Stack>
    </Box>
  );
};

export default Strength;
