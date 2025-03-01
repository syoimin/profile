import TemplateHome from "../templates/Home";
import { 
  Paper, Box, Grid, Typography, Container, Button, 
  Card, CardContent, Chip, Divider, useTheme, useMediaQuery 
} from "@mui/material";
import MuiLink from "@mui/material/Link";
import { Link } from "react-router-dom";
import Timeline from "../components/Timeline";
import "../css/Home.css";
import HomeCard from "../components/HomeCard";
import IconLabel from "../components/Icons/IconLabel";
import SendIcon from "@mui/icons-material/Send";
import CodeIcon from '@mui/icons-material/Code';
import StorageIcon from '@mui/icons-material/Storage';
import CloudIcon from '@mui/icons-material/Cloud';
import BuildIcon from '@mui/icons-material/Build';
import { ReactElement } from "react";

// Types
interface AboutData {
  title: string;
  contents: string;
}

interface AwsSkills {
  infra: string[];
  container: string[];
  serverless: string[];
  database: string[];
  auth: string[];
  cicd: string[];
  storage: string[];
}

interface EnneagramLinks {
  researcher: string;
  solid: string;
}

interface Skills {
  favorite: string[];
  specialty: string[];
  languages: string[];
  frameworks: string[];
  aws: AwsSkills;
  gcp: string[];
  os: string[];
  other: string[];
  future: string[];
}

interface HomeData {
  aboutData: AboutData[];
  skills: Skills;
  title: string;
  description: string;
  image: string;
  imageText: string;
  ennea: EnneagramLinks;
}

interface SkillChipProps {
  label: string;
}

interface SkillSectionProps {
  title: string;
  icon: ReactElement;
  skills: string[];
}

// 卒業年
const graduateYear: number = 2016;
const graduateMonth: number = 3;
const nowDate: Date = new Date();

// 社会人歴
const workYear: number = nowDate.getFullYear() - graduateYear;
const workMonth: number = nowDate.getMonth() - graduateMonth;
const totalWorkYears: number = workMonth < 0 ? workYear : workYear + 1;

const homeData: HomeData = {
  aboutData: [
    {
      title: "略歴",
      contents: `高知工科大学 情報通信専攻 卒業後 IT 業界に就職。

      バックエンドエンジニアからキャリアを始め、DC to AWS 業務や新規のサーバ構築でインフラエンジニアとして AWS を3年以上経験。
      その後、バックエンド、フロントエンド、インフラ問わず AWS エンジニアとして十数のプロジェクトに参画。
      現在、社会人 ${totalWorkYears} 年目。インフラのリプレース & 新規サービスのリリースを7つ行っている。
      業務のかたわら、技術書典で本を出典したり、新人教育のカリキュラム作成と講師を務たりもする。
      ここ３年はスクラム形式で開発しており月２，３回のリリースを行っている。

      AWS ソリューションアーキテクトアソシエイト取得`,
    },
  ],
  skills: {
    favorite: ["Cloudformation", "CodePipeline", "Golang", "Docker"],
    specialty: ["インフラ", "バックエンド", "AWS", "IaC", "CI/CD"],
    languages: ["Golang", "PHP", "NodeJS", "TypeScript", "Python", "Java"],
    frameworks: ["gin", "クリーンアーキテクチャ", "Laravel", "Express", "React", "Next", "Django", "Nuxt", "Vue"],
    aws: {
      infra: ["Cloudformation", "Route53", "DirectConnect", "VPN", "ALB", "NLB", "EC2", "VPC", "CloudWatch Insight", "CloudFront", "ACM", "KMS", "SecretsManager", "SystemsManager", "IAM"],
      container: ["ECS", "Fargate", "ECR"],
      serverless: ["AWS Amplify", "AWS SAM", "APIGateway", "Lambda", "StepFunctions", "EventBridge", "SQS", "SNS"],
      database: ["RDS", "DynamoDB", "Redis"],
      auth: ["Cognito", "カスタムトリガー"],
      cicd: ["CodePipeline", "CodeBuild", "CodeDeploy"],
      storage: ["S3"]
    },
    gcp: ["Cloud Function", "Firebase", "GAE", "Cloud SQL"],
    os: ["AlpineLinux", "AlmaLinux", "CentOS", "REHL", "Ubuntu", "MacOS"],
    other: ["GraphQL（Hasura）", "Docker", "GitHubActions", "Ansible", "Nginx", "Apache", "MySQL", "php-fpm", "PostgreSQL", "Kibana", "Fluentd", "Prometheus", "Grafana"],
    future: ["Kubernetes", "スクラムマスター", "教育"]
  },
  title: "しょいみんの プロフィール",
  description: "",
  image: "https://source.unsplash.com/-Xqckh_XVU4",
  imageText: "background image",
  ennea: {
    researcher: "https://hoyme.jp/enia5",
    solid: "https://hoyme.jp/enia6"
  }
};

