import { StyleSheet } from "react-native";
import { Thread } from "../../types/threads";
import { Text, View } from "../Themed";
import { Feather, MaterialIcons } from "@expo/vector-icons";
import { timeAgo } from "../../utils/time-ago";

interface PostHeadingProps {
  thread: Thread;
}

export default function PostHeading({ thread }: PostHeadingProps): JSX.Element {
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        flexGrow: 1,
      }}
    >
      <View style={styles.container}>
        <Text style={styles.text}>{thread.author.name}</Text>
        {thread.author.verified && (
          <MaterialIcons name="verified" size={14} color="#60a5fa" />
        )}
      </View>
      <View style={styles.container}>
        <Text style={{ color: "gray" }}>{timeAgo(thread.createdAt)}</Text>
        <Feather name="more-horizontal" size={14} color="gray"></Feather>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  text: {
    fontWeight: "500",
  },
});
