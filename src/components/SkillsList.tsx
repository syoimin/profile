import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import React from "react";

interface toolsData {
  title: string;
  tools: string;
}

interface skilsProps {
  toolsData: toolsData[];
}

const SkillsList = (props: skilsProps) => {
  const { toolsData } = props;
  return (
    <>
      {toolsData.map((data, index) => (
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
          spacing={3}
          pt={3}
          key={index}
        >
          <Typography
            variant="body2"
            color="primary.fontColorDark"
            sx={{
              fontWeight: "100",
            }}
          >{`${data.title}： `}</Typography>
          <Typography
            variant="body1"
            color="primary.fontColorDark"
            sx={{
              fontWeight: "500",
            }}
          >
            {data.tools}
          </Typography>
        </Grid>
      ))}
    </>
  );
};

export default SkillsList;
