import { Component } from "react";
import { View, Text } from "@tarojs/components";
import { AtButton } from "taro-ui";
import SelfIntro from "./selfIntro";
import Education from "./edu";
import MySelf from "./mySelf";
import "taro-ui/dist/style/components/article.scss";
import "taro-ui/dist/style/components/button.scss"; // 按需引入
import "./intro.scss";

export default class Intro extends Component {
  componentWillMount() {}

  componentDidMount() {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  render() {
    return (
      <View className="intro at-article">
        <MySelf />
        <SelfIntro />
        <Education />
      </View>
    );
  }
}
