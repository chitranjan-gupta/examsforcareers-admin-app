import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import Tabs from "./tabs";
export default function Home() {
  return (
    <NavigationContainer>
      <Tabs />
    </NavigationContainer>
  );
}
