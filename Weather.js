import React from "react";
import {StyleSheet, View, Text, StatusBar} from "react-native";
import PropTypes from "prop-types";
import {MaterialCommunityIcons} from "@expo/vector-icons";
import {LinearGradient} from "expo-linear-gradient";

const weatherOptions = {
    Thunderstorm: {
        iconName : "weather-lightning",
        gradient : ["#373B44,#4286f4"],
        title : "Thunderstorm",
        subtitle : "Actuallym outside of the house."
    },
    Drizzle: {
        iconName : "weather-hail",
        gradient : ["#89F7FE","#66A6FF"],
        title : "Drizzle",
        subtitle : "Is like rain, but gay."
    },
    Rain: {
        iconName : "weather-rainy",
        gradient : ["#00C6Fb", "#005BEA"],
        title : "Rain",
        subtitle : "For more info look outside."
    },
    Snow: {
        iconName : "weather-snowy",
        gradient : ["#6DE2FC","B9B6E5"],
        title : "Snow",
        subtitle : "Do you want to build a snowman?."
    },
    Atmosphere: {
        iconName : "weather-hail",
        gradient : ["#89F7FE", "#66A6FF"],
        title : "Atmosphere"
    },
    Clear: {
        iconName : "weather-sunny",
        gradient : ["#FF7300","#FEF253"],
        title : "Clear",
        subtitle : "Sunny!."
    },
    Clouds: {
        iconName : "weather-cloudy",
        gradient : ["#D7D2CC","#304352"],
        title : "Clouds",
        subtitle : "Just don't go outside."
    },
    Mist: {
        iconName : "weather-hail",
        gradient : ["#4DA0B0","#D39D38"],
        title : "Mist",
        subtitle : "i'm blind."
    },
    Haze: {
        iconName : "weather0hail",
        gradient : ["#4DA0B0","#D39D38"],
        title : "Haze",
        subtitle : "Just don't go outside."
    },
    Dust: {
        iconName : "weather-hail",
        gradient : ["#4DA0B0","#D39D38"],
        title : "Dust",
        subtitle : "Fucking China."
    }
 //   Smoke: {
 //       iconName : "",
 //       gradient : []
 //   },
 //   Fog: {
 //       iconName : "",
 //       gradient : []
 //   },
 //   Sand: {
 //       iconName : "",
 //       gradient : []
 //   },
 //   Squall: {
 //       iconName : "",
 //       gradient : []
 //   },
 //   Tornado: {
 //       iconName : "",
 //       gradient : []
 //   }

}

export default function Weather({temp, condition}){
    return (
        <LinearGradient 
            colors={weatherOptions[condition].gradient}
            style={styles.container}
            >
            <StatusBar barStyle="light-content"/>
            <View style={styles.halfContainer}>
            <MaterialCommunityIcons 
                size={90} 
                name={weatherOptions[condition].iconName} 
                color="white"
            />
                <Text style={styles.temp}>
                    {temp}°
                </Text>
            </View>
            <View style={{...styles.halfContainer,...styles.textContainer}}>
                <Text style={styles.title}>{weatherOptions[condition].title}</Text>
                <Text style={styles.subtitle}>{weatherOptions[condition].subtitle}</Text>
            </View>
        </LinearGradient>
    );
}
Weather.propTypes = {
    temp:PropTypes.number.isRequired,
    condition : PropTypes.oneOf([
        "Thunderstorm",
        "Drizzle",
        "Rain",
        "Snow",
        "Atmosphere",
        "Clear",
        "Clouds",
        "Mist",
        "Smoke",
        "Haze",
        "Dust",
        "Fog",
        "Sand",
        "Squall",
        "Tornado"
    ]).isRequired
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"center",
        alignItems:"center"

    },
    halfContainer:{
        flex:1,
        justifyContent:"center",
        alignItems:"center"
    },
    temp:{
        fontSize : 27,
        color:"white"
    },
    title:{
        fontSize:34,
        fontWeight:"300",
        color:"white",
        marginBottom : 10        
    },
    subtitle: {
        fontSize : 25,
        fontWeight:"600",
        color:"white"
    },
    textContainer:{
        paddingHorizontal:20,
        alignItems:"flex-start"
    }
});