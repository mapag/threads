import { Platform, StyleSheet } from "react-native";

import EditScreenInfo from "../../components/EditScreenInfo";
import { Text, View } from "../../components/Themed";
import { SafeAreaView } from "react-native-safe-area-context";
import { ScrollView } from "react-native-gesture-handler";
import Lottie from "lottie-react-native";

export default function TabOneScreen() {
  return (
    <SafeAreaView>
      <ScrollView
        contentContainerStyle={{
          backgroundColor: "gray",
          paddingHorizontal: 10,
          paddingTop: Platform.select({ android: 30 }),
        }}
      >
        <Lottie
          source={require("../../animations/threads.json")}
          loop={true}
          autoPlay
          style={{ width: 90, height: 90, alignSelf: "center" }}
        />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
