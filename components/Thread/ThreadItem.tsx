import { useNavigation } from "expo-router";
import { Thread } from "../../types/threads";
import { Text, View } from "../Themed";
import { Pressable, StyleSheet } from "react-native";
import PostHeading from "./PostHeading";
import PostFooter from "./PostFooter";
import { Image } from "expo-image";
import BottomIcons from "./BottomIcons";
import { blurHash } from "../../utils/blur-hash";
import PostLeftSide from "./PostLeftSide";

interface ThreadItemProps {
  thread: Thread;
}

export default function ThreadItem({ thread }: ThreadItemProps): JSX.Element {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <PostLeftSide thread={thread} />
      <View style={{ flexShrink: 1, gap: 6 }}>
        <PostHeading thread={thread} />
        <Text>{thread.content}</Text>
        {thread.image && (
          <Image
            source={thread.image}
            style={{
              width: "100%",
              minHeight: 300,
              borderRadius: 10,
            }}
            placeholder={blurHash}
            contentFit="cover"
            transition={500}
          ></Image>
        )}
        <BottomIcons />
        <PostFooter thread={thread}></PostFooter>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    gap: 6,
    paddingBottom: 30,
  },
  text: {
    fontWeight: "500",
  },
  image: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
});
