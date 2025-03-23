import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { StatusBar } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

// Screen import
import ComponentsScreen from "./src/NativeComponents/ComponentsScreen";
import TextComponent from "./src/NativeComponents/TextComponent";
import ButtonComponent from "./src/NativeComponents/ButtonComponent";
import TextInputComponent from "./src/NativeComponents/TextInputComponent";
import ImageComponent from "./src/NativeComponents/ImageComponent";
import ScrollViewComponent from "./src/NativeComponents/ScrollViewComponent";
import FlatListComponent from "./src/NativeComponents/FlatListComponent";
import SectionListComponent from "./src/NativeComponents/SectionListComponent";
import ModalComponent from "./src/NativeComponents/ModalComponent";
import ActivityIndicatorComponent from "./src/NativeComponents/ActivityIndicatorComponent";
import TouchableOpacityComponent from "./src/NativeComponents/TouchableOpacityComponent";
import KeyboardAvoidingViewComponent from "./src/NativeComponents/KeyboardAvoidingViewComponent";
import TouchableWithoutFeedbackComponent from "./src/NativeComponents/TouchableWithoutFeedbackComponent";
import TouchableHighlightComponent from "./src/NativeComponents/TouchableHighlightComponent";
import PressableComponent from "./src/NativeComponents/PressableComponent";
import StatusBarComponent from "./src/NativeComponents/StatusBarComponent";

import StateManagementScreen from "./src/StateManagement/StateManagementScreen";
import UseStateExample from "./src/StateManagement/UseStateExample";
import UseEffectExample from "./src/StateManagement/UseEffectExample";
import UseContextExample from "./src/StateManagement/UseContextExample";
import UseCallbackExample from "./src/StateManagement/UseCallbackExample";
import UseImperativeHandleExample from "./src/StateManagement/UseImperativeHandleExample";
import UseLayoutEffectExample from "./src/StateManagement/UseLayoutEffectExample";
import UseMemoExample from "./src/StateManagement/UseMemoExample";
import UseReducerExample from "./src/StateManagement/UseReducerExample";
import UseRefExample from "./src/StateManagement/UseRefExample";
import ReduxExample from "./src/StateManagement/ReduxExample";
import ContextAPIExample from "./src/StateManagement/ContextAPIExample";
import SwiperExample from "./src/StateManagement/SwiperExample";
import { colors } from "./styles/colors";

const Tab = createBottomTabNavigator();
const ComponentsStack = createNativeStackNavigator();
const StateManagementStack = createNativeStackNavigator();

// Components Stack Navigator
function ComponentsStackScreen() {
  return (
    <ComponentsStack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: colors.primary,
        },
        headerTintColor: "#fff",
        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}
    >
      <ComponentsStack.Screen
        name="ComponentsMain"
        component={ComponentsScreen}
        options={{ title: "Components" }}
      />
      <ComponentsStack.Screen
        name="TextComponent"
        component={TextComponent}
        options={{ title: "Text" }}
      />
      <ComponentsStack.Screen
        name="ButtonComponent"
        component={ButtonComponent}
        options={{ title: "Button" }}
      />
      <ComponentsStack.Screen
        name="TextInputComponent"
        component={TextInputComponent}
        options={{ title: "TextInput" }}
      />
      <ComponentsStack.Screen
        name="ImageComponent"
        component={ImageComponent}
        options={{ title: "Image" }}
      />
      <ComponentsStack.Screen
        name="ScrollViewComponent"
        component={ScrollViewComponent}
        options={{ title: "ScrollView" }}
      />
      <ComponentsStack.Screen
        name="FlatListComponent"
        component={FlatListComponent}
        options={{ title: "FlatList" }}
      />
      <ComponentsStack.Screen
        name="SectionListComponent"
        component={SectionListComponent}
        options={{ title: "SectionList" }}
      />
      <ComponentsStack.Screen
        name="ModalComponent"
        component={ModalComponent}
        options={{ title: "Modal" }}
      />
      <ComponentsStack.Screen
        name="ActivityIndicatorComponent"
        component={ActivityIndicatorComponent}
        options={{ title: "ActivityIndicator" }}
      />
      <ComponentsStack.Screen
        name="TouchableOpacityComponent"
        component={TouchableOpacityComponent}
        options={{ title: "TouchableOpacity" }}
      />
      <ComponentsStack.Screen
        name="KeyboardAvoidingViewComponent"
        component={KeyboardAvoidingViewComponent}
        options={{ title: "KeyboardAvoidingView" }}
      />
      <ComponentsStack.Screen
        name="TouchableWithoutFeedbackComponent"
        component={TouchableWithoutFeedbackComponent}
        options={{ title: "TouchableWithoutFeedback" }}
      />
      <ComponentsStack.Screen
        name="TouchableHighlightComponent"
        component={TouchableHighlightComponent}
        options={{ title: "TouchableHighlight" }}
      />
      <ComponentsStack.Screen
        name="PressableComponent"
        component={PressableComponent}
        options={{ title: "Pressable" }}
      />
      <ComponentsStack.Screen
        name="StatusBarComponent"
        component={StatusBarComponent}
        options={{ title: "StatusBar" }}
      />
    </ComponentsStack.Navigator>
  );
}

