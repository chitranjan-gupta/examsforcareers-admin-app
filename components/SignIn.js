import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Dimensions,
  StyleSheet,
} from "react-native";
import Home from "./Home";
import CheckLogin from "../utils/CheckLogin";
import Domain from "../utils/domain";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLogin, setLogin] = useState(false);
  const [onSubmit, setSubmit] = useState("Checking If you already signed in");
  const [isDisabled, setDisabled] = useState(true);
  useEffect(() => {
    CheckLogin().then((res) => {
      if (res) {
        setLogin(true);
      } else {
        setSubmit("Login In");
        setDisabled(false);
      }
    });
  }, []);
  const url = Domain();
  const onPress = async () => {
    const checkNum = new RegExp("^[0-9]", "g");
    const checkSpace = new RegExp(/\s/, "g");
    const checkEmail = new RegExp(
      "^[a-zA-Z0-9+_.-]+@[a-zA-Z]+[.][a-zA-Z]+$",
      "g"
    );
    const checkemail = new RegExp("email", "ig");
    //const checkUpper = new RegExp("[A-Z]", "g");
    const checkLower = new RegExp("[a-z]", "g");
    //const checkNumber = new RegExp("[0-9]", "g");
    const checkSpecial = new RegExp("[@#!%]", "g");
    if (email.trim().length < 5 || password.trim().length < 5) {
      alert("Email Or Password should be more than 5 or more characters");
      return;
    }
    if (checkSpace.test(email) || checkSpace.test(password)) {
      alert("Email Or Pasword Field should not contain white spaces");
      return;
    }
    if (checkNum.test(email)) {
      alert("email should not be a number and does not start with a number");
      return;
    }
    if (!checkEmail.test(email) || checkemail.test(email)) {
      alert("Not An Email Address");
      return;
    }
    if (password.length < 6) {
      alert("Password Should Be More than 6 character");
      return;
    }
    // if (!checkUpper.test(password)) {
    //   alert("Password Should Contain An UpperCase Letter");
    //   return;
    // }
    if (!checkLower.test(password)) {
      alert("Password Should Contain An LowerCase Letter");
      return;
    }
    // if (!checkNumber.test(password)) {
    //   alert("Password Should Contain An Number");
    //   return;
    // }
    if (!checkSpecial.test(password)) {
      alert("Password Should Contain any Of The @, #, %, !");
      return;
    }
    setDisabled(true);
    setSubmit("Submitting ...");
    const login = await fetch(`${url}/api/admin`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify({
        email: email.trim(),
        password: password.trim(),
      }),
    });
    if (login.status === 200) {
      setSubmit("Checking ...");
      if (login.headers.get("Set-Cookie")) {
        if (login.headers.get("Set-Cookie").split(";")[0].split("=")[1]) {
          try {
            CheckLogin(
              "adtoken",
              login.headers
                .get("Set-Cookie")
                .split(";")[0]
                .split("=")[1]
                .toString()
            ).then((res) => {
              if (res) {
                setLogin(true);
              } else {
                alert("Error in saving token");
                setSubmit("Login In");
                setDisabled(false);
              }
            });
          } catch (err) {
            setDisabled(false);
            setSubmit("Login In");
            console.log(err);
          }
        }
      }
    } else {
      alert("404 Admin Not Found");
    }
  };
  return (
    <>
      {isLogin ? (
        <Home></Home>
      ) : (
        <View style={styles.view}>
          <TextInput
            placeholder="Email Id"
            value={email}
            onChangeText={(text) => {
              setEmail(text);
            }}
            style={styles.textInput}
          ></TextInput>
          <TextInput
            placeholder="Password"
            value={password}
            onChangeText={(text) => {
              setPassword(text);
            }}
            style={styles.textInput}
          ></TextInput>
          <TouchableOpacity
            style={styles.submit}
            onPress={onPress}
            disabled={isDisabled}
          >
            <Text style={styles.submitText}>{onSubmit}</Text>
          </TouchableOpacity>
        </View>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  view: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
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
  submit: {
    backgroundColor: "#00b7ff",
    width: 200,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
  },
  submitText: {
    color: "#ffffff",
    fontSize: 20,
  },
});
