import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import ChatPage from "../containers/ChatPage";
import ChatFeed from "../containers/ChatFeed";

const Stack = createStackNavigator();

export default function ChatRouter() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Chat Page" component={ChatPage} />
      <Stack.Screen name="Chat Feed" component={ChatFeed} />
    </Stack.Navigator>
  );
}
