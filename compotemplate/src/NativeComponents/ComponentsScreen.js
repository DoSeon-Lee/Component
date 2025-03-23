import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";

const ComponentsScreen = ({ navigation }) => {
  const componentsList = [
    { name: "Text", route: "TextComponent" },
    { name: "Button", route: "ButtonComponent" },
    { name: "TextInput", route: "TextInputComponent" },
    { name: "Image", route: "ImageComponent" },
    { name: "ScrollView", route: "ScrollViewComponent" },
    { name: "FlatList", route: "FlatListComponent" },
    { name: "SectionList", route: "SectionListComponent" },
    { name: "Modal", route: "ModalComponent" },
    { name: "ActivityIndicator", route: "ActivityIndicatorComponent" },
    { name: "TouchableOpacity", route: "TouchableOpacityComponent" },
    { name: "TouchableHighlight", route: "TouchableHighlightComponent" },
    {
      name: "TouchableWithoutFeedback",
      route: "TouchableWithoutFeedbackComponent",
    },
    { name: "Pressable", route: "PressableComponent" },
    { name: "StatusBar", route: "StatusBarComponent" },
    { name: "KeyboardAvoidingView", route: "KeyboardAvoidingViewComponent" },
  ];

  return (
    <ScrollView style={styles.container}>
      <View style={styles.componentsContainer}>
        {componentsList.map((component, index) => (
          <TouchableOpacity
            key={index}
            style={styles.componentItem}
            onPress={() => navigation.navigate(component.route)}
          >
            <Text style={styles.componentName}>{component.name}</Text>
            <Text style={styles.viewDetails}>View Details &gt;</Text>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#101010",
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
    color: "#eee",
  },
  description: {
    fontSize: 16,
    marginBottom: 24,
    color: "#eee",
    lineHeight: 22,
  },
  componentsContainer: {
    marginBottom: 20,
  },
  componentItem: {
    backgroundColor: "#242423",
    padding: 16,
    borderRadius: 8,
    marginBottom: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 2,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  componentName: {
    fontSize: 16,
    fontWeight: "500",
    color: "#eee",
  },
  viewDetails: {
    fontSize: 14,
    color: "#007AFF",
  },
});

export default ComponentsScreen;
