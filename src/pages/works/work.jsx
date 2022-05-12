import "taro-ui/dist/style/components/button.scss";
import "taro-ui/dist/style/components/divider.scss";
import { View } from "@tarojs/components";
import { AtDivider } from "taro-ui";

const Work = props => {
  const { data } = props;
  const worksLength = data.length - 1;
  return (
    <View>
      {data.map((work, workIndex) => {
        return (
          <View key={work.companyName} className="works--single at-article">
            <View className="works--single__title at-article__h1">
              {work.companyName}
            </View>
            {work.duration.map((time, index) => {
              return (
                <View
                  key={time + index}
                  className="works--single__duration at-article__info"
                >
                  {time}
                </View>
              );
            })}
            <View className="works--single__duties at-article">
              <View className="duties--title at-article__h2 ">
                {work.title}
              </View>
              {work.description.map((detail, index) => {
                return (
                  <View className="duties--singel at-article__p" key={index}>
                    {detail}
                  </View>
                );
              })}
            </View>
            <View className="works--single__tech at-article">
              <View className="tech--title at-article__h2 ">主要技术</View>
              <View className="tech--detail at-article__p">
                {work.techStack}
              </View>
            </View>
            {workIndex !== worksLength && <AtDivider>&</AtDivider>}
            {workIndex === worksLength && <AtDivider>End</AtDivider>}
          </View>
        );
      })}
    </View>
  );
};

export default Work;
