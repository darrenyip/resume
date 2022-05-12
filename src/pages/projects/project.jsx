import "taro-ui/dist/style/components/divider.scss";
import { AtDivider } from "taro-ui";
import { View } from "@tarojs/components";

const Project = props => {
  const { projects } = props;
  const projectsLength = projects.length - 1;
  return (
    <View>
      {projects.map((project, index) => {
        return (
          <View className="project at-article" key={"project" + index}>
            <View className="project--name at-article__h1">{project.name}</View>
            <View className="project--title at-article__h2">
              {project.title}
            </View>
            <View className="project--duartion at-article__info">
              {project.duration}
            </View>
            <View className="project--position at-article__p">
              {project.position}
            </View>
            <View className="project--description at-article">
              <View className="project--description__title at-article__h2">
                项目描述
              </View>
              {project.description.map((detail, detailIndex) => {
                return (
                  <View
                    key={"detail" + detailIndex}
                    className="project--description__deatil at-article__p"
                  >
                    {detail}
                  </View>
                );
              })}
            </View>
            <View className="project--tech at-article">
              <View className="project--tech--title at-article__h2">
                主要技术
              </View>
              <View className="project--tech__detail at-article__p">
                {project.tech}
              </View>
            </View>
            {index !== projectsLength && <AtDivider>&</AtDivider>}
            {index === projectsLength && <AtDivider>End</AtDivider>}
          </View>
        );
      })}
    </View>
  );
};

export default Project;
