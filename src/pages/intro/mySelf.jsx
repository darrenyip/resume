import Taro from "@tarojs/taro";
import { useState } from "react";
import { View, Text, Image } from "@tarojs/components";
import { AtAvatar, AtActionSheet, AtActionSheetItem, AtToast } from "taro-ui";
import Avatar from "../../assets/images/darrens-photo.jpg";
import "taro-ui/dist/style/components/avatar.scss";
import "taro-ui/dist/style/components/modal.scss";
import "taro-ui/dist/style/components/toast.scss";
import "taro-ui/dist/style/components/action-sheet.scss";

import Wechat from "../../assets/images/icons/wechat.png";
import Phone from "../../assets/images/icons/telephone.png";

const MySelf = () => {
  const [openActionTab, setopenActionTab] = useState(false);
  const [openToast, setopenToast] = useState(false);
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
  const handleAddContact = () => {
    Taro.addPhoneContact({
      firstName: "张宇",
      lastName: "叶",
      mobilePhoneNumber: "13600151004",
      homePhoneNumber: 13600151004,
      email: "darrenyzy@qq.com",
      remark: "前端开发-深圳"
    });
  };
  const handlePhoneCall = () => {
    Taro.makePhoneCall({
      phoneNumber: "13600151004",
      success() {
        console.log(" should I go back to main?");
        setopenActionTab(false);
      },
      fail(err) {
        console.log("拨打失败", err);
        setopenActionTab(false);
        setopenToast(true);
      }
    });
  };
  const handlOpenAction = () => {
    setopenActionTab(true);
  };
  const handleActionCancel = () => {
    setopenActionTab(false);
  };
  const handleCloseToast = () => {
    setopenToast(false);
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
        <View className="contact">
          <View className="add-contact" onClick={handlOpenAction}>
            <Image src={Phone} style="width: 40px;height: 40px;"></Image>
          </View>
        </View>
      </View>
      {/* add or call contact modal */}
      <AtActionSheet
        isOpened={openActionTab}
        cancelText="取消"
        onCancel={handleActionCancel}
        onClose={handleActionCancel}
      >
        <AtActionSheetItem onClick={handleAddContact}>
          添加到联系人
        </AtActionSheetItem>
        <AtActionSheetItem onClick={handlePhoneCall}>
          拨打电话
        </AtActionSheetItem>
      </AtActionSheet>
      {/* phone call failure callback message */}
      <AtToast
        isOpened={openToast}
        text="真的不再考虑一下？"
        onClose={handleCloseToast}
      ></AtToast>
    </View>
  );
};

export default MySelf;
