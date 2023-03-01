import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const AppStack = createStackNavigator();
import Splash from "./pages/Splash.js";
import Login from "./pages/Login.js";
import Register from "./pages/Register.js";
import Welcome from "./pages/Welcome.js";
import Space from "./pages/Space.js";
import SpaceDetails from "./pages/SpaceDetails.js";
import AddEvent from "./pages/AddEvent.js";

export default function Routes() {
    return (
        <NavigationContainer>
            <AppStack.Navigator screenOptions={{ headerShown: false }}>
                <AppStack.Screen name="Splash" component={Splash} options={{ headerShown: false }} />
                <AppStack.Screen name="Login" component={Login} options={{ title: 'Login' }} />
                <AppStack.Screen name="Register" component={Register} options={{ title: 'Register' }} />
                <AppStack.Screen name="Welcome" component={Welcome} options={{ title: 'Welcome' }} />
                <AppStack.Screen name="Space" component={Space} options={{ title: 'Spaces' }} />
                <AppStack.Screen name="SpaceDetails" component={SpaceDetails} options={{ title: 'Space Details' }} />
                <AppStack.Screen name="AddEvent" component={AddEvent} options={{ title: 'Add Event' }} />
            </AppStack.Navigator>
        </NavigationContainer>
    );
}
