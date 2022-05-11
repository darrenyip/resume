import { View, Text } from "@tarojs/components";
import InvertTitle from "./invert-title";

const SelfIntro = () => {
  return (
    <View className="selfIntro">
      <InvertTitle title={"自我介绍"} />
      <View className="main-text">
        <Text className="at-article__p">
          热爱程序开发工作，具备良好的软件分析，设计，
          开发和引用能力。拥有较强的学习能力和团队协作精神，
          能快速适应工作环境。全身心投入并以真诚负责的态度对待代码，
          寻求自我价值的不断提升。
        </Text>
      </View>
    </View>
  );
};

export default SelfIntro;
