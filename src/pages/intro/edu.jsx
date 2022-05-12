import { View, Text } from "@tarojs/components";
import InvertTitle from "../../components/invert-title";

const Education = () => {
  const title = "教育背景";
  return (
    <View className="education">
      <InvertTitle title={title} />
      <View className="main-text">
        <Text className="single-line-text">
          University at Albany(纽约州立大学)
        </Text>
        <View></View>
        <Text className="single-line-text">物理，计算机 - 本科双专业</Text>
        <View></View>
        <Text className="at-article__info gray-text">2014.9-2019.6</Text>
      </View>
    </View>
  );
};

export default Education;
