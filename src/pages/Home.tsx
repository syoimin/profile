/* eslint-disable no-irregular-whitespace */
import TemplateHome from "../templates/Home";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Timeline from "../components/Timeline";
import "../css/Home.css";
import HomeCard from "../components/HomeCard";
import Container from "@mui/material/Container";
// import Avatar from "../components/Avatar";
import IconLabel from "../components/Icons/IconLabel";
import { Button } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import { Link } from "react-router-dom";
import MuiLink from "@mui/material/Link";

// 卒業年
const graduateYear = 2016;
const graduateMonth = 3;
const nowDate = new Date();

// 社会人歴
const workYear = nowDate.getFullYear() - graduateYear;
const workMonth = nowDate.getMonth() - graduateMonth;

const homeData = {
  aboutData: [
    {
      title: "略歴",
      // リリース：プラットフォーム,growth,sms,チャット,クリニック,転職,フォーム自動   インフラ： FA, NC, OEM, コーポ,韓国,フォーム,growth
      contents: `高知工科大学 情報通信専攻 卒業後 IT 業界に就職。

      バックエンドエンジニアからキャリアを始め、DC to AWS 業務や新規のサーバ構築でインフラエンジニアとして AWS を3年以上経験。
      その後、バックエンド、フロントエンド、インフラ問わず AWS エンジニアとして十数のプロジェクトに参画。
      現在、社会人 ${
        workMonth < 0 ? workYear : workYear + 1
      } 年目。インフラのリプレース & 新規サービスのリリースを7つ行っている。
      業務のかたわら、技術書典で本を出典したり、新人教育のカリキュラム作成と講師を務たりもする。
      ここ３年はスクラム形式で開発しており月２，３回のリリースを行っている。


      AWS ソリューションアーキテクトアソシエイト取得`,
    },
    {
      title: "好きな技術",
      contents: `
      すきな技術：Cloudformation, CodePipeline, Golang, Docker
      得意分野：インフラ, バックエンド, AWS, IaC, CI/CD
      経験した言語：Golang, PHP, NodeJS, TypeScript, Python, Java
      経験したフレームワーク：gin, クリーンアーキテクチャ, Laravel, Express, React, Next, Django, Nuxt, Vue
      経験したクラウド（AWS）： すべて、1から自力でリリース作成 & CloudFormation 管理経験あり
      　- インフラ：　　　Cloudformation, Route53, DirectConnect, VPN, ALB, NLB, EC2, VPC, CloudWatch Insight, CloudFront, ACM, KMS, SecretsManager, SystemsManager, IAM
      　- コンテナ：　　　ECS, Fargate, ECR
      　- サーバレス：　　AWS Amplify, AWS SAM, APIGateway, Lambda, StepFunctions, EventBridge, SQS, SNS
      　- データベース：　RDS, DynamoDB, Redis
      　- 認証：　　　　　Cognito, カスタムトリガー
      　- CI/CD：　　　　 CodePipeline, CodeBuild, CodeDeploy
      　- ストレージ：　　S3
      経験したクラウド（GCP）：Cloud Function, Firebase, GAE, Cloud SQL
      OS：AlpineLinux, AlmaLinux, CentOS, REHL, Ubuntu, MacOS
      その他：GraphQL（Hasura）, Docker, GitHubActions, Ansible, Nginx, Apache, MySQL, php-fpm, PostgreSQL, Kibana, Fluentd, Prometheus, Grafana
      伸ばしたい技術・領域：Kubernates, スクラムマスター, 教育`,
    },
  ],
  title: "しょいみんの プロフィール",
  description: "",
  image: "https://source.unsplash.com/-Xqckh_XVU4",
  imageText: "main image description",
  linkText: "Continue reading…",
};

const Home = () => {
  return (
    <TemplateHome>
      <Paper
        sx={{
          position: "relative",
          backgroundColor: "grey.800",
          color: "#fff",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundImage: `url(${homeData.image})`,
        }}
      >
        {
          <img
            style={{ display: "none" }}
            src={homeData.image}
            alt={homeData.imageText}
          />
        }
        <Box
          sx={{
            position: "absolute",
            top: 0,
            bottom: 0,
            right: 0,
            left: 0,
            backgroundColor: "rgba(0,0,0,.3)",
          }}
        />
        <Grid container pl={4} pt={4}>
          <Grid item>
            <Box
              sx={{
                position: "relative",
              }}
            >
              <Typography
                component="h1"
                variant="h3"
                color="inherit"
                gutterBottom
              >
                {homeData.title}
              </Typography>
              {homeData.aboutData.map((data, index) => (
                <Typography
                  variant="body2"
                  color="inherit"
                  paragraph
                  key={index}
                >
                  {data.contents}
                </Typography>
              ))}
              <Typography variant="body2" color="inherit" pt={3}>
                エニアグラム
              </Typography>
              <MuiLink href="https://hoyme.jp/enia5">
                <Button>研究者</Button>
              </MuiLink>
              <MuiLink href="https://hoyme.jp/enia6">
                <Button>堅実化</Button>
              </MuiLink>
            </Box>
          </Grid>
        </Grid>
        <Grid
          container
          direction="column"
          justifyContent="center"
          alignItems="center"
          pb={10}
        >
          {/* <Grid item xs={12}>
            <Avatar />
          </Grid> */}
          <Grid item xs={12} pb={4}>
            <Link to="/skills">
              <Button endIcon={<SendIcon />}>スキルスタックを見る</Button>
            </Link>
          </Grid>
          <Grid item xs={12}>
            <IconLabel />
          </Grid>
        </Grid>
      </Paper>

      <Box bgcolor="primary.bgLight" pb={5}>
        <Container maxWidth="lg">
          <Grid
            container
            justifyContent="center"
            alignItems="center"
            direction="column"
            pt={3}
            pb={5}
          >
            <Grid item>
              <Typography variant="h4" color="primary.contrastText2">
                Activities
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="body2" color="primary.contrastText2">
                外部活動の成果物
              </Typography>
            </Grid>
          </Grid>

          <HomeCard />
        </Container>
      </Box>
      <Box bgcolor="#EDF2F6">
        <Container maxWidth="lg">
          <Grid container justifyContent="center">
            <Typography
              variant="h4"
              mb={10}
              pt={10}
              color="primary.contrastText2"
            >
              History
            </Typography>
          </Grid>
          <Timeline />
        </Container>
      </Box>
    </TemplateHome>
  );
};

export default Home;
