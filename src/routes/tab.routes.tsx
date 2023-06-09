import React from "react";
import { Platform } from "react-native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useTheme } from "styled-components";
import { MaterialIcons } from "@expo/vector-icons";

import { PlantSelect } from "../pages/PlantSelect";
import { MyPlants } from "../pages/MyPlants";

const { Navigator, Screen } = createBottomTabNavigator();

export function AuthRoutes() {
  const theme = useTheme()

  return (
    <Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: theme.Colors.heading,
        tabBarLabelPosition: 'beside-icon',
        tabBarStyle: {
           paddingVertical: Platform.OS === 'ios' ? 20 : 0,
           height: Platform.OS === 'ios' ? 88 : 70
        }
      }}
    >

      <Screen
        name="Nova Planta"
        component={PlantSelect}
        options={{
          tabBarIcon: (({ size, color }) => (
            <MaterialIcons
              name="add-circle-outline"
              size={size}
              color={color}
            />
          ))
        }}
      />

<Screen
        name="Minhas Plantas"
        component={MyPlants}
        options={{
          tabBarIcon: (({ size, color }) => (
            <MaterialIcons
              name="format-list-bulleted"
              size={size}
              color={color}
            />
          ))
        }}
      />

    </Navigator>
  )
}