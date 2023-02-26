import { StyleSheet } from "react-native";
import { initialWindowMetrics } from "react-native-safe-area-context";
import { Colors } from "react-native-ui-lib";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: initialWindowMetrics?.insets.top,
    backgroundColor: Colors.white
  },
  postUserImage: {
    width: 40,
    height: 40,
    borderRadius: 100,
  },
  writePostTitle: {
    fontSize: 14,
    fontWeight: "500",
    marginLeft: 10,
  },
  postsListContent: {
    marginTop: 15,
    paddingBottom: 30,
  },
});
