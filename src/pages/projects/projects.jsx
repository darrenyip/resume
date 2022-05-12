import "taro-ui/dist/style/components/button.scss"; // 按需引入
import { View } from "@tarojs/components";
import InvertTitle from "../../components/invert-title";
import "./projects.scss";

const Projects = () => {
  const title = "项目经验";
  return (
    <View className="projects">
      <View className="container">
        <View className="bg-text"></View>
        <InvertTitle title={title} />
      </View>
    </View>
  );
};

export default Projects;
