import React from "react";
import { View, Text, Button, Colors, Card, Fader } from "react-native-ui-lib";
import { useAppContext } from "../../hooks/useAppContext";
import { ScreenProps } from "./types";
// @ts-ignore
import Ionicons from "react-native-vector-icons/Ionicons";
import FastImage from "react-native-fast-image";
import { styles } from "./styles";
import { Alert, FlatList } from "react-native";
import PostItem from "../../components/Post/PostItem";
import { PostType } from "../../modules/post/types";

const POSTS: Array<PostType> = [
  {
    id: "111",
    image: "https://unsplash.it/400/400?image=1",
    author: "John Doe",
    title: "This is first post on this platform",
    message:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    createdAt: new Date(),
  },
  {
    id: "222",
    image: "https://unsplash.it/400/400?image=1",
    author: "John Doe",
    title: "This is first post on this platform",
    message:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    createdAt: new Date(),
  },
  {
    id: "333",
    image: "https://unsplash.it/400/400?image=1",
    author: "John Doe",
    title: "This is first post on this platform",
    message:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    createdAt: new Date(),
  },
];

export default function MainScreen({
  route,
  navigation,
}: ScreenProps): JSX.Element {
  const { user } = useAppContext();

  return (
    <View style={styles.container}>
      <View marginT-20 row spread centerV marginH-20>
        <Text text50>Hi {user?.email}</Text>
        <Button
          size={Button.sizes.small}
          backgroundColor={Colors.transparent}
          iconSource={() => <Ionicons name="menu-outline" size={32} />}
        />
      </View>

      <Card marginT-30 padding-15 onPress={() => null} row centerV marginH-20>
        <FastImage
          style={styles.postUserImage}
          source={{
            uri: "https://unsplash.it/400/400?image=1",
          }}
          resizeMode={FastImage.resizeMode.contain}
        />
        <Text style={styles.writePostTitle}>Write yout post there</Text>
      </Card>

      <View flex-1 marginT-25 marginH-20>
        <FlatList
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.postsListContent}
          data={POSTS}
          renderItem={({ item }) => <PostItem item={item} />}
          keyExtractor={(item) => item.id}
        />
        <Fader visible={true} position={Fader.position.TOP} size={25} />
        <Fader visible={true} position={Fader.position.BOTTOM} size={25} />
      </View>
    </View>
  );
}
