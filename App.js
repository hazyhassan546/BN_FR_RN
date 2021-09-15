import 'react-native-gesture-handler';
import * as React from "react";
import { View, Text, StatusBar } from "react-native";
import Navigator from "./src/helpers/navigationHelper/navigationHelper";
import { Provider } from "./src/redux/provider";
import SplashScreen from "react-native-splash-screen";

class App extends React.Component {
  componentDidMount() {
    SplashScreen.hide();
  }
  render() {
    return (
      <View style={{ flex: 1 }}>
        <StatusBar animated={true} hidden={true} />
        <Provider>
          <Navigator />
        </Provider>
      </View>
    );
  }
}

export default App;
