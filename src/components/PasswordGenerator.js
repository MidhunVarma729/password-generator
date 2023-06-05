import "../styles.css";
import * as React from "react";
import { Box, Stack, Button } from "@mui/material";
import Password from "./Password";
import CharacterLength from "./CharacterLength";
import Checkboxes from "./Checkboxes";
import Strength from "./Strength";
import generatePassword from "../generator";
import strengthDeterminer from "../strengthCalculator";

export default function PasswordGenerator() {

  const [password, setPassword] = React.useState("Password Here!");
  const [value, setValue] = React.useState(0);
  const [checkStates, setCheckState] = React.useState({
    ul: false,
    ll: false, 
    n: false,
    s: false,
  })
  const [strengthColor, setStrengthColor] = React.useState('error');
  const [strengthText, setStrengthText] = React.useState("Not good");
  const [barProgess, setbarProgress] = React.useState(33);

  function displayNewPassword(){
    var newPass = generatePassword(value, checkStates);
    var [newText, newColor, newBarValue] = strengthDeterminer(value, checkStates);
    setbarProgress(newBarValue);
    setStrengthColor(newColor);
    setStrengthText(newText);
    setPassword(newPass);
  }





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
            <Password password={password} setPassword={setPassword}/>
            <CharacterLength value={value} setValue={setValue}/>
            <Checkboxes checkStates={checkStates} setCheckState={setCheckState}/>
            <Strength strengthColor={strengthColor} strengthText={strengthText} barProgress={barProgess}/>
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
              onClick={displayNewPassword}
            >
              GENERATE
            </Button>
          </Stack>
        </Box>
      </Box>
    </div>
  );
}
