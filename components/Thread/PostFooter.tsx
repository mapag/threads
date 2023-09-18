import { Thread } from "../../types/threads";
import { Text } from "../Themed";

interface PostFooterProps {
  thread: Thread;
}

export default function PostFooter({ thread }: PostFooterProps): JSX.Element {
  return (
    <Text style={{ color: "gray" }}>
      {thread.repliesCount} replies - {thread.likesCount} likes
    </Text>
  );
}
