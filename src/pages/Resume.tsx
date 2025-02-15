import Accordion from "../components/Accordion";
import TemplateDefault from "../templates/Default";
import { Typography } from "@mui/material";

const description = `${"　"}開発の初期から関わる案件が多く、インフラの設計からバックエンドのコード設計を一から作る場合が多いです。
ここで挙げられているスキルは少しさわったレベルではなくほぼ自力で一から業務レベルまで落としこめる程度にマスターしています。
${"　"}特に強みは、インフラ面では CI/CD の設計と環境構築とサーバレス・コンテナ環境の IaC。開発面では golang や Laravel などの各種言語・フレームワークのコード設計カスタマイズです。 
${"　"}弱いところは、コンテナ基盤としての Kubernetes の経験がないところです。
${"　"}DB 周りでは、NoSQL、RDBMS ともに設計から運用まで経験しています。最近はマルチテナント型のサービスの NoSQL の設計から携わりデータ分散の設計手法を学びました。
2021 年からはスクラム形式で開発を行っており、CI/CDの設計・構築を積極的に行い、1ヶ月に2、3回のリリースを行っています。`;

const Resume = () => {
  return (
    <TemplateDefault className="resume" bgColor="primary.bgLight2">
      <Typography variant="h4" color="primary.contrastText2" p={3}>
        経歴・履歴（最新順）
      </Typography>
      <Typography variant="body2" p={3}>
        {description}
      </Typography>
      <Typography variant="body1" color="red">
        ↓ 赤ボーダーは技術レベルの上がった注目案件
      </Typography>
      <Accordion />
    </TemplateDefault>
  );
};

export default Resume;
