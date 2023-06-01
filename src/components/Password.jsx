import React from "react";
import { Stack, Fab } from "@mui/material";
import Typography from "@mui/material/Typography";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";

const Password = () => {
  const [password, setPassword] = React.useState("Password Here!");

  return (
    <Stack
      direction="row"
      alignItems="center"
      sx={{ top: 0, justifyContent: "space-between", pb: "32px" }}
    >
      <Typography variant="h6" color="#fff" sx={{ fontWeight: "bold" }} className="genPassword">
        {password}
      </Typography>
      <Fab color="inherit"><ContentCopyIcon sx={{ color: "#2A8B8B" }} /></Fab>
    </Stack>
  );
};

export default Password;