// StateManagement Stack Navigator
function StateManagementStackScreen() {
  return (
    <StateManagementStack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: colors.primary,
        },
        headerTintColor: "#fff",
        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}
    >
      <StateManagementStack.Screen
        name="StateManagementMain"
        component={StateManagementScreen}
        options={{ title: "State Management" }}
      />
      <StateManagementStack.Screen
        name="UseStateExample"
        component={UseStateExample}
        options={{ title: "useState" }}
      />
      <StateManagementStack.Screen
        name="UseEffectExample"
        component={UseEffectExample}
        options={{ title: "useEffect" }}
      />
      <StateManagementStack.Screen
        name="UseContextExample"
        component={UseContextExample}
        options={{ title: "useContext" }}
      />
      <StateManagementStack.Screen
        name="UseCallbackExample"
        component={UseCallbackExample}
        options={{ title: "useCallback" }}
      />
      <StateManagementStack.Screen
        name="UseImperativeHandleExample"
        component={UseImperativeHandleExample}
        options={{ title: "useImperativeHandle" }}
      />
      <StateManagementStack.Screen
        name="UseLayoutEffectExample"
        component={UseLayoutEffectExample}
        options={{ title: "useLayoutEffect" }}
      />
      <StateManagementStack.Screen
        name="UseMemoExample"
        component={UseMemoExample}
        options={{ title: "useMemo" }}
      />
      <StateManagementStack.Screen
        name="UseReducerExample"
        component={UseReducerExample}
        options={{ title: "useReducer" }}
      />
      <StateManagementStack.Screen
        name="UseRefExample"
        component={UseRefExample}
        options={{ title: "useRef" }}
      />
      <StateManagementStack.Screen
        name="ReduxExample"
        component={ReduxExample}
        options={{ title: "Redux" }}
      />
      <StateManagementStack.Screen
        name="ContextAPIExample"
        component={ContextAPIExample}
        options={{ title: "Context API" }}
      />
      <StateManagementStack.Screen
        name="SwiperExample"
        component={SwiperExample}
        options={{ title: "Swiper" }}
      />
    </StateManagementStack.Navigator>
  );
}

export default function App() {
  return (
    <SafeAreaProvider>
      <StatusBar backgroundColor={colors.primary} barStyle="light-content" />
      <NavigationContainer
        theme={{
          dark: true,
          colors: {
            primary: colors.primary,
            background: colors.background,
            card: colors.card,
            text: colors.text,
            border: colors.border,
            notification: colors.notification,
          },
        }}
      >
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;

              // Tab Navigator Icon
              if (route.name === "Components") {
                iconName = focused ? "cube" : "cube-outline";
              } else if (route.name === "StateManagement") {
                iconName = focused ? "git-network" : "git-network-outline";
              }

              return <Ionicons name={iconName} size={size} color={color} />;
            },
            tabBarActiveTintColor: "#fff",
            tabBarInactiveTintColor: "#808080",
            tabBarStyle: {
              backgroundColor: colors.card,
            },
            headerShown: false, // Hide tab navigator header, show only the stack navigator's header
          })}
        >
          <Tab.Screen name="Components" component={ComponentsStackScreen} />
          <Tab.Screen
            name="StateManagement"
            component={StateManagementStackScreen}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
