import { View } from "@tarojs/components";

const Skill = props => {
  const { skills } = props;
  return (
    <View className="at-article">
      {skills.map((skill, index) => {
        return (
          <View className="skill at-article__h3" key={"skill" + index}>
            {skill}
          </View>
        );
      })}
    </View>
  );
};

export default Skill;
