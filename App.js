import { StatusBar } from 'expo-status-bar';
import React from "react";
import {Alert} from "react-native";
import Loading from "./Loading";
import * as Location from "expo-location";
import axios from "axios";
import Weather from "./Weather";

const API_KEY = "efdd779143b717e7e3e7387d34f48b40";

export default class extends React.Component{
  state = {
    isLoading:true
  };
  getWeather = async(latitude, longitude) =>{
    const {
      data:{
        main : {temp},
        weather
      }
    } = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`
    );
    this.setState({
      isLoading:false,
      condition:weather[0].main,
      temp
    });
    console.log(weather);
  }
  getLocation = async() =>{
    try{
      //throw Error();
      await Location.requestPermissionsAsync();
      const {
        coords : {latitude, longitude}
      } = await Location.getCurrentPositionAsync();
      this.getWeather(latitude, longitude);
    }catch(error){
      Alert.alert("Can't find you.", "So sad");
    }
  };
  componentDidMount(){
    this.getLocation();
  }
  render(){
    const {isLoading, temp, condition} = this.state;
    return isLoading ? <Loading/> : <Weather temp={Math.round(temp)} condition={condition}/>;
  }
}
