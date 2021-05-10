import AsyncStorage from "@react-native-async-storage/async-storage";
import React from "react";
import {View, Button} from "react-native";

export default function FeedScreen ({navigation:{navigate}}) {

    async function Logout(){
        try{
            await AsyncStorage.removeItem("user");
        }catch(e){
            console.log(e);
        }finally{
            navigate("Login");
        }
    }

    return(
    <View style={{flex: 1, alignItems: "center", justifyContent: "center"}}>
        <Button title="LogOut" onPress={() => Logout()}/>
    </View>
    );}

