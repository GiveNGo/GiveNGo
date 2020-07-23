import React, { useState, useEffect } from "react";
import { Avatar, Divider, Text, Spinner } from "@ui-kitten/components";
import { StyleSheet, View, ActivityIndicator } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { IconButton } from "react-native-paper";
import io from "socket.io-client";
import { GiftedChat, Bubble, Send } from "react-native-gifted-chat";

/**
 * @param props - React Native Icons
 * @description - ChatPage component renders scrollable list items
 * @returns Scrollable List Items
 */
export default function ChatFeed() {
  const [chatMessage, setChatMessage] = useState("");
  const [chatMessages, setChatMessages] = useState([]);
  const [messages, setMessages] = useState([
    {
      _id: 0,
      text: "New room created.",
      createdAt: new Date().getTime(),
      system: true,
    },
    {
      _id: 1,
      text: "Hey! Thanks for the Microservice Assist!",
      createdAt: new Date().getTime(),
      user: {
        _id: 2,
        name: "Alan",
      },
    },
  ]);

  const submitChatMessage = () => {
    const socket = io("insert IP");
    socket.emit("chat message", chatMessage);
    setChatMessage("");
  };

  const handleSend = (newMessage = []) => {
    const socket = io("Insert IP");
    socket.emit("chat message", chatMessage);
    setMessages(GiftedChat.append(messages, newMessage));
  };

  const renderBubble = (props: any) => {
    return (
      <Bubble
        {...props}
        wrapperStyle={{
          right: {
            backgroundColor: "#1084ff",
          },
        }}
        textStyle={{
          right: {
            color: "#fff",
          },
        }}
      />
    );
  };

  const renderSend = (props: any) => {
    return (
      <Send {...props}>
        <View style={styles.sendingContainer}>
          <IconButton icon="send-circle" size={32} color="#6646ee" />
        </View>
      </Send>
    );
  };

  const scrollToBottomComponent = () => {
    return (
      <View style={styles.bottomComponentContainer}>
        <IconButton icon="chevron-double-down" size={36} color="#6646ee" />
      </View>
    );
  };

  const renderLoading = () => {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#6646ee" />
      </View>
    );
  };

  return (
    <React.Fragment>
      <View style={styles.details}>
        <Avatar
          style={styles.icon}
          size="small"
          source={require("../../../assets/alan.jpg")}
        />
        <Text style={styles.title} category="h2">
          Alan
        </Text>
      </View>
      <Divider />
      <GiftedChat
        messages={messages}
        onSend={(newMessage) => handleSend(newMessage)}
        user={{ _id: 1, name: "G_P" }}
        renderBubble={renderBubble}
        placeholder="Type your message here..."
        showUserAvatar
        alwaysShowSend
        renderSend={renderSend}
        scrollToBottomComponent={scrollToBottomComponent}
        onInputTextChanged={(chatMessage) => {
          setChatMessage(chatMessage);
        }}
      />
    </React.Fragment>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 400,
    flex: 1,
    backgroundColor: "#F5FCFF",
  },
  details: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    height: 70,
    marginVertical: 0,
    backgroundColor: "grey",
  },
  title: {
    marginHorizontal: 8,
  },
  installButton: {
    marginVertical: 4,
  },
  icon: {
    justifyContent: "center",
  },
  sendingContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  bottomComponentContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  loadingContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  inputField: {
    height: 40,
    borderWidth: 2,
    borderRadius: 4,
    borderColor: "grey",
    top: 100,
  },
});
