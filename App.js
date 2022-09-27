import indexScreen from "./src/Screens/indexScreen";
import showScreen from "./src/Screens/showScreen";
import CreateScreen from "./src/Screens/CreateScreen";
import EditScreen from "./src/Screens/EditScreen";
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";

import React from "react";
import { Provider } from "./src/context/BlogContext";

const navigator = createStackNavigator(
  {
    Index: indexScreen,
    Show: showScreen,
    Create: CreateScreen,
    Edit: EditScreen,
  },
  {
    initialRouteName: "Index",
    defaultNavigationOptions: {
      title: "Blogs",
    },
  }
);
const App = createAppContainer(navigator);

export default () => {
  return (
    <Provider>
      <App />
    </Provider>
  );
};
