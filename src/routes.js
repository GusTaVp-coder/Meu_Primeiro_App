import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {NavigationContainer} from "@react-navigation/native";
import React, {useEffect, useState} from "react";
import LoginScreen from "./screens/LoginScreen";
import FeedScreen from "./screens/FeedScreen";
import StatsScreen from "./screens/StatsScreen";
import { AntDesign } from '@expo/vector-icons';
import AsyncStorage from "@react-native-async-storage/async-storage";
import { set } from 'react-native-reanimated';


const Stack = createStackNavigator();

const Tab = createBottomTabNavigator();

function LoggedInFlow(){
    return(
        <Tab.Navigator tabBarOptions= {{
            labelStyle: {fontSize:16},
            activeTintColor: "#75ffaf",
        }}>
            <Tab.Screen name="feed" component={FeedScreen}
            options={{tabBarIcon: ({focused}) => <AntDesign name="profile" size={24} color={focused?"#75ffaf":"black"} />}}/>
            <Tab.Screen name="stats" component={StatsScreen} 
            options={{tabBarIcon:({focused}) => <AntDesign name="barchart" size={24} color={focused?"#75ffaf":"black"} />}}/>
        </Tab.Navigator>
    )
}

export default function Routes(){
    const [hasToken, setHasToken] = useState(null)
    const [loadingToken, setLoadingToken] = useState(true);

    async function tryLocalLoginIn(){
        try {
            const asyncUser = await AsyncStorage.getItem("user");
            asyncUser === null ? setHasToken(false) : setHasToken(true);
        }catch (e){
            console.log(e);
            setHasToken(false);
        }finally{
            setLoadingToken(false);
        }
    }

    useEffect(() => {
        tryLocalLoginIn();
    }, [])

    if(loadingToken){
        return null;
    }

    return(
        <NavigationContainer>
            <Stack.Navigator headerMode = "none"
             initialRouteName={(hasToken) ? "Logged" : "Login"}>
                <Stack.Screen name="Login" component={LoginScreen} />
                <Stack.Screen name="Logged" component={LoggedInFlow}/>
            </Stack.Navigator>
        </NavigationContainer>
    )

}