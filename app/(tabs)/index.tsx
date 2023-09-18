import { useEffect, useRef } from "react";
import { Platform } from "react-native";
import { Text } from "../../components/Themed";
import { SafeAreaView } from "react-native-safe-area-context";
import { RefreshControl, ScrollView } from "react-native-gesture-handler";
import Lottie from "lottie-react-native";
import { useThreadStore } from "../../store/Store";
import { Thread } from "../../types/threads";
import ThreadItem from "../../components/Thread/ThreadItem";

export default function TabOneScreen() {
  const animationRef = useRef<Lottie>(null);

  const threads = useThreadStore((state: any) => state.threads);

  return (
    <SafeAreaView>
      <ScrollView
        contentContainerStyle={{
          paddingHorizontal: 10,
          paddingTop: Platform.select({ android: 30 }),
        }}
        refreshControl={
          <RefreshControl
            refreshing={false}
            onRefresh={() => {
              animationRef.current?.play();
            }}
            tintColor={"transparent"}
          ></RefreshControl>
        }
      >
        <Lottie
          ref={animationRef}
          source={require("../../animations/threads.json")}
          loop={false}
          autoPlay
          style={{ width: 90, height: 90, alignSelf: "center" }}
        />
        {threads.map((thread: Thread) => (
          <ThreadItem key={thread.id} thread={thread} />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}
