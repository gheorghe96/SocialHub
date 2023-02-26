import React from "react";
import FastImage from "react-native-fast-image";
import { View, Text, Button, Colors } from "react-native-ui-lib";
import { PostType } from "../../modules/post/types";
import { styles } from "./styles";
// @ts-ignore
import Ionicons from "react-native-vector-icons/Ionicons";

type Props = {
  item: PostType;
};

export default function PostItem(payload: Props): JSX.Element {
  const { item } = payload;
  return (
    <View style={styles.postContainer}>
      <View row spread bottom>
        <View row centerV>
          <FastImage
            style={styles.postUserImage}
            source={{
              uri: "https://unsplash.it/400/400?image=1",
            }}
            resizeMode={FastImage.resizeMode.contain}
          />
          <View>
            <Text style={styles.postAuthor}>{item.author}</Text>
            <Text style={styles.postCreatedAt}>
              {item.createdAt.toDateString()}
            </Text>
          </View>
        </View>

        <Text style={styles.postTimeStamp}>3d</Text>
      </View>

      <Text style={styles.postTitle}>{item.title}</Text>

      <FastImage
        style={styles.postImage}
        source={{
          uri: "https://unsplash.it/400/400?image=1",
        }}
        resizeMode={FastImage.resizeMode.cover}
      />

      <Text style={styles.postMessage}>{item.message}</Text>

      <View row marginT-10>
        <Button
          label="36"
          iconOnRight
          outline
          size={Button.sizes.medium}
          backgroundColor={Colors.blue8}
          iconSource={() => (
            <Ionicons
              name="thumbs-up-outline"
              size={18}
              color={Colors.violet1}
              style={styles.actionIcon}
            />
          )}
        />

        <Button
          marginL-10
          label="72"
          iconOnRight
          outline
          size={Button.sizes.medium}
          backgroundColor={Colors.blue8}
          iconSource={() => (
            <Ionicons
              name="chatbox-ellipses-outline"
              size={18}
              color={Colors.violet1}
              style={styles.actionIcon}
            />
          )}
        />

        <Button
          marginL-10
          iconOnRight
          outline
          size={Button.sizes.medium}
          backgroundColor={Colors.blue8}
          iconSource={() => (
            <Ionicons
              name="share-outline"
              size={18}
              color={Colors.violet1}
              style={styles.actionShareIcon}
            />
          )}
        />
      </View>
    </View>
  );
}
