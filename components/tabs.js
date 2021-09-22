import React from "react";
import { Text } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Exam from "./Exam";
import Result from "./Result";
import Admit from "./Admit";
import Update from "./Update";
import Message from "./Message";
import Detail from "./Detail";
import Category from "./Category";
const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarHideOnKeyboard: true,
        tabBarStyle: {
          position: "absolute",
          borderRadius: 8,
          left: 60,
          bottom: 40,
          right: 60,
          height: 60,
        },
      }}
    >
      <Tab.Screen
        name="Exam"
        component={Exam}
        options={{
          tabBarIcon: ({ color }) => (
            <Text style={{ color: color, fontSize: 30 }}>E</Text>
          ),
        }}
      />
      <Tab.Screen
        name="Detail"
        component={Detail}
        options={{
          tabBarIcon: ({ color }) => (
            <Text style={{ color: color, fontSize: 30 }}>D</Text>
          ),
        }}
      />
      <Tab.Screen
        name="Category"
        component={Category}
        options={{
          tabBarIcon: ({ color }) => (
            <Text style={{ color: color, fontSize: 30 }}>C</Text>
          ),
        }}
      />
      <Tab.Screen
        name="Result"
        component={Result}
        options={{
          tabBarIcon: ({ color }) => (
            <Text style={{ color: color, fontSize: 30 }}>R</Text>
          ),
        }}
      />
      <Tab.Screen
        name="Admit"
        component={Admit}
        options={{
          tabBarIcon: ({ color }) => (
            <Text style={{ color: color, fontSize: 30 }}>A</Text>
          ),
        }}
      />
      <Tab.Screen
        name="Update"
        component={Update}
        options={{
          tabBarIcon: ({ color }) => (
            <Text style={{ color: color, fontSize: 30 }}>U</Text>
          ),
        }}
      />
      <Tab.Screen
        name="Message"
        component={Message}
        options={{
          tabBarIcon: ({ color }) => (
            <Text style={{ color: color, fontSize: 30 }}>M</Text>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default Tabs;
