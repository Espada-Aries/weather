import React from "react";
import {StyleSheet, View, Text, StatusBar} from "react-native";
import PropTypes from "prop-types";
import {MaterialCommunityIcons} from "@expo/vector-icons";
import {LinearGradient} from "expo-linear-gradient";

const weatherOptions = {
    Thunderstorm: {
        iconName : "weather-lightning",
        gradient : ["#f0c27b","#4b1248"],
        title : "落雷",
        subtitle : "雷にご注意ください。"
    },
    Drizzle: {
        iconName : "weather-hail",
        gradient : ["#89F7FE","#66A6FF"],
        title : "霧雨",
        subtitle : "散りゆく雨と霧の中からかすかに見える君の姿"
    },
    Rain: {
        iconName : "weather-rainy",
        gradient : ["#00C6Fb", "#005BEA"],
        title : "雨",
        subtitle : "恋は雨上がりのように"
    },
    Snow: {
        iconName : "weather-snowy",
        gradient : ["#e6dada","274046"],
        title : "雪",
        subtitle : "目の前、全てが真っ白になった。"
    },
 //   Atmosphere: {
 //       iconName : "weather-hail",
 //       gradient : ["#89F7FE", "#66A6FF"],
 //       title : "Atmosphere",
 //       subtitle : "Empty"
 //   },
    Clear: {
        iconName : "weather-sunny",
        gradient : ["#FF7300","#FEF253"],
        title : "晴れ",
        subtitle : "ただ君に晴れ"
    },
    Clouds: {
        iconName : "weather-cloudy",
        gradient : ["#D7D2CC","#304352"],
        title : "曇り",
        subtitle : "曇り。。"
    },
    Mist: {
        iconName : "weather-hail",
        gradient : ["#606c88","#3f4c6b"],
        title : "霧",
        subtitle : "霧の中に消えてゆく"
    },
 //   Haze: {
 //       iconName : "weather-hail",
 //       gradient : ["#4DA0B0","#D39D38"],
 //       title : "Haze",
 //       subtitle : "Empty"
 //   },
    Dust: {
        iconName : "weather-hail",
        gradient : ["#4DA0B0","#D39D38"],
        title : "Dust",
        subtitle : "PM2.5"
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