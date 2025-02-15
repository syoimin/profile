import React from 'react';
import TemplateDefault from "../templates/Default";
import SkilsCard from "../components/SkillsCard";
import SkillsList from "../components/SkillsList";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { skillsData, toolsData } from "./skillsData";


const Skills = () => {
  return (
    <TemplateDefault className="skills" bgColor="primary.bgLight2">
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
        spacing={3}
        pt={3}
      >
        <Grid item>
          <Typography variant="h4"> 経験スキル（趣味も含む） </Typography>
        </Grid>
        <Grid item>
          <SkilsCard skillsData={skillsData} />
        </Grid>
        <Grid item>
          <Typography variant="h4"> 業務で利用したツール </Typography>
        </Grid>
        <Grid item>
          <SkillsList toolsData={toolsData} />
        </Grid>
      </Grid>
    </TemplateDefault>
  );
};

export default Skills;
