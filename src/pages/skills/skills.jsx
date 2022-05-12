import { View } from "@tarojs/components";
import InvertTitle from "../../components/invert-title";
import Skill from "./skill";
import TinyCards from "./tinyCard";
import "./skills.scss";

const Skills = () => {
  const title = "技能点";
  const skills = [
    "熟练掌握 HTML5 标签和CSS运用及新增属性进行页面重构;",
    "熟练掌握并运用前端的基本框架和类库: jQuery, Chart.js 等;",
    "熟练运用响应式布局和弹性盒布局, 利用rem, px和百分比进行移动端布局;",
    "熟悉使用 Sass 预编译, 实现 CSS 的管理和维护;",
    "熟练运用 WordPress + PHP, 能够快速实现页面开发;",
    "熟悉 ES6 语法糖;",
    "熟练使用 React,了解 React 全家桶;",
    "熟练运用 Angular, 了解 RXJS;",
    "了解Webpack前端自动化构建工具;",
    "熟悉云服务器的基本搭建部署和运作流程及 Git 代码托管;"
  ];
  return (
    <View className="skills">
      <View className="container">
        <View className="bg-text"></View>
        <InvertTitle title={title} />
        <Skill skills={skills} />
        <TinyCards />
      </View>
    </View>
  );
};

export default Skills;
