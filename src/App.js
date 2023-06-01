import "./styles.css";
import * as React from "react";
import { Box, Stack, Button } from "@mui/material";
import Typography from "@mui/material/Typography";
import Password from "./components/Password";
import CharacterLength from "./components/CharacterLength";
import Checkboxes from "./components/Checkboxes";
import Strength from "./components/Strength";

export default function App() {
  return (
    <div className="App">
      <Box
        sx={{
          width: 450,
          height: 600,
          backgroundColor: "#000",
          display: "flex",
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        <Box
          sx={{
            width: 350,
            height: 500,
            backgroundColor: "#24232B",
            p: "24px"
          }}
        >
          <Stack direction="column">
            <Password />
            <CharacterLength />
            <Checkboxes />
            <Strength />
            <Button
              variant="contained"
              sx={{
                color: "#FFF",
                backgroundColor: "#2A8B8B",
                fontWeight: "bold",
                pt: "10px",
                pb: "10px",
                fontSize: "16px"
              }}
            >
              GENERATE
            </Button>
          </Stack>
        </Box>
      </Box>
    </div>
  );
}
