import React from "react";
import {
  Button,
  ListItem,
  Layout,
  Avatar,
  Divider,
  Text,
} from "@ui-kitten/components";
import { StyleSheet, View } from "react-native";
import Swipeable from "react-native-gesture-handler/Swipeable";
import { FlatList } from "react-native-gesture-handler";
import flatListData from "../../../data/flatListData";
import * as types from "../Reducer/actionsTypes";
import { useDispatch, useSelector } from "react-redux";
import {
  setUserId,
  setUserName,
  setAnonymous,
  setEmail,
  setAddress,
  setKarma,
  setUserRequests,
  setUserTasks,
  setAppTasks,
  setCurrentTask,
} from "../Reducer/actions";
import { black } from "react-native-paper/lib/typescript/src/styles/colors";

/**
 * @param props - React Native Icons
 * @description - ChatPage component renders scrollable list items
 * @returns Scrollable List Items
 */

const ProfileIcon = () => {
<<<<<<< HEAD
  const dispatch = useDispatch()
  const store = useSelector((state: any) => state.main)
  
=======
  const dispatch = useDispatch();
  const state = useSelector((state: any) => state);

>>>>>>> 19a1c145c89ac1b25739fdf4e46c33f5ff2f0cd1
  return (
    <Avatar shape="rounded" source={require("../../../assets/alan.jpg")} />
  );
};

export default function ChatPage({ navigation }: any) {
  const renderItemAccessory = () => (
    <Button size="tiny" status="primary">
      View
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
        description={`${item.task}`}
        accessoryLeft={ProfileIcon}
        accessoryRight={renderItemAccessory}
        onPress={() => navigation.navigate("Chat Feed")}
      />
    </Swipeable>
  );

  return (
    <React.Fragment>
      <Layout
        style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        level="3"
      >
        <View>
          <Text style={styles.title} category="h2">
            Messages
          </Text>
        </View>
        <Divider />
        <FlatList
          style={styles.container}
          data={flatListData}
          renderItem={renderItem}
          keyExtractor={(item, index) => index.toString()}
          showsHorizontalScrollIndicator={false}
        />
      </Layout>
    </React.Fragment>
  );
}

const styles = StyleSheet.create({
  container: {
    maxHeight: 800,
    width: "95%",
  },
  details: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    height: 70,
    marginVertical: 0,
    backgroundColor: "rgba(122, 111, 111, 0.5)",
  },
  title: {
    color: "rgb(51, 102, 255)",
    marginTop: 20,
    margin: 10,
  },
  items: {
    height: 100,
    marginTop: 5,
    marginBottom: 14,
    borderWidth: 0.5,
    borderRadius: 5,
    shadowColor: "black",
  },
  scrollView: {
    backfaceVisibility: "visible",
    marginHorizontal: 20,
  },
  textAction: {
    fontSize: 20,
  },
});
