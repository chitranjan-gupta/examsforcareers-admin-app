import React, { useState } from "react";
import {
  View,
  TextInput,
  ScrollView,
  TouchableOpacity,
  Text,
  StyleSheet,
  Dimensions,
} from "react-native";
import CheckLogin from "../utils/CheckLogin";
export default function Detail() {
  const [params, setParams] = useState({
    name: "",
    abbreviation: "",
    link: "",
    logo: "",
    intro: "",
    type: "",
    duration: "",
    times: "",
    eligibility: "",
    language: "",
    wikipedia: "",
    regSdate: "",
    regEdate: "",
    lfeedate: "",
    admit: "",
    examdate: "",
    genobcfee: "",
    scstfee: "",
    phfee: "",
    addType: "New_Detail",
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
    setSubmit("Submitting ...");
    setDisabled(true);
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
    <ScrollView style={{ flex: 1, marginBottom: 100 }}>
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
          value={params.abbreviation}
          onChangeText={(text) => {
            setParams({ ...params, ["abbreviation"]: text });
          }}
          placeholder="Abbreviation"
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
        <TextInput
          value={params.logo}
          onChangeText={(text) => {
            setParams({ ...params, ["logo"]: text });
          }}
          placeholder="Official Logo"
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
          value={params.type}
          onChangeText={(text) => {
            setParams({ ...params, ["type"]: text });
          }}
          placeholder="Type"
          style={styles.textInput}
        ></TextInput>
        <TextInput
          value={params.duration}
          onChangeText={(text) => {
            setParams({ ...params, ["duration"]: text });
          }}
          placeholder="Duration"
          style={styles.textInput}
        ></TextInput>
        <TextInput
          value={params.times}
          onChangeText={(text) => {
            setParams({ ...params, ["times"]: text });
          }}
          placeholder="Times"
          style={styles.textInput}
        ></TextInput>
        <TextInput
          value={params.eligibility}
          onChangeText={(text) => {
            setParams({ ...params, ["eligibility"]: text });
          }}
          placeholder="Eligibility"
          style={styles.textInput}
        ></TextInput>
        <TextInput
          value={params.language}
          onChangeText={(text) => {
            setParams({ ...params, ["language"]: text });
          }}
          placeholder="Language"
          style={styles.textInput}
        ></TextInput>
        <TextInput
          value={params.wikipedia}
          onChangeText={(text) => {
            setParams({ ...params, ["wikipedia"]: text });
          }}
          placeholder="Wikipedia"
          style={styles.textInput}
        ></TextInput>
        <TextInput
          value={params.regSdate}
          onChangeText={(text) => {
            setParams({ ...params, ["regSdate"]: text });
          }}
          placeholder="Registration Starting Date"
          style={styles.textInput}
        ></TextInput>
        <TextInput
          value={params.regEdate}
          onChangeText={(text) => {
            setParams({ ...params, ["regEdate"]: text });
          }}
          placeholder="Registration Ending Date"
          style={styles.textInput}
        ></TextInput>
        <TextInput
          value={params.lfeedate}
          onChangeText={(text) => {
            setParams({ ...params, ["lfeedate"]: text });
          }}
          placeholder="Last Date Of Fee Payment"
          style={styles.textInput}
        ></TextInput>
        <TextInput
          value={params.admit}
          onChangeText={(text) => {
            setParams({ ...params, ["admit"]: text });
          }}
          placeholder="Admit Card Date"
          style={styles.textInput}
        ></TextInput>
        <TextInput
          value={params.examdate}
          onChangeText={(text) => {
            setParams({ ...params, ["examdate"]: text });
          }}
          placeholder="Exam Date"
          style={styles.textInput}
        ></TextInput>
        <TextInput
          value={params.genobcfee}
          onChangeText={(text) => {
            setParams({ ...params, ["genobcfee"]: text });
          }}
          placeholder="General / OBC Fee"
          style={styles.textInput}
        ></TextInput>
        <TextInput
          value={params.scstfee}
          onChangeText={(text) => {
            setParams({ ...params, ["scstfee"]: text });
          }}
          placeholder="SC / ST Fee"
          style={styles.textInput}
        ></TextInput>
        <TextInput
          value={params.phfee}
          onChangeText={(text) => {
            setParams({ ...params, ["phfee"]: text });
          }}
          placeholder="PH Fee"
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
