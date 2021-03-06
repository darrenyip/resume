import { View } from "@tarojs/components";
import Project from "./project";
import InvertTitle from "../../components/invert-title";

import "./projects.scss";

const Projects = () => {
  const title = "项目经验";
  const projects = [
    {
      title: "主页及电商页面(独立开发)",
      name: "Dhar Mann, Dhar Mann Shop",
      duration: "2021.5",
      position: "开发，运维",
      description: [
        "开发首页，部落格及视频页面。",
        "用jQuery+GSAP3实现页面动效。",
        "利用Shopify平台并客制化商城页面",
        "创建低代码模板"
      ],
      tech: [
        "开发动效组件实现在拖动页面实时改变页面内容及呈现效果。",
        "使用Owl Carousel 实现卡片轮播及点击切换。",
        "用Liquid (Shopify Template Engine) 开发商城页面"
      ]
    },
    {
      title: "主页(独立开发)",
      name: "Alison Qualter",
      duration: "2021.2",
      position: "开发，运维",
      description: [
        "Alison Qualter的门户页面, 拥有自己的部落格及视频页面。",
        "搭建用户后台：课程页面添加/展示，个人课程日历，课程播放管理。",
        "搭建管理后台：学员反馈总览, 反馈结果表格化, 课程模块化编排功能及视频上传。"
      ],
      tech: [
        "使用Keap+Memberium 管理用户账户注册及会员等级状态",
        "使用Chart.js 对获取的数据进行图表绘制",
        "使用fullCalendar制作用户课程日历",
        "注入 Stripe 实现收款功能"
      ]
    },
    {
      title: "主页",
      name: "Jay Shetty,Mel Robbins,Baptiste Yoga,Apprentice...",
      duration: "2020.8 - Now",
      position: "维护",
      description: [
        "根据客户需求商讨功能细节，安排项目日程，开发，测试后部署。"
      ],
      tech: "根据客户要求添加或修改页面内容"
    }
  ];

  return (
    <View className="projects">
      <View className="container">
        <View className="bg-text"></View>
        <InvertTitle title={title} />
        <Project projects={projects} />
      </View>
    </View>
  );
};

export default Projects;
