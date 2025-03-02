import React from "react";
import Accordion from "../components/Accordion";
import TemplateDefault from "../templates/Default";
import { 
  Typography, 
  Box, 
  Container, 
  Paper, 
  Divider, 
  useTheme, 
  alpha,
  Chip
} from "@mui/material";
import WorkHistoryIcon from '@mui/icons-material/WorkHistory';
import InfoIcon from '@mui/icons-material/Info';
import WhatshotIcon from '@mui/icons-material/Whatshot';

const description = `${"　"}開発の初期から関わる案件が多く、インフラの設計からバックエンドのコード設計を一から作る場合が多いです。
ここで挙げられているスキルは少しさわったレベルではなくほぼ自力で一から業務レベルまで落としこめる程度にマスターしています。
${"　"}特に強みは、インフラ面では CI/CD の設計と環境構築とサーバレス・コンテナ環境の IaC。開発面では golang や Laravel などの各種言語・フレームワークのコード設計カスタマイズです。 
${"　"}弱いところは、コンテナ基盤としての Kubernetes の経験がないところです。
${"　"}DB 周りでは、NoSQL、RDBMS ともに設計から運用まで経験しています。最近はマルチテナント型のサービスの NoSQL の設計から携わりデータ分散の設計手法を学びました。
2021 年からはスクラム形式で開発を行っており、CI/CDの設計・構築を積極的に行い、1ヶ月に2、3回のリリースを行っています。`;

const Resume: React.FC = () => {
  const theme = useTheme();
  
  return (
    <TemplateDefault className="resume" bgColor="#f5f7fa">
      <Container maxWidth="lg" sx={{ py: 4 }}>
        {/* ヘッダーセクション */}
        <Box 
          sx={{ 
            mb: 4,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
          }}
        >
          <Typography 
            variant="h3" 
            component="h1"
            sx={{ 
              fontWeight: 700, 
              mb: 2,
              textAlign: 'center',
              color: theme.palette.primary.main,
              position: 'relative',
              '&::after': {
                content: '""',
                position: 'absolute',
                width: '80px',
                height: '4px',
                bottom: '-10px',
                left: 'calc(50% - 40px)',
                backgroundColor: theme.palette.primary.main
              }
            }}
          >
            <WorkHistoryIcon sx={{ mr: 1, verticalAlign: 'middle' }} />
            経歴・履歴
          </Typography>
          <Typography 
            variant="subtitle1" 
            color="textSecondary"
            sx={{ mt: 3, mb: 4, textAlign: 'center' }}
          >
            最新順でキャリアの成長と技術スキルの変遷を紹介します
          </Typography>
        </Box>

        {/* 説明セクション */}
        <Paper 
          elevation={0}
          sx={{ 
            p: 3, 
            mb: 4, 
            borderRadius: '10px',
            backgroundColor: alpha(theme.palette.background.paper, 0.9),
            boxShadow: '0 4px 20px rgba(0,0,0,0.05)',
            position: 'relative',
            overflow: 'hidden',
            border: `1px solid ${alpha(theme.palette.primary.main, 0.1)}`
          }}
        >
          <Box 
            sx={{ 
              display: 'flex', 
              alignItems: 'flex-start', 
              mb: 2,
              gap: 2
            }}
          >
            <InfoIcon color="primary" sx={{ mt: 0.5 }} />
            <Typography variant="h6" fontWeight={600} color="primary.main">
              スキル概要
            </Typography>
          </Box>
          <Divider sx={{ mb: 2 }} />
          <Typography 
            variant="body1" 
            sx={{ 
              whiteSpace: 'pre-line',
              lineHeight: 1.7
            }}
          >
            {description}
          </Typography>

          <Box 
            sx={{
              mt: 3,
              display: 'flex',
              flexWrap: 'wrap',
              gap: 1
            }}
          >
            <Chip label="インフラ設計" color="primary" />
            <Chip label="バックエンド" color="primary" />
            <Chip label="CI/CD" color="primary" />
            <Chip label="IaC" color="primary" />
            <Chip label="AWS" color="primary" />
            <Chip label="Golang" color="primary" />
            <Chip label="Laravel" color="primary" />
            <Chip label="NoSQL" color="primary" />
            <Chip label="スクラム開発" color="primary" />
          </Box>
        </Paper>

        {/* 赤ボーダーの説明 */}
        <Box 
          sx={{ 
            display: 'flex', 
            alignItems: 'center', 
            mb: 4,
            p: 2,
            backgroundColor: alpha(theme.palette.error.main, 0.05),
            borderRadius: '8px',
            border: `1px dashed ${theme.palette.error.main}`
          }}
        >
          <WhatshotIcon color="error" sx={{ mr: 1 }} />
          <Typography variant="body1" color="error.main">
            赤ボーダーは技術レベルの上がった注目案件
          </Typography>
        </Box>

        {/* アコーディオンコンポーネント */}
        <Accordion />
      </Container>
    </TemplateDefault>
  );
};

export default Resume;