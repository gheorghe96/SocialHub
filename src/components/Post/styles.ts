import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  postContainer: {
    marginBottom: 50
  },
  postUserImage: {
    width: 40,
    height: 40,
    borderRadius: 100,
  },
  postImage: {
    height: 250,
    marginTop: 10,
    borderRadius: 20,
  },
  postTitle: {
    fontSize: 16,
    marginTop: 10,
    fontWeight: "500",
  },
  postMessage: {
    fontSize: 14,
    marginTop: 10,
    fontWeight: "400",
  },
  postTimeStamp: {
    fontSize: 14,
    marginTop: 10,
    fontWeight: "500",
  },
  postAuthor: {
    marginLeft: 10,
    fontWeight: '500'
  },
  postCreatedAt: {
    marginLeft: 10,
    fontWeight: '300'
  },
  actionIcon: {
    marginLeft: 3
  },
  actionShareIcon: {
    paddingHorizontal: 15
  }
});
