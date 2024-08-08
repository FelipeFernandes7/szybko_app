import { createDrawerNavigator } from "@react-navigation/drawer";
import { StyleSheet } from "react-native";
import Home from "../screens/Home";
import Day from "../screens/Day";
import Snack from "../screens/Snack";
import Order from "../screens/Order";

const Drawer = createDrawerNavigator();
export default function DrawerNavigator() {
  return (
    <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="Day" component={Day} />
      <Drawer.Screen name="Snack" component={Snack} />
      <Drawer.Screen name="Order" component={Order} />
    </Drawer.Navigator>
  );
}

const styles = StyleSheet.create({});
