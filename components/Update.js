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
export default function Update() {
  const [params, setParams] = useState({
    name: "",
    intro: "",
    fee: "",
    date: "",
    req: "",
    link: "",
    addType: "New_Updates",
  });
  const [onSubmit, setSubmit] = useState("Submit");
  const [isDisabled, setDisabled] = useState(false);
  const onPress = () => {
    for (const el of Object.keys(params)) {
      const val = params[el];
      if (val.trim().length < 2) {
        alert(`${el} should be more than 2 characters`);
        return;
      }
    }
    setDisabled(true);
    setSubmit("Submitting ...");
    CheckLogin(undefined, undefined, params)
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
          value={params.name}
          onChangeText={(text) => {
            setParams({ ...params, ["name"]: text });
          }}
          placeholder="Name"
          style={styles.textInput}
        ></TextInput>
        <TextInput
          value={params.intro}
          onChangeText={(text) => {
            setParams({ ...params, ["intro"]: text });
          }}
          placeholder="Intro"
          style={styles.textInput}
        ></TextInput>
        <TextInput
          value={params.fee}
          onChangeText={(text) => {
            setParams({ ...params, ["fee"]: text });
          }}
          placeholder="Fee"
          style={styles.textInput}
        ></TextInput>
        <TextInput
          value={params.date}
          onChangeText={(text) => {
            setParams({ ...params, ["date"]: text });
          }}
          placeholder="Date"
          style={styles.textInput}
        ></TextInput>
        <TextInput
          value={params.req}
          onChangeText={(text) => {
            setParams({ ...params, ["req"]: text });
          }}
          placeholder="Requirement"
          style={styles.textInput}
        ></TextInput>
        <TextInput
          value={params.link}
          onChangeText={(text) => {
            setParams({ ...params, ["link"]: text });
          }}
          placeholder="Official Link"
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
