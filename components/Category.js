import React, { useState } from "react";
import {
  View,
  TextInput,
  TouchableOpacity,
  Text,
  StyleSheet,
  Dimensions,
  ScrollView,
} from "react-native";
import CheckLogin from "../utils/CheckLogin";

export default function Category() {
  const [name, setName] = useState("");
  const [onSubmit, setSubmit] = useState("Submit");
  const [isDisabled, setDisabled] = useState(false);
  const onPress = () => {
    if (name.length < 2) {
      alert("Name Should Be Greater Than Two Character");
    }
    setDisabled(true);
    setSubmit("Submitting ...");
    CheckLogin(
      undefined,
      undefined,
      JSON.stringify({ name: name, addType: "Category" })
    )
      .then((res) => {
        if (res) {
          alert("Submitted Successfully");
          setSubmit("Submit");
          setDisabled(false);
        } else {
          alert("Error In Submitting");
          setSubmit("Submit");
          setDisabled(false);
        }
      })
      .catch((err) => {
        setSubmit("Submit");
        setDisabled(false);
        console.log(err);
      });
  };
  return (
    <ScrollView>
      <View style={{ flex: 1, alignItems: "center" }}>
        <TextInput
          value={name}
          onChangeText={(text) => {
            setName(text);
          }}
          placeholder="Name"
          style={styles.textInput}
        ></TextInput>
        <TouchableOpacity
          style={{
            backgroundColor: "#00b7ff",
            width: 200,
            height: 50,
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 5,
          }}
          onPress={onPress}
          disabled={isDisabled}
        >
          <Text style={{ color: "#ffffff", fontSize: 20 }}>{onSubmit}</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  textInput: {
    borderStyle: "solid",
    borderRadius: 5,
    height: 50,
    fontSize: 20,
    marginBottom: 5,
    width: Dimensions.get("window").width - 10,
    paddingLeft: 10,
    borderBottomWidth: 1,
    borderBottomColor: "gray",
  },
});
