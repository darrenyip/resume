import { View, Text } from "@tarojs/components";

const InvertTitle = props => {
  const { title } = props;
  return (
    <View className="title-invert-block">
      <Text className="title-inver-block--text title-invert-block--top">
        {title}
      </Text>
      <Text className="title-inver-block--text title-invert-block--bottom">
        {title}
      </Text>
    </View>
  );
};

export default InvertTitle;
