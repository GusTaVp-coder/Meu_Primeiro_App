import React, {useState} from "react";
import {SafeAreaView, Alert, View, StyleSheet, Image, Text, TouchableOpacity, TextInput, KeyboardAvoidingView} from "react-native";
import * as screen from "../constants/dimensions";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { NavigationHelpersContext } from "@react-navigation/core";

export default function LoginScreen({navigation:{navigate}}){

  const [userName, setUserName] = useState("");

  async function storeUser(){
    try{
        await AsyncStorage.setItem("user", userName)
    }catch(e){
      console.log(e);
    }
  }

  function Login(){
    if(userName === ""){
      Alert.alert("Você precisa inserir um nome de usuário!");
    }else{
      storeUser();
      navigate("Logged");
    }
  }

  return(
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Image
        source={require("../assets/images/covidTitle.png")} 
        style={styles.tittleImage}
        resizeMode={"contain"}/>
      </View>
      <View>
        <Image 
        source={require("../assets/images/corona-doctor.gif")} 
        style={styles.gifImage}
        resizeMode={"cover"}/>
      </View>
      <KeyboardAvoidingView behavior={"position"}>
        <TextInput style={styles.usernameInput}
        placeholder={"USUÁRIO"}
        autoCapitalize={"none"}
        autoCorrect={false}
        value={userName}
        onChangeText={(newText) => setUserName(newText)}
        />
      </KeyboardAvoidingView>
      <TouchableOpacity style={styles.submitButton}
      onPress={() => Login()}>
        <Text style ={styles.buttonText}>Entrar</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );

}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  header: {
    marginTop: screen.height * 0.08,
    alignItems: "flex-end",
  },
  tittleImage: {
    width: screen.width * 0.8,
    height: screen.height * 0.2,
    marginRight: screen.width * 0.04,
  },
  gifImage: {
    alignSelf: "center",
    marginLeft: screen.width * 0.07,
    width: screen.width * 1.2,
    height: screen.height * 0.45,
  },
  usernameInput: {
    width: screen.width * 0.9,
    height: screen.height * 0.05,
    alignSelf: "center",
    marginVertical: screen.height * 0.04,
    backgroundColor: "#f5f5f5",
    borderRadius: screen.width * 0.03,
    color: "#333",
    fontSize: screen.height * 0.025,
    paddingHorizontal: screen.width * 0.03,
  },
  submitButton: {
    width: screen.width * 0.2,
    height: screen.height * 0.06,
    backgroundColor: "#75ffAF",
    alignSelf: "center",
    borderRadius: screen.width * 0.02,
    alignItems: "center",
    justifyContent: "center"
  },
  buttonText: {
    color: "#FFFFFF",
    fontWeight: "bold",
    fontSize: screen.width * 0.04,
  }
});