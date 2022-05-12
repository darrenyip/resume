import { Component } from "react";
import { View } from "@tarojs/components";
import SelfIntro from "./selfIntro";
import Education from "./edu";
import MySelf from "./mySelf";
import "taro-ui/dist/style/components/article.scss";
import "taro-ui/dist/style/components/button.scss"; // 按需引入
import "./intro.scss";

export default class Intro extends Component {
  render() {
    return (
      <View className="intro at-article container">
        <MySelf />
        <SelfIntro />
        <Education />
      </View>
    );
  }
}
