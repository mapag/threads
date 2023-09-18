import { StyleSheet, useColorScheme } from "react-native";
import { View } from "../Themed";
import { Image } from "expo-image";
import { Thread } from "../../types/threads";
import { blurHash } from "../../utils/blur-hash";

interface PostLeftSideProps {
  thread: Thread;
}

export default function PostLeftSide({
  thread,
}: PostLeftSideProps): JSX.Element {
  const currentTheme = useColorScheme();
  const borderColor = currentTheme === "light" ? "#00000020" : "#ffffff20";

  return (
    <View style={{ justifyContent: "space-between" }}>
      <Image
        source={thread.author.photo}
        style={styles.image}
        placeholder={blurHash}
        contentFit="cover"
        transition={500}
      />
      <View
        style={{ width: 20, alignItems: "center", alignSelf: "center", gap: 3 }}
      >
        {[1, 2, 3].map((index) => (
          <Image
            key={index}
            // @ts-ignore
            source={thread.replies[index - 1]?.author.photo}
            style={{ width: index * 7, height: index * 7, borderRadius: 15 }}
            placeholder={blurHash}
            contentFit="cover"
            transition={500}
          />
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
});
