import React from "react";
import MuiAccordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Stack from "@mui/material/Stack";
import Grid from "@mui/material/Grid";
import Chip from "@mui/material/Chip";

import Link from "@mui/material/Link";
import { useLocation } from "react-router-dom";
import "../css/Resume.css";

const resumeData = [
  {
    skills: ["DynamoDB", "golang", "AWS SAM", "Cognito", "Kintone"],
    title:
      "（バックエンド開発）マルチテナント型ノーコード会員登録ウェブアプリの設計・開発",
    contents: `
    ・スクラムマスター1名 フロント4名 バックエンド3名 インフラ1名のチームで開発。
    ・AWS SAM を IaC としてサーバレス環境にて golang と DynamoDB を使った API 開発。
    ・マイクロサービス全体のクライアントIP アドレスを元にしたアクセス制限の設計・開発。
    ・Kintone 連携の追加機能開発。
    ・メール による MFA 認証の追加機能開発。
    ・golang の クリーンアーキテクチャへのリファクタリング。
    `,
    thoughts: `現在進行中で機能開発を行っています。基本的には golang を使った API 開発をメインに担当していますが、フロントと密接に
    かかわる機能の修正（Cognito などの認証機能）が発生する場合はフロントエンドのコード修正も行います。
    スクラムで回しており、できる人・やりたい人がタスクを取っていくスタイルで回すので積極的に経験が浅い部分などのタスクを取ることでスキルアップができました。`,
    date: "2022年 3月 ~ 現在進行中",
    link: "https://omosui-dx-cx.showcase-tv.com/service",
    member: 9,
    assign: ["設計・開発", "アーキテクチャ"],
    scale: "スクラム開発",
    feat: true,
    jobs: ["バックエンド"],
  },
  {
    skills: ["GraphQL, Hasura, Next.js"],
    title: "テニス予約サイトの開発",
    contents: `
    ・副業でテニス予約サイトサービスの開発を行った。
    ・担当はバックエンド・フロントエンド両方で言語は Next.js と GraphQLで開発。`,
    thoughts: `月60h の稼働で副業として参画。初めて GraphQL を利用して開発を行った。フロントエンドの
    領域が多く殆どの開発はフロントエンドの業務だったが、なんとかついていけるよう勉強がんばりました。`,
    date: "2023年 5月 ~ 2023年 10月",
    link: "",
    member: 5,
    assign: ["フロントエンド", "バックエンド"],
    scale: "個人開発",
    feat: false,
    jobs: ["フロントエンド"],
  },
  {
    skills: ["マネジメント", "基本設計", "詳細設計"],
    title: "美術館予約サイトとQR認証の連携による扉解錠システムの開発",
    contents: `
    ・弊社で運営している美術館の予約システムと美術館内の物理扉の解錠を連携させるシステム開発。
    ・予約システムはSaaSサービスを利用。SaaSとAPI連携を行うことで予約情報から扉解錠ようのQRコードを発行。
    ・お客様へのQRコードの発行・送信からQRコードのチェック扉解錠までのフローを一貫して開発・設計。
    ・自分は 週1の参画で要件の整理と設計から参画後マネジメントとして進捗を管理。`,
    thoughts: `スクラム形式で開発。要件定義と基本設計を決めた後、各メンバーにタスクを振り、進捗を管理しました。
    週１の参加でメンバーのタスク管理が難しかったですがスクラムを取り入れて一週間のタスクを洗い出すことで問題点の
    発見と課題解決を迅速に行い適切なメンバーにタスクを振ることができたかと思います。`,
    date: "2023年 11月 ~ 2024年 5月",
    link: "",
    member: 6,
    assign: ["基本設計", "詳細設計"],
    scale: "ゼロイチ開発",
    feat: false,
    jobs: ["マネジメント"],
  },
  {
    skills: ["研修 講師"],
    title: "2022年度卒 新人研修カリキュラム作成と講師",
    contents: `
    ・新人研修の講師役を担当し、30名の研修を行う。
    ・座学では Web 開発の基礎から開発方法論、設計手法についての講義を行う。
    ・実践研修では、バックエンド API 開発での Todo アプリの開発研修講義を行う。`,
    thoughts: `30名の新人研修を行いました。完全リモートで研修を行ったのですが、全員の進捗を揃えてすすめていくのが非常に難しいことを体感しました。`,
    date: "2022年 4月 ~ 5月",
    link: "",
    member: 1,
    assign: ["講師", "資料作成"],
    scale: "講師",
    feat: false,
    jobs: ["新人教育"],
  },
  {
    skills: ["DynamoDB", "golang"],
    title:
      "（DynamoDB 設計・開発）マルチテナント型ノーコード会員登録ウェブアプリの設計・開発",
    contents: `
    ・マルチテナントとして他クライアントとデータの干渉をしないような DynaomoDB の設計・開発を担当。
    ・単一パーティーションアクセスによるアクセス不可を防ぐための設計を行い、スケーラブルなマルチテナント型のサービスを実現。`,
    thoughts: `NoSQL の設計は初めての経験でしたが、スキーマレスな設計ができるので、柔軟な設計ができると感じました。
    あとから要件を追加した際、検索要件だけは考慮する必要がありますが、それ以外は比較的拡張がしやすく仕様追加にも柔軟に対応できているのが気に入っています。
    `,
    date: "2021年 12月 ~ 2022年 2月",
    link: "",
    member: 3,
    assign: ["基本設計", "NoSQL 設計"],
    scale: "ゼロイチ開発",
    feat: true,
    jobs: ["バックエンド"],
  },
  {
    skills: [
      "golang",
      "gin フレームワーク",
      "Swagger",
      "AWS SAM",
      "Cognito",
      "Docker",
      "GitHub Actions",
    ],
    title: "Go + RESTFull API を利用したサーバレスな管理画面の API 設計・開発",
    contents: `
    ・各マイクロサービスを管理するプラットフォームの管理画面の API 設計・開発を担当。
    ・認証サービスに Cognito を、認証方式に JWT を採用。
    ・API のフレームワークは Gin フレームワークを採用し、コード設計に３層アーキテクチャ、MVC モデルを採用し、デザインパターンにサービス・レポジトリパターンと依存注入を独自実装。
    ・本番環境は完全サーバレスで AWS SAM を使って API Gateway + lambda を構築。
    ・開発環境は SAM を DooD (Dcker outside of Docker) 環境で実行するように構築`,
    thoughts: `初めて golang を業務で利用した開発でした。Gin フレームワークは、ルーティングとミドルウェアのみしか提供されていないのでその他必要なコード設計はオレオレフレームワークにならないように一般的なコード設計・デザインパターンを採用し設計しました。
    ${"　"}過去に経験したフレームワークの知見を活かし、小・中規模で開発速度がある程度早く、スケールしてもコードが煩雑にならないようなデザインパターンを採用しました。
    社内初の golang の業務だったので、作成したコード設計のテンプレートを社内のナレッジとして共有しました。`,
    date: "2021年 5月 ~ 2021年 11月",
    link: "",
    member: 4,
    assign: [
      "DB 設計",
      "API 設計",
      "API 開発",
      "ユニットテスト",
      "コードレビュー",
    ],
    scale: "ゼロイチ開発",
    feat: true,
    jobs: ["API 開発", "インフラ"],
  },
  {
    skills: [
      "Laravel",
      "Cognito",
      "Docker",
      "Aurora",
      "Athena",
      "Kinesis Data Firehose",
      "Tailwind CSS",
      "CodePipeline",
    ],
    title: "SMS 二段階認証 サービス 管理画面開発",
    contents: `・SMS 二段階認証サービスのユーザ管理と SMS 送信 API の管理システムを設計・開発。
    ・フレームワークに Laravel、認証サービスに Cognito、本番環境は EC2 Autoscaling。
    ・デザインパターンに、サービス・レポジトリパターンを導入
    ・CI/CD を CodePipeline で構築
    ・Athena、Kinesis Data Firehose を使った CloudWatch のログ集計バッチ`,

    thoughts: `開発期間が短かったので慣れているフレームワークを採用しました。
    Laravel のバージョンアップに伴いBootstrap を使わず Tailwind CSS で React のようなコンポーネント指向で HTML のパーツを作成しました。
    ${"　"}チームメンバーにコード設計の意図の意思疎通があまりできず、最初は意図しないコンポーネントの分け方でコミットするメンバーもいましたがコードレビューすることで徐々にチームメンバーと認識が揃うようになりました。`,
    date: "2020年 11月 ~ 2021年 4月",
    link: "https://www.showcase-tv.com/pressrelease/202120531sms/",
    member: 3,
    assign: ["DB 設計", "開発", "CI/CD 構築", "コードレビュー"],
    scale: "ゼロイチ開発",
    feat: true,
    jobs: ["バックエンド", "インフラ"],
  },
  {
    skills: [
      "NodeJs",
      "Lambda",
      "AWS SAM",
      "CodePipeline",
      "Cloudformation",
      "Swagger",
      "Redis",
      "Docker",
    ],
    title: "SMS 二段階認証サービス SMS 送信 API 開発",
    contents: `・二段階認証サービスの SMS 送信 API を実装。
    ・日本では、AWS SES や AWS SNS は、キャリアによって SMS が弾かれてしまうため、日本の SMS 送信サービスを利用。
    ・SAM を利用して 素の nodejs と Lambda で API を作成
    ・SAM の CI/CD 環境を CodePipeline で作成。SAM 自体のビルドとデプロイをコンテナ上で実行する Dockerfile と BuildSpec を作成
    ・CodePipeline の環境は Cloudfromation で構成管理し作成`,
    thoughts: `Serverless Framework は過去に利用していたが今回業務ではじめて SAM を採用しました。
    SAM を使ったコードの開発は Serverless Framework とあまり変わらず開発できました。Codepipeline 上で承認プロセスを入れた SAM のビルド/デプロイ環境の構築に苦戦しました。`,
    date: "2020年 12月 ~ 2021年 4月",
    link: "https://www.showcase-tv.com/pressrelease/202120531sms/",
    member: 1,
    assign: ["DB 設計", "開発", "CI/CD 構築", "API 設計", "API 開発", "テスト"],
    scale: "ゼロイチ開発",
    feat: true,
    jobs: ["API 開発", "インフラ"],
  },
  {
    skills: ["AWS Amplify", "Iot Core", "NuxtJS", "Vue.js"],
    title: "オンライン展示会用 デジタル展示会プラットフォーム開発",
    contents: `・Nuxt + DynamoDB + Python を使ったオンライン展示会を実現する統合サービスを作成。
    ・ユーザはこのオンラインサービス上のブースから製品紹介を閲覧可能。
    ・興味のある製品をより詳しく知りたい場合、クライアントとユーザが直接やり取りできるオンラインチャットに接続可能。`,
    thoughts: `副業で触ってた Vue.js の知見を活かしてオンラインチャットサービスの画面を NuxtJS で作成。
    期間が短かったため双方向通信部分の技術は Amplify SDK の Iot Core 部分を利用しました。
    vuex をステート管理に利用しましたが、開発終盤につれてステートを追うのが大変になってきたためステートの管理方針が重要だなと気付かされた開発でした。
    `,
    date: "2020年 10月 ~ 2020年 11月",
    link: "https://www.cri-mw.co.jp/business/product/web/dxexpo/",
    member: 4,
    assign: ["コンポーネント設計", "フロント開発"],
    scale: "ゼロイチ開発",
    feat: true,
    jobs: ["フロントエンド"],
  },
  {
    skills: [
      "Vanilla js",
      "Lambda",
      "Laravel",
      "CodePipeline",
      "Cloudformation",
      "s3",
      "Docker",
    ],
    title: "タグ挿入でデザインを変更できるサービスの管理画面 リプレイス開発",
    contents: `・js タグを挿入するだけで、クライアントページのデザインを変更できるサービス。
    ・挿入する js タグのグローバル汚染の修正とデータ容量の圧縮、管理画面を Laravel でリプレイス。
    ・管理画面の EC2 デプロイパイプラインの実装
    ・js のビルドとアーティファクトを S3 へデプロイするパイプライン実装。`,
    thoughts: `管理画面は元のコードが古く、素のPHPで記述されていたため Laravel に移行しました。
    タグから展開される js のグローバル変数がグローバル汚染していたため、グローバル汚染しないように１つのオブジェクトにまとめる工夫を行いました。

    ${"　"}お客様のページに埋め込むので、影響範囲を最小限に抑えるために js のフレームワークは使わず Vanila js で全て記述し、容量を減らすため Webpack で圧縮しました。
    ${"　"}特に目新しい技術は使ってないものの、お客様のページに影響を与えずデザイン変更できるように工夫したり、CI/CD を導入し、なるべく運用コストが低くなるように工夫しました。`,
    date: "2020年 4月 ~ 2020年 9月",
    link: "",
    member: 2,
    assign: ["開発", "リプレイス調査", "CI/CD構築"],
    scale: "リプレイス",
    feat: false,
    jobs: ["インフラ", "バックエンド", "フロントエンド"],
  },
  {
    skills: ["Laravel", "研修 講師"],
    title: "新人研修 カリキュラム作成と講師",
    contents: `・新人研修の講師役を担当し、今年入社する 3名の研修を行う。
    ・座学では Web 開発の基礎から開発方法論、デザインパターンやオブジェクト指向についての講義を行う。
    ・実践研修では、Laravel を使った EC サイトの構築を指導し実践開発を行ってもらった。`,
    thoughts: `コロナの時期で、対面ではなくオンラインで研修することになったが、リモートを活かしてビデオ通話で個々人にサポートすることができた。
    実践研修中は全員通話状態にし、常に講師の自分に質問ができるような状態にしたおかげで新人のスキルアップの速度が早かった。`,
    date: "2020年 3月 ~ 2020年 4月",
    link: "",
    member: 1,
    assign: ["講師", "資料作成"],
    scale: "講師",
    feat: true,
    jobs: ["新人教育"],
  },
  {
    skills: ["Virtual Private Gateway", "Lambda"],
    title:
      "クライアント DC と弊社 AWS との Site to Site VPN 接続の設計・設定サポート",
    contents: `クライアントデータセンターと弊社 AWS とのVPCに対して サイト間 VPN 接続の設計とサポート`,
    thoughts: `ソリューションアーキテクトの資格でしか触れてなかったので、この案件で実際に触れたのが良かった。`,
    date: "2020年 2月 ~ 2020年 2月",
    link: "",
    member: 2,
    assign: ["インフラ"],
    scale: "サポート",
    feat: false,
    jobs: ["インフラ"],
  },
  {
    skills: [
      "AmazonLinux2",
      "CloudFormation",
      "GitLab Runner",
      "CloudWatch",
      "Amazon SES",
      "AWS ALB",
      "AWS Autoscaling",
    ],
    title: "韓国語講座予約・決済システムのインフラ構築",
    contents: `
    ・韓国語講座予約システムのインフラ環境の構築
    ・CloudFormatioin を利用した IaaC の導入
    ・GitLab Runner を利用した CI と ビルド環境構築
    ・Laravel Docker 開発環境の設定
    ・集計用月次バッチの作成
    ・Amazon SES の設定
    ・監視用ダッシュボードの作成
    `,
    thoughts: `受託案件でインフラを管理できるメンバーが限られていたため、運用コストを下げるために CI/CD を導入。
    運用時の作業を開発者に行ってもらうことを見据えて、監視ツールの設定や CI の設定、デプロイの半自動化の設定を行い、使い方を開発者にレクチャーしました。
    `,
    date: "2020年 1月 ~ 2020年 2月",
    link: "",
    member: 2,
    assign: ["インフラ設計", "インフラ構築"],
    scale: "ゼロイチ構築",
    feat: false,
    jobs: ["インフラ"],
  },
  {
    skills: ["Nginx", "PHP7", "CloudFormation", "Ansible", "IaC"],
    title: "オンプレサーバを AWS へ移設",
    contents: `・オンプレサーバを EC2 へ移設
    ・構成の提案、設計、構築、設定、バックアッ プの導入、監視の導入、移設作業。
    ・IaaCを導入し、サーバ構成管理には Ansible、EC２、ALB、RDSなどは CloudFormation で管理。`,
    thoughts: `予算の関係でコードの改修はせずレガシーな 構成のままAWSに移設するためオートスケールなしの固定台数の EC2 を数台負荷分散させた。`,
    date: "2019年 8月 ~ 2020年 3月",
    link: "",
    member: 2,
    assign: ["インフラ設計", "インフラ構築"],
    scale: "サーバ移設",
    feat: false,
    jobs: ["インフラ"],
  },
  {
    skills: [
      "Lambda",
      "Webpack",
      "Docker",
      "CloudFront",
      "Serverless Framework",
      "gitlab-ci",
    ],
    title: "BtoBtoC 入力フォーム支援サービス開発プロジェクト",
    contents: `・S3、Lambda、CloudFront のサーバレスアーキテクチャで構築
    ・開発からテスト、リリースに CI/CD を導入しており、GitLab の マージリクエストから gitlab-ci で静的解析、ビルド、最終的に S3 へデプロイ後 CloudFront のキャッシュを削除する lambda を実行など一連のリリース作業の自動化を実現した。
    ・ローカル開発環境として Docker を 利用した javascript の開発環境を開発者にレクチャーした。`,
    thoughts: `マイクロサービスの一つだったので、なるべくサーバレスで運用コストを少なくできたプロジェクトだった。
    js + lambda を使ったサーバレスアプリケーションの CI/CD を一通り自身で実装できたのがいい経験になった。`,
    date: "2019年 4月 ~ 2020年 7月",
    link: "",
    member: 2,
    assign: ["サーバレス設計", "CI/CD構築"],
    scale: "ゼロイチ開発",
    feat: false,
    jobs: ["バックエンド", "フロントエンド", "インフラ"],
  },
  {
    skills: [
      "Laravel",
      "PHPStan",
      "ReactNative",
      "FCM（プッシュ通知）",
      "ECS",
      "Amazon SNS",
      "AWS Amplify",
      "Expo",
      "Cognito",
      "Fargate",
      "Docker",
      "CodePipeline",
      "CloudFormation",
    ],
    title: "クリニックのアプリ予約情報管理システムと予約情報閲覧アプリ",
    contents: `・バックエンドは Fargate 上に Laravel で実装。
    ・スマホアプリに ReactNative を採用。ReactNative の統合環境に Expo を採用。ビルド環境を整えた。
    ・後に Expo だと push 通知が送れないため Eject。FireBase を使った push 通知環境を構築。
    ・認証機能として Cognito を利用し、JWT を使った認証を実装。
    ・開発は Docker で行い CI/CD にgithub とコードビルド、Slackを使ってチャットベースで任意ブランチを選択、CloudFormation と ECS を利用して AWS 環境のステージ環境構築を動的に作成。
    ・コンテナの強みを活かして、スラックから動的にテスト環境を構築。チャット駆動型開発を構築`,
    thoughts: `ここで採用した技術が自分のスキルアップにかなりつながっている。特に Laravel、ECS、CloudFormation、Cognito、ReactNative の経験は現在にもつながっている。
    このときは先輩の設計を見様見真似で勉強しながら実装していた。今では自分で実装できるまでになった。`,
    date: "2018年 10月 ~ 2019年 3月",
    link: "",
    member: 4,
    assign: ["開発", "CI/CD構築", "ローカル環境構築", "アプリ開発"],
    scale: "ゼロイチ開発",
    feat: true,
    jobs: ["フロントエンド（アプリ開発）", "バックエンド", "インフラ"],
  },
  {
    skills: ["Nginx Cache", "WordPress", "MySQL", "AmazonLinux", "php-fpm"],
    title: "オウンドメディアサーバ構築",
    contents: `・Xserver で運用してたオウンドメディアのWordPressサイトのトラフィックが契約的にさばけなくなったため急遽AWSへ移設
    ・迅速に対応するため AMIMOTO インスタンスを利用し依頼から1週間で移行することができた。`,
    thoughts: `インフラやってるとたまにワードプレス構築してってくるよね。`,
    date: "2019年 4月 ~ 2020年 7月",
    link: "",
    member: 1,
    assign: ["サーバレス構築", "CI/CD構築"],
    scale: "サーバ移設",
    feat: false,
    jobs: ["インフラ"],
  },
  {
    skills: [
      "GAS",
      "シェルスクリプト",
      "Python",
      "Grafana",
      "InfluxDB",
      "Jira",
      "Grafana",
    ],
    title: "業務改善ツール作成 いろいろ",
    contents: `・IDC のトラフィックをCSVにエクスポート、それを Phthonで InfluxDBのデータ構造に整形、Grafana でダッシュボード作成
    ・AWSの請求権限もらえなかったので毎月送信される AWS の請求メールを GAS で検索＆収集、シートに書き込むスクリプト作成
    ・AWSアカウントごとのインスタンス情報を GAS + AWS SDK で取得し、一覧で見れるような Sheet を作成
    ・Lambda + CloudWatchEvents で インスタンスを定時後に自動停止させるツールの作成
    ・Laravel の Migration ファイルを SpredSheet のテーブル定義書から自動生成するツールを作成
    ・Gas から Jira のチケット作成ツール`,
    thoughts: `案件と案件の間に業務で困ってることを解決するのが楽しい`,
    date: "不定期",
    link: "",
    member: 1,
    assign: ["開発"],
    scale: "業務ハック",
    feat: false,
    jobs: ["開発"],
  },
  {
    skills: ["Prometheus", "Grafana", "Ansible", "systemd", "Amazon Linux2"],
    title: "Prometheus を使ったリソース監視サーバの構築",
    contents: `・fluentd のキューやスループットを計測したかったので prometheus を導入し、ダッシュボードを作成。
    ・ついでに Nginx、ディスク、CPU、メモリ、トラフィックなどのダッシュボードも作成。
    ・prometheus の監視エージェントが systemd のサービス形式で常駐させなければならないので、serviceを作成する ansible を作成。
    ・prometheus と Grafana サーバの構築、インストール、設定自体も Ansible 化`,
    thoughts: `ちょうど Ansible にハマっていた頃で、何でもかんでも Ansible で作成してました。
    ただこの後 Prometheus を使うことはなかったので、この Ansible は活かされることはなかったです(´・ω・｀)`,
    date: "2018年 9月",
    link: "",
    member: 1,
    assign: ["構築"],
    scale: "イチゼロ開発",
    feat: false,
    jobs: ["インフラ"],
  },
  {
    skills: ["ALB", "CLB", "Ubuntu", "Redis", "RDS", "Redis", "WebSocket"],
    title: "ブラウザ画面共有サービスのインフラ冗長化",
    contents: `・サービスの安定稼働のためにインフラ環境を冗長化
    ・最終的に事業ごと売りに出すことになったので途中でプロジェクト終了し、リリースはできなかった。`,
    thoughts: `最終的にサービスを終了することになったので本番リリースはできませんでしたが、WebSocketを利用したサーバ冗長化構成について開発、ステージ環境まで構築・検証しました。`,
    date: "2018年 7月 ~ 2018年 12月",
    link: "",
    member: 2,
    assign: ["構築"],
    scale: "リプレイス",
    feat: false,
    jobs: ["インフラ"],
  },
  {
    skills: ["Apache", "WordPress", "MySQL", "CloudFront", "S3"],
    title: "コーポレートサイトAWS移設",
    contents: `・IDCで運用していたコーポレートサイトをWordPressインスタンスに移行。
    ・WordPress のコード自体にかなり手を加えられていたのでドキュメントルート及びDBをそのままAWSに移設する形で実施。
    ・移設する上で少しでもAWSのトラフィックを減らすためにメディアファイルのみS3+CloudFrontから配信するように改善
    ・DB の中身を書き換える必要があったので一括置換用のスクリプトと SQL の作成`,
    thoughts: `インフラやってると Wordpress 構築頼まれるよね。`,
    date: "2018年 5月 ~ 2018年 10月",
    link: "",
    member: 3,
    assign: ["構築"],
    scale: "サーバ移設",
    feat: false,
    jobs: ["インフラ"],
  },
  {
    skills: [
      "GitLabRunner",
      "EC2",
      "GitLab CI",
      "GitLab Runner",
      "fluentd",
      "Ansible",
    ],
    title: "画面操作ログ取得サービスのサーバ構築",
    contents: `・クライアントの操作ログを取得するサービスをAWSで設計・構築
    ・操作ログをEC2からfluentd、S3へ格納、EC2はオートスケーリングを設定
    ・CI/CD環境として GitLabCI と GitLab Runnerを使って S3へプッシュ、EC2のスケールイン時にユーザデータを利用してS3からデプロイさせるように設定`,
    thoughts: `インフラ部分のアーキテクト提案、設計、構築をすべて1から一人で担当したはじめての案件になります。
    この頃は CI/CD に興味を持ち始めたので、試しに簡単な CI を GitLab Runner を使って実装しました。この経験が今につながってます。
    `,
    date: "2018年 3月 ~ 2018年 4月",
    link: "",
    member: 2,
    assign: ["サーバ構築", "アーキテクト設計", "CI/CD構築"],
    scale: "サーバ移設",
    feat: true,
    jobs: ["インフラ"],
  },
  {
    skills: [
      "AWS",
      "NLB",
      "NGW",
      "VPC",
      "S3",
      "RDS",
      "Route53",
      "Ansible",
      "Rundeck",
      "CentOS6",
      "Direct Connect",
    ],
    title: "オンプレサーバを AWS へ移設 2件",
    contents: `・サーバの構築・設定
    ・Ansible を利用した、インフラ設定のコード化と自動構築`,
    thoughts: `初の DC to AWS で 一件目は手動で構築したが、2件目は前回の移設作業のノウハウを活かしてサーバ構築の自動化を導入し、Ansible で、インフラ設定のコード化と自動構築を行なった。
    実は、ネームサーバの伝搬の遅延を考慮せずにオンプレから Route53 へ一気に移行してしまい、約 1 日 サービス停止させてしまった(´・ω・｀)
    `,
    date: "2017年 6月 ~ 2018年 2月",
    link: "",
    member: 2,
    assign: ["サーバ構築", "インフラ自動化"],
    scale: "サーバ移設",
    feat: true,
    jobs: ["インフラ"],
  },
  {
    skills: ["Java", "OracleDB", "PL/SQL"],
    title: "転職サイトの管理システム",
    contents: `・新規画面の画面設計、テーブル設計・開発、単体テスト、結合テストの作成・実施`,
    thoughts: `新規追加画面に伴う画面の設計、テーブル設計、開発、テストを行いました。テーブルのリレーションが複雑なため、何度も上司とテーブル結合を確認してもらいました。
    テーブルによってシステムの処理が重くならない工夫がされており、大変勉強になった開発でした。`,
    date: "2017年 2月 ~ 2018年 5月",
    link: "",
    member: 2,
    assign: ["開発", "要件定義", "単体テスト", "結合テスト"],
    scale: "追加機能開発",
    feat: false,
    jobs: ["開発"],
  },
  {
    skills: ["javascript", "Bootstrap", "d3.js", "jQuery"],
    title: "データ可視化システム",
    contents: `・グラフィカルなダッシュボード開発`,
    thoughts: `APIで返されたJSONデータからグラフを作成するシステムを開発しました。
    お客様との要件のすり合わせを行うため頻繁に途中成果物の確認を行うことで満足してもらえるシステムを提案できました。
    今まで、Java を使った硬い案件であったので初めてモダンなライブラリを使った開発だったので自分の中で、開発の楽しさの趣向が変わった案件であった。`,
    date: "2016年 11月 ~ 2017年 1月",
    link: "",
    member: 2,
    assign: ["開発", "要件定義", "単体テスト", "結合テスト"],
    scale: "ゼロイチ開発",
    feat: true,
    jobs: ["開発"],
  },
];

