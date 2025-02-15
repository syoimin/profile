import React from 'react';
import TemplateDefault from "../templates/Default";
import SkilsCard from "../components/SkillsCard";
import SkillsList from "../components/SkillsList";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";

// import SvgGoIcon from "../assets/gopher.svg?react";
import SvgGoIcon from "../components/Icons/custom/gopher";

const skillsData = [
  {
    icon: <SvgGoIcon viewBox="0 0 256 348" />,
    skil: "Go",
    others: ["gin", "gorm", "クリーンアーキテクチャ"],
    rating: 4,
    viewBox: "0 0 256 348",
    description:
      "ここ３年 Go 言語で開発中。コード設計から、フレームワークの載せ替えまで行う",
    projects: [
      {
        title:
          "Go + RESTFull API を利用したサーバレスな管理画面の API 設計・開発",
        link: "Go + RESTFull API を利用したサーバレスな管理画面の API 設計・開発",
      },
      {
        title: "プロジェクト導入時の Go コード設計",
        link: "#",
      },
      {
        title: "gin フレームワークのクリーンアーキテクチャ化",
        link: "#",
      },
    ],
  },
]

const toolsData = [
  {
    title: "OS",
    tools: "AmazonLinux1,2 / AlpineLinux / Debian / CentOS6,7 / FreeBSD",
  },
  {
    title: "コンテナ 開発環境",
    tools: "Docker",
  },
  {
    title: "プロジェクト管理",
    tools: "Jira / backlog",
  },
  {
    title: "バージョン管理システム",
    tools: "GitHub / GitLab",
  },
  {
    title: "コミュニケーションツール",
    tools: "Slack / Chatwork / Miro",
  },
  {
    title: "エディタ",
    tools: "Visual Stuidio Code / vi",
  },
  {
    title: "CI / CD",
    tools: "GitHubActions / gitlab-ci / CodeBuild / CodePipeline",
  },
];

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