const Home = (): JSX.Element => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const SkillChip = ({ label }: SkillChipProps): JSX.Element => (
    <Chip 
      label={label} 
      sx={{ 
        m: 0.5, 
        bgcolor: 'rgba(255, 255, 255, 0.1)', 
        color: 'white',
        '&:hover': {
          bgcolor: 'rgba(255, 255, 255, 0.2)',
        }
      }} 
    />
  );

  const SkillSection = ({ title, icon, skills }: SkillSectionProps): JSX.Element => (
    <Box mb={3}>
      <Box display="flex" alignItems="center" mb={1}>
        {icon}
        <Typography variant="h6" color="white" ml={1}>
          {title}
        </Typography>
      </Box>
      <Box display="flex" flexWrap="wrap">
        {skills.map((skill: string, index: number) => (
          <SkillChip key={index} label={skill} />
        ))}
      </Box>
    </Box>
  );

  return (
    <TemplateHome>
      {/* Hero Section with Gradient Overlay */}
      <Paper
        sx={{
          position: "relative",
          backgroundColor: "grey.900",
          color: "#fff",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundImage: `url(${homeData.image})`,
          borderRadius: 0,
          minHeight: '100vh',
        }}
      >
        <Box
          sx={{
            position: "absolute",
            top: 0,
            bottom: 0,
            right: 0,
            left: 0,
            backgroundImage: 'linear-gradient(to bottom, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.6) 50%, rgba(0,0,0,0.8) 100%)',
          }}
        />
        
        <Container maxWidth="lg" sx={{ position: "relative", py: 8 }}>
          {/* Main Profile Section */}
          <Grid container spacing={4}>
            <Grid item xs={12} md={7}>
              <Typography 
                component="h1" 
                variant="h2" 
                sx={{ 
                  fontWeight: 700, 
                  mb: 3,
                  textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
                  borderBottom: '2px solid #f5f5f550',
                  pb: 2
                }}
              >
                {homeData.title}
              </Typography>
              
              <Card sx={{ 
                backgroundColor: 'rgba(0, 0, 0, 0.7)', 
                backdropFilter: 'blur(10px)',
                boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
                mb: 4 
              }}>
                <CardContent>
                  <Typography variant="h5" sx={{ mb: 2, color: theme.palette.primary.main }}>
                    {homeData.aboutData[0].title}
                  </Typography>
                  <Typography 
                    variant="body1" 
                    sx={{ 
                      whiteSpace: 'pre-line',
                      lineHeight: 1.8,
                      color: 'white' 
                    }}
                  >
                    {homeData.aboutData[0].contents}
                  </Typography>
                </CardContent>
              </Card>

              {/* Enneagram Section */}
              <Box mb={4}>
                <Typography variant="h6" sx={{ mb: 1 }}>
                  エニアグラム
                </Typography>
                <Box display="flex" gap={2}>
                  <MuiLink href={homeData.ennea.researcher} underline="none">
                    <Button 
                      variant="contained" 
                      color="primary"
                      sx={{ borderRadius: '20px' }}
                    >
                      研究者
                    </Button>
                  </MuiLink>
                  <MuiLink href={homeData.ennea.solid} underline="none">
                    <Button 
                      variant="contained" 
                      color="secondary"
                      sx={{ borderRadius: '20px' }}
                    >
                      堅実化
                    </Button>
                  </MuiLink>
                </Box>
              </Box>

              {/* CTA Buttons */}
              <Box display="flex" flexDirection={isMobile ? 'column' : 'row'} gap={2} mb={4}>
                <Link to="/skills" style={{ textDecoration: 'none' }}>
                  <Button 
                    variant="contained" 
                    endIcon={<SendIcon />}
                    fullWidth={isMobile}
                    size="large"
                    sx={{ 
                      borderRadius: '30px',
                      px: 3,
                      py: 1
                    }}
                  >
                    スキルスタックを見る
                  </Button>
                </Link>
                <IconLabel />
              </Box>
            </Grid>

            {/* Skills Card Section */}
            <Grid item xs={12} md={5}>
              <Card sx={{ 
                backgroundColor: 'rgba(0, 0, 0, 0.7)', 
                backdropFilter: 'blur(10px)',
                boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)'
              }}>
                <CardContent sx={{ p: 3 }}>
                  <Typography variant="h5" sx={{ mb: 3, color: theme.palette.primary.main }}>
                    スキルハイライト
                  </Typography>
                  
                  <SkillSection 
                    title="好きな技術" 
                    icon={<CodeIcon />}
                    skills={homeData.skills.favorite} 
                  />
                  
                  <SkillSection 
                    title="得意分野" 
                    icon={<BuildIcon />}
                    skills={homeData.skills.specialty} 
                  />
                  
                  <Divider sx={{ my: 2, bgcolor: 'rgba(255,255,255,0.1)' }} />
                  
                  <SkillSection 
                    title="経験した言語" 
                    icon={<CodeIcon />}
                    skills={homeData.skills.languages} 
                  />
                  
                  <SkillSection 
                    title="AWS インフラ" 
                    icon={<CloudIcon />}
                    skills={homeData.skills.aws.infra.slice(0, 8)} 
                  />
                  
                  <SkillSection 
                    title="データベース" 
                    icon={<StorageIcon />}
                    skills={homeData.skills.aws.database} 
                  />
                  
                  <Box mt={3} display="flex" justifyContent="center">
                    <Link to="/skills" style={{ textDecoration: 'none', width: '100%' }}>
                      <Button 
                        variant="outlined" 
                        color="primary" 
                        fullWidth
                        sx={{ 
                          borderRadius: '20px',
                          textTransform: 'none',
                          borderColor: 'rgba(255,255,255,0.3)',
                          '&:hover': {
                            borderColor: 'white'
                          }
                        }}
                      >
                        すべてのスキルを見る
                      </Button>
                    </Link>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </Paper>

      {/* Activities Section with Light Background */}
      <Box sx={{ bgcolor: '#f5f7fa', py: 8 }}>
        <Container maxWidth="lg">
          <Box textAlign="center" mb={6}>
            <Typography 
              variant="h3" 
              color="primary.main"
              sx={{ 
                fontWeight: 700,
                position: 'relative',
                display: 'inline-block',
                '&::after': {
                  content: '""',
                  position: 'absolute',
                  width: '60px',
                  height: '4px',
                  bottom: '-10px',
                  left: 'calc(50% - 30px)',
                  backgroundColor: theme.palette.primary.main
                }
              }}
            >
              Activities
            </Typography>
            <Typography 
              variant="subtitle1" 
              color="text.secondary"
              sx={{ mt: 3 }}
            >
              外部活動の成果物
            </Typography>
          </Box>

          <HomeCard />
        </Container>
      </Box>

      {/* History Section */}
      <Box sx={{ bgcolor: '#EDF2F6', py: 8 }}>
        <Container maxWidth="lg">
          <Box textAlign="center" mb={6}>
            <Typography 
              variant="h3" 
              color="primary.main"
              sx={{ 
                fontWeight: 700,
                position: 'relative',
                display: 'inline-block',
                '&::after': {
                  content: '""',
                  position: 'absolute',
                  width: '60px',
                  height: '4px',
                  bottom: '-10px',
                  left: 'calc(50% - 30px)',
                  backgroundColor: theme.palette.primary.main
                }
              }}
            >
              History
            </Typography>
          </Box>
          
          <Timeline />
        </Container>
      </Box>
    </TemplateHome>
  );
};

export default Home;