import React from "react";
import {View, Text, SafeAreaView, StyleSheet, Image, FlatList} from "react-native";
import * as screen from "../constants/dimensions";
import CountryBoxItem from "../components/CountryBoxItem";

export default function StatsScreen(){
    const countryName = [{country: "Brasil"}, {country: "Israel"}];
    return (
    <SafeAreaView style={styles.container}>
        <View style={styles.header}>
            <Image
            source={require("../assets/images/covidTitle_small.png")}
            style={styles.headerTitle}
            resizeMode={"contain"}/>
        </View>
        <FlatList
        data={countryName}
        renderItem={CountryBoxItem}
        keyExtractor={(item) => item.country}
        resizeMode="contain"/>
    </SafeAreaView>
)}
const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    header:{
        marginTop: screen.height * 0.06,
        paddingHorizontal: screen.width * 0.04,
    },
    headerTitle:{
        width: screen.width * 0.8,
        height: screen.height * 0.1,
    },
})