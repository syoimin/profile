import * as React from "react";
import MuiAvatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";

const Avatar = () => {
  return (
    <Stack direction="row" spacing={2}>
      <MuiAvatar
        alt="Remy Sharp"
        src="/static/images/avatar/1.jpg"
        sx={{ width: 120, height: 120 }}
      >
        SY
      </MuiAvatar>
    </Stack>
  );
};

export default Avatar;
