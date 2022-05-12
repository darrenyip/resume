import "taro-ui/dist/style/components/icon.scss"; // 按需引入
import "taro-ui/dist/style/components/button.scss";

import { Component } from "react";
import { View, Text, Image } from "@tarojs/components";
import { AtButton, AtIcon } from "taro-ui";
import Taro from "@tarojs/taro";
import Darren from "../../assets/images/darrens-photo.jpg";
import "./index.scss";

export default class Index extends Component {
  state = {
    data: [
      { title: "个人简介", icon: "user", url: "intro" },
      { title: "工作经历", icon: "list", url: "works" },
      { title: "项目经验", icon: "star-2", url: "projects" },
      { title: "技能树", icon: "lightning-bolt", url: "skills" }
    ]
  };
  handleNavigate = path => {
    Taro.navigateTo({
      url: "/pages/" + path + "/" + path
    });
  };
  render() {
    const { data } = this.state;
    return (
      <View className="index">
        <View className="center mb-3">
          <Image
            style="width:300px;height:300px;border-radius:10px;margin:1rem auto;"
            src={Darren}
          />
        </View>
        <View className="cards at-row">
          {data.map(item => {
            return (
              <View className="cards-card at-col" key={item.url}>
                <View className="circle">
                  <AtIcon
                    value={item.icon}
                    size="30"
                    color="#78a3fa9d"
                  ></AtIcon>
                </View>
                <Text className="cards-card--title">{item.title}</Text>
                <AtButton
                  className="round-button"
                  type="primary"
                  circle
                  size="small"
                  onClick={() => this.handleNavigate(item.url)}
                >
                  <View className="taro-text at-icon at-icon-chevron-right"></View>
                </AtButton>
              </View>
            );
          })}
        </View>
      </View>
    );
  }
}
