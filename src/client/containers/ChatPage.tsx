import React from "react";
import { Button, Icon, List, ListItem, Layout } from "@ui-kitten/components";
import { StyleSheet, ScrollView, View, Text, Image } from "react-native";
import Swipeable from "react-native-gesture-handler/Swipeable";

/**
 * @param props - React Native Icons
 * @description - ChatPage component renders scrollable list items
 * @returns Scrollable List Items
 */

const mockData = new Array(8).fill({
  desc: "Thanks for the help! Here's some Karma",
});

const ProfileIcon = () => {
  return (
    <Image
      source={require("../../../assets/alan.jpg")}
      style={{ width: 30, height: 30, borderRadius: 5 }}
    />
  );
};

const HeartIcon = (props: any) => <Icon {...props} name="heart" />;

export default function ChatPage({ navigation }: any) {
  const renderItemAccessory = (props: any) => (
    <Button size="tiny" accessoryLeft={HeartIcon} status="danger">
      Delete
    </Button>
  );

  const RightActions = () => {
    return (
      <View
        style={{ flex: 1, backgroundColor: "red", justifyContent: "center" }}
      >
        <Text
          style={{
            color: "white",
            paddingHorizontal: 300,
            fontWeight: "600",
          }}
        >
          Delete?
        </Text>
      </View>
    );
  };

  const renderItem = ({ item, index }: any) => (
    <Swipeable renderRightActions={RightActions}>
      <ListItem
        style={styles.items}
        description={`${item.desc}`}
        accessoryLeft={ProfileIcon}
        accessoryRight={renderItemAccessory}
        onPress={() => navigation.navigate("ChatFeed")}
      />
    </Swipeable>
  );
  return (
    <ScrollView style={styles.scrollView}>
      <Layout
        style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        level="3"
      >
        <List
          style={styles.container}
          data={mockData}
          renderItem={renderItem}
        />
      </Layout>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    maxHeight: 800,
    width: "100%",
  },
  items: {
    height: 100,
    marginBottom: 20,
  },
  scrollView: {
    backfaceVisibility: "visible",
    marginHorizontal: 20,
  },
  textAction: {
    fontSize: 20,
  },
});
