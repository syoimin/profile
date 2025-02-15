import SvgReactIcon from "../assets/react.svg?react";
import SvgVueIcon from "../assets/vue.svg?react";
import SvgLaravelIcon from "../assets/laravel.svg?react";
import SvgAwsAmplifyIcon from "../assets/aws-amplify.svg?react";
import SvgGoIcon from "../assets/gopher.svg?react";
import AwsCloudformationIcon from "../assets/aws-cloudformation.svg?react";
import AnsibleIcon from "../assets/ansible.svg?react";
import ServerlessIcon from "../assets/serverless.svg?react";
import JavaIcon from "../assets/java.svg?react";
import DockerIcon from "../assets/docker.svg?react";
import CodepipelineIcon from "../assets/aws-codepipeline.svg?react";
import PythonIcon from "../assets/python.svg?react";
import KubernatesIcon from "../assets/kubernetes.svg?react";
import CIcon from "../assets/c.svg?react";
import JavascriptIcon from "../assets/javascript.svg?react";


export const skillsData = [
  {
    icon: <SvgGoIcon width="5em" height="5em"/>,
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
  {
    icon: <DockerIcon width="5em" height="5em" />,
    skil: "Docker",
    others: ["docker-compose", "Dockerfile"],
    rating: 5,
    viewBox: "0 0 256 185",
    description: "基本すべて Docker で開発中。Dockerfile も書く。",
    projects: [
      {
        title:
          "Go + RESTFull API を利用したサーバレスな管理画面の API 設計・開発",
        link: "Go + RESTFull API を利用したサーバレスな管理画面の API 設計・開発",
      },
      {
        title: "SMS 二段階認証 サービス 管理画面開発",
        link: "SMS 二段階認証 サービス 管理画面開発",
      },
      {
        title: "SMS 二段階認証サービス SMS 送信 API 開発",
        link: "SMS 二段階認証サービス SMS 送信 API 開発",
      },
      {
        title:
          "タグ挿入でデザインを変更できるサービスの管理画面 リプレイス開発",
        link: "タグ挿入でデザインを変更できるサービスの管理画面 リプレイス開発",
      },
      {
        title: "BtoBtoC 入力フォーム支援サービス開発プロジェクト",
        link: "BtoBtoC 入力フォーム支援サービス開発プロジェクト",
      },
      {
        title: "クリニックのアプリ予約情報管理システムと予約情報閲覧アプリ",
        link: "クリニックのアプリ予約情報管理システムと予約情報閲覧アプリ",
      },
    ],
  },
  {
    icon: <SvgLaravelIcon width="5em" height="5em"/>,
    skil: "Laravel",
    others: ["Laravel 5,7,8"],
    rating: 5,
    viewBox: "0 0 256 264",
    description: "2020年ごろまでは Laravel をメインで利用。仕様は熟知。",
    projects: [
      {
        title: "SMS 二段階認証 サービス 管理画面開発",
        link: "SMS 二段階認証 サービス 管理画面開発",
      },
      {
        title:
          "タグ挿入でデザインを変更できるサービスの管理画面 リプレイス開発",
        link: "タグ挿入でデザインを変更できるサービスの管理画面 リプレイス開発",
      },
      {
        title: "新人研修 カリキュラム作成と講師",
        link: "新人研修 カリキュラム作成と講師",
      },
      {
        title: "クリニックのアプリ予約情報管理システムと予約情報閲覧アプリ",
        link: "クリニックのアプリ予約情報管理システムと予約情報閲覧アプリ",
      },
    ],
  },
  {
    icon: <AwsCloudformationIcon width="5em" height="5em"/>,
    skil: "AWS Cloudformation",
    others: ["AWS SAM"],
    rating: 4,
    viewBox: "0 0 256 312",
    description: "インフラ環境は基本これ！！API 開発は SAMで。",
    projects: [
      {
        title:
          "タグ挿入でデザインを変更できるサービスの管理画面 リプレイス開発",
        link: "タグ挿入でデザインを変更できるサービスの管理画面 リプレイス開発",
      },
      {
        title: "SMS 二段階認証サービス SMS 送信 API 開発",
        link: "SMS 二段階認証サービス SMS 送信 API 開発",
      },
      {
        title: "オンプレサーバを AWS へ移設",
        link: "オンプレサーバを AWS へ移設",
      },
      {
        title: "クリニックのアプリ予約情報管理システムと予約情報閲覧アプリ",
        link: "クリニックのアプリ予約情報管理システムと予約情報閲覧アプリ",
      },
      {
        title:
          "Go + RESTFull API を利用したサーバレスな管理画面の API 設計・開発",
        link: "Go + RESTFull API を利用したサーバレスな管理画面の API 設計・開発",
      },
    ],
  },
  {
    icon: <CodepipelineIcon width="5em" height="5em"/>,
    skil: "AWS CodePipeline",
    others: ["CodeDeploy", "CodeBuild"],
    rating: 4,
    viewBox: "0 0 74.375 85",
    description: "いつもお世話になっております。CI/CD といえばこれ！！",
    projects: [
      {
        title: "SMS 二段階認証 サービス 管理画面開発",
        link: "SMS 二段階認証 サービス 管理画面開発",
      },
      {
        title: "SMS 二段階認証サービス SMS 送信 API 開発",
        link: "SMS 二段階認証サービス SMS 送信 API 開発",
      },
      {
        title:
          "タグ挿入でデザインを変更できるサービスの管理画面 リプレイス開発",
        link: "タグ挿入でデザインを変更できるサービスの管理画面 リプレイス開発",
      },
      {
        title: "クリニックのアプリ予約情報管理システムと予約情報閲覧アプリ",
        link: "クリニックのアプリ予約情報管理システムと予約情報閲覧アプリ",
      },
    ],
  },
  {
    icon: <SvgAwsAmplifyIcon width="5em" height="5em"/>,
    skil: "AWS Amplify",
    others: ["Amplify SDK", "Authenticator", "IoT Core"],
    rating: 4,
    viewBox: "0 0 256 191",
    description: "Cognito 認証は Amplify SDK を利用。",
    projects: [
      {
        title: "マルチテナントの会員登録ページの認証システムの設計・開発",
        link: "マルチテナントの会員登録ページの認証システムの設計・開発",
      },
      {
        title: "オンライン展示会用 デジタル展示会プラットフォーム開発",
        link: "オンライン展示会用 デジタル展示会プラットフォーム開発",
      },
      {
        title: "クリニックのアプリ予約情報管理システムと予約情報閲覧アプリ",
        link: "クリニックのアプリ予約情報管理システムと予約情報閲覧アプリ",
      },
    ],
  },
  {
    icon: <JavascriptIcon width="5em" height="5em"/>,
    skil: "javascript",
    others: [
      "ES2020",
      "Typescript",
      "ESLInt",
      "Webpack",
      "prettier",
      "npm",
      "vanilla js",
    ],
    rating: 4,
    viewBox: "0 0 256 256",
    description: "嫌でもスキルつくよね。js 使う前にはコード設計大事!!",
    projects: [
      {
        title: "殆どの案件で js が使われているので省略",
        link: "",
      },
    ],
  },
  {
    icon: <SvgReactIcon width="5em" height="5em"/>,
    skil: "React",
    others: ["React Native", "Expo"],
    rating: 3,
    viewBox: "0 0 256 228",
    description: "このポートフォリは React + Typescript で実装",
    projects: [
      {
        title: "マルチテナントの会員登録ページの認証システムの設計・開発",
        link: "マルチテナントの会員登録ページの認証システムの設計・開発",
      },
      {
        title: "クリニックのアプリ予約情報管理システムと予約情報閲覧アプリ",
        link: "クリニックのアプリ予約情報管理システムと予約情報閲覧アプリ",
      },
      {
        title: "このサイト",
        link: "",
      },
    ],
  },
  {
    icon: <SvgVueIcon width="5em" height="5em" />,
    skil: "Vue.js",
    others: ["Vue3", "Composition API", "Vue2", "Vuex", "NuxtJS"],
    rating: 3,
    viewBox: "0 0 256 221",
    description: "業務で Vue2, Vue3 両方経験。Vuex は最悪",
    projects: [
      {
        title: "オンライン展示会用 デジタル展示会プラットフォーム開発",
        link: "オンライン展示会用 デジタル展示会プラットフォーム開発",
      },
      {
        title: "副業：クローリング結果の管理画面作成",
        link: "",
      },
    ],
  },
  {
    icon: <JavaIcon width="5em" height="5em"/>,
    skil: "Java",
    others: ["Apach Click", "Java6"],
    rating: 3,
    viewBox: "0 0 256 346",
    description: "SIer 時代に利用。ここ４年 Java は触れてません。",
    projects: [
      {
        title: "転職サイトの管理システム",
        link: "転職サイトの管理システム",
      },
    ],
  },

  {
    icon: <ServerlessIcon width="5em" height="5em"/>,
    skil: "Serverless Framework",
    others: [],
    rating: 3,
    viewBox: "0 0 256 204",
    description: "SAM を使う前はこっち。また戻ってくるかも",
    projects: [
      {
        title: "BtoBtoC 入力フォーム支援サービス開発プロジェクト",
        link: "BtoBtoC 入力フォーム支援サービス開発プロジェクト",
      },
    ],
  },
  {
    icon: <AnsibleIcon width="5em" height="5em"/>,
    skil: "Ansible",
    others: [],
    rating: 3,
    viewBox: "0 0 256 315",
    description: "EC2 立ててたときはベース環境をこれで作成",
    projects: [
      {
        title: "オンプレサーバを AWS へ移設 2件",
        link: "オンプレサーバを AWS へ移設 2件",
      },
      {
        title: "オンプレサーバを AWS へ移設",
        link: "オンプレサーバを AWS へ移設",
      },
      {
        title: "Prometheus を使ったリソース監視サーバの構築",
        link: "Prometheus を使ったリソース監視サーバの構築",
      },
      {
        title: "画面操作ログ取得サービスのサーバ構築",
        link: "画面操作ログ取得サービスのサーバ構築",
      },
    ],
  },
  {
    icon: <PythonIcon width="5em" height="5em"/>,
    skil: "Python",
    others: ["Numpy", "scikit-learn", "SVM", "自然言語処理", "CNN"],
    rating: 2,
    viewBox: "0 0 256 255",
    description: "趣味と学部時代の研究開発で利用。業務経験はなし",
    projects: [
      {
        title: "卒業論文: サポートベクターマシンを用いた株価予測",
        link: "https://www.lab.kochi-tech.ac.jp/yoshilab/thesis/1160318.pdf",
      },
      {
        title: "英字 pdf から 文字列を抽出し、翻訳するツール",
        link: "https://github.com/syoimin/pdftotext",
      },
    ],
  },
  {
    icon: <CIcon width="5em" height="5em"/>,
    skil: "C 言語",
    others: ["アセンブリ言語"],
    rating: 2,
    viewBox: "0 0 128 128",
    description: "競技プログラミングで利用。ポインタはこれでマスター！！",
    projects: [
      {
        title: "ACM ICPC 国際大学対抗プログラミングコンテスト 過去問",
        link: "https://icpc.iisf.or.jp/past/",
      },
    ],
  },
  {
    icon: <KubernatesIcon width="5em" height="5em"/>,
    skil: "Kubernetes",
    others: [],
    rating: 1,
    viewBox: "0 0 256 249",
    description: "公式チュートリアルを一通り実施。今後伸ばしたい！！",
    projects: [
      {
        title: "Kubernetesの基本を学ぶ",
        link: "https://kubernetes.io/ja/docs/tutorials/kubernetes-basics/",
      },
    ],
  },
];

export const toolsData = [
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
