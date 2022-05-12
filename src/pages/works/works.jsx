import "taro-ui/dist/style/components/article.scss";
import { View } from "@tarojs/components";
import InvertTitle from "../../components/invert-title";
import Work from "./work";
import "./works.scss";

const Works = () => {
  const title = "工作经历";
  const data = [
    {
      companyName: "Nightowls",
      duration: ["2020.8 - 2022.9", "2022.9 - Now (自由职业者)"],
      title: "工作描述",
      description: [
        "与UI/UX积极合作,像素级还原前段静态页面制作 , 使用JS控制CSS 实现页面动态效果",
        "页面后台管理(页面内容自定义，低代码模板)",
        "通过响应式布局设计对主流移动设备适配",
        "搭建服务器测试、部署网页 (SSL/TLS、CDN、Cloudflare)"
      ],
      techStack: "HTML/CSS/ jQuery + PHP (WordPress)"
    },
    {
      companyName: "Orcasmart",
      duration: ["2019.6 - 2020.5"],
      title: "工作描述",
      description: [
        "根据需求定制后台管理系统(CRM+VRM)",
        "负责移动端电商网页制作，开发购物车及支付模块",
        "运用合适的图形工具（例如 Chart.js)并客制化表格样式"
      ],
      techStack: "Angular+laravel+mySql"
    }
  ];
  return (
    <View className="works">
      <View className="container  ">
        <View className="bg-text"></View>
        <InvertTitle title={title} />
        <Work data={data} />
      </View>
    </View>
  );
};

export default Works;
