import React from "react";
import { Stack, FormGroup, FormControlLabel, Checkbox } from "@mui/material";

const Checkboxes = () => {

  var [checkStates, setCheckState] = React.useState({
    ul: false,
    ll: false, 
    n: false,
    s: false,
  })

  function handleChange(event){
    var checkName = event.target.name;
    var newValue = event.target.checked;
    setCheckState((prevValue)=>{
      return {
        ...prevValue,
        [checkName]: newValue,
      }
    }
    )
  }

  return (
    <Stack
      direction="column"
      sx={{ color: "#fff", opacity: "0.7", pb: "24px" }}
    >
      <FormGroup>
        <FormControlLabel
          name='ul'
          checked={checkStates['ul']}
          control={<Checkbox sx={{ color: "#fff", fontSize: "16px" }} />}
          label="Include Uppercase Letters"
          onChange={handleChange}
        />
        <FormControlLabel
          name='ll'
          checked={checkStates['ll']}
          control={<Checkbox sx={{ color: "#fff" }} />}
          label="Include Lowercase Letters"
          onChange={handleChange}
        />
        <FormControlLabel
          name='n'
          checked={checkStates['n']}
          control={<Checkbox sx={{ color: "#fff" }} />}
          label="Include Numbers"
          onChange={handleChange}
        />
        <FormControlLabel
          name='s'
          checked={checkStates['s']}
          control={<Checkbox sx={{ color: "#fff" }} />}
          label="Include Symbols"
          onChange={handleChange}
        />
      </FormGroup>
    </Stack>
  );
};

export default Checkboxes;