import React, { useEffect } from "react";
import { View, Text } from "react-native";
import CheckLogin from "../utils/CheckLogin";
export default function Message() {
  useEffect(() => {
    // CheckLogin(undefined, undefined, undefined, "Messages")
    //   .then((val) => {
    //     console.log(val);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
  }, []);
  return (
    <View>
      <Text>Messages</Text>
    </View>
  );
}