const Accordion = () => {
  const location = useLocation(); // アンカーから直リンクされた時にアコーディオンを開くために利用
  const [expanded, setExpanded] = React.useState<string | false>(false);

  const handleChange =
    (panel: string, title: string) =>
    (event: React.SyntheticEvent, isExpanded: boolean) => {
      // ロケーションハッシュを変更（title ハッシュを URL に付与すると アコーディオン開閉時の位置がずれるため暫定で指定なしにしている）
      window.location.hash = "";

      // アコーディオン詳細の表示・非表示
      setExpanded(isExpanded ? panel : false);
    };

  return (
    <>
      {resumeData.map((data, index) => (
        <MuiAccordion
          TransitionProps={{ unmountOnExit: true }}
          key={index}
          expanded={
            decodeURI(location.hash) === `#${data.title}` ||
            expanded === `panel ${index}`
          }
          id={data.title}
          className={data.feat ? "feat" : ""}
          onChange={handleChange(`panel ${index}`, data.title)}
        >
          {/* <Link underline="none" href={`#${data.title}`}> */}
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
            sx={{ bgcolor: "primary.bgLight" }}
          >
            <Grid container direction="row" spacing={1}>
              <Grid container justifyContent="space-between">
                <Grid item>
                  {data.jobs.map((job, index) => (
                    <Typography
                      variant="body2"
                      color="primary.fontColorDark"
                      key={index}
                      component="span"
                      pr={3}
                      pl={1}
                    >
                      {job}
                    </Typography>
                  ))}
                </Grid>
                <Grid item>
                  <Typography variant="body2" color="primary.fontColorDark">
                    {data.date}
                  </Typography>
                </Grid>
              </Grid>
              <Grid container spacing={1} p={2}>
                <Stack direction="row" spacing={1}>
                  <Grid container justifyContent="center" spacing={1}>
                    {data.skills.map((skill, index) => (
                      <Grid item key={index}>
                        <Chip label={skill} color="primary" size="small" />
                      </Grid>
                    ))}
                  </Grid>
                </Stack>
              </Grid>

              <Grid container justifyContent="left">
                <Typography variant="h6" pl={2} color="primary.fontColorDark">
                  {data.title}
                </Typography>
              </Grid>
            </Grid>
          </AccordionSummary>
          {/* </Link> */}
          <AccordionDetails>
            <Grid container alignItems="center">
              <Grid item xs={9} p={1}>
                <Typography
                  color="primary.fontColorDark"
                  fontWeight="bold"
                  pt={1}
                >
                  内容：
                </Typography>
                <Typography color="primary.fontColorDark">
                  {data.contents}
                </Typography>
                <Typography
                  color="primary.fontColorDark"
                  fontWeight="bold"
                  pt={1}
                >
                  感想：
                </Typography>
                <Typography color="primary.fontColorDark" className="thoughts">
                  {data.thoughts}
                </Typography>
                <Typography
                  color="primary.fontColorDark"
                  fontWeight="bold"
                  pt={1}
                >
                  <Link
                    href={data.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {data.link}
                  </Link>
                </Typography>
              </Grid>
              <Grid item xs={3} justifyContent="center" p={2}>
                <Stack direction="row" spacing={1}>
                  <Grid container justifyContent="center" spacing={1}>
                    {data.assign.map((assign, index) => (
                      <Grid item key={index}>
                        <Chip label={assign} color="primary" size="small" />
                      </Grid>
                    ))}
                  </Grid>
                </Stack>
                <Stack
                  direction="row"
                  spacing={1}
                  justifyContent="center"
                  p={2}
                >
                  <Chip label={data.scale} color="success" size="small" />
                </Stack>
              </Grid>
            </Grid>
          </AccordionDetails>
        </MuiAccordion>
      ))}
    </>
  );
};
export default Accordion;
