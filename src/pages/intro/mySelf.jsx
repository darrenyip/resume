import Taro from "@tarojs/taro";
import { View, Text, Image } from "@tarojs/components";
import { AtAvatar, AtButton } from "taro-ui";
import Avatar from "../../assets/images/darrens-photo.jpg";
import "taro-ui/dist/style/components/avatar.scss";
import "taro-ui/dist/style/components/modal.scss";
import Wechat from "../../assets/images/icons/wechat.png";

const MySelf = () => {
  const openQR = () => {
    Taro.showLoading({
      title: "加载中"
    });
    Taro.previewImage({
      current:
        "cloud://darrencv-db-1gvm41iq9acd1718.6461-darrencv-db-1gvm41iq9acd1718-1311849669/QRcode.jpg", // 当前显示图片的http链接
      urls: [
        "cloud://darrencv-db-1gvm41iq9acd1718.6461-darrencv-db-1gvm41iq9acd1718-1311849669/QRcode.jpg"
      ], // 需要预览的图片http链接列表,
      success(res) {
        Taro.hideLoading();
        console.log("image loaded", res);
      },
      fail(err) {
        console.log("fail to load image", err);
      }
    });
  };

  return (
    <View className="myself">
      <AtAvatar image={Avatar}></AtAvatar>
      <View className="at-article__h1">叶张宇</View>
      <View className="desire-position">
        期望职位：<Text className="position">前端开发</Text>
      </View>
      <View className="socials">
        <View className="wechat" onClick={openQR}>
          <Image src={Wechat} style="width: 50px;height: 50px;"></Image>
        </View>
      </View>
    </View>
  );
};

export default MySelf;
