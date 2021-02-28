import React from "react";
import PropTypes from "prop-types";
import { View, Text, StyleSheet, StatusBar}from "react-native";
import {MaterialCommunityIcons} from "@expo/vector-icons";
import { LinearGradient } from 'expo-linear-gradient';

const weatherOptions = {
    Haze:{
        iconName:"weather-fog",
        gradient:["#C9D6FF", "#E2E2E2"],
        title: "Haze",
        subtitle: "Just don't go outside"
    },
    Clouds:{
        iconName:"cloud",
        gradient:["#BBD2C5", "#536976"],
        title: "Cloud",
        subtitle: "many clouds"
    },
    Thunderstorm:{
        iconName:"weather-lightning",
        gradient:["#403B4A", "#E7E9BB"],
        title: "Thunderstorm",
        subtitle: "Just don't go outsid"
    },
    Drizzle:{
        iconName:"weather-hail",
        gradient:["#ADA996", "#EAEAEA"],
        title: "Drizzle",
        subtitle: "It's drizzle raining"
    },
    Rain:{
        iconName:"weather-rainy",
        gradient:["#74ebd5", "#ACB6E5"],
        title: "Rain",
        subtitle: "It's raining no way"
    },
    Snow:{
        iconName:"weather-snowy-heavy",
        gradient:["#ffffff", "#ACB6E5"],
        title: "Snow",
        subtitle: "Time to clear the snow"
    },
    Atmosphere:{
        iconName:"weather-hurricane",
        gradient:["#636363", "#a2ab58"],
        title: "Atmosphere",
        subtitle: "Just don't go outside"
    },
    Clear:{
        iconName:"weather-sunny",
        gradient:["#fffc00","#F37335"],
        title: "Sunny",
        subtitle: "So nice weather"
    },
};

export default function Weather({temp, condition}){
    return (
       <LinearGradient
        colors={weatherOptions[condition].gradient}
        style={styles.container}>
       <StatusBar barStyle="light"/>
       <View style={styles.halfContainer}>
         <MaterialCommunityIcons name={weatherOptions[condition].iconName} size={96} color="white" />
         <Text style={styles.temp}>{temp}°</Text>
       </View>
       <View style={{...styles.halfContainer, ...styles.textContainer}}>
           <Text style={styles.title}>{weatherOptions.[condition].title}</Text>
           <Text style={styles.subtitle}>{weatherOptions.[condition].subtitle}</Text>
       </View>
       </LinearGradient>
    );
}

Weather.propTypes = {
    temp:PropTypes.number.isRequired,
    condition: PropTypes.oneOf(["Thunderstorm", "Drizzle", "Rain", "Snow", "Atmosphere", "Clear", "Clouds", "Haze"]).isRequired
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent:"center",
        alignItems: "center"
    },
    temp:{
        fontSize:32,
        color: "white"
    },
    halfContainer: {
        flex:1,
        justifyContent:"center",
        alignItems: "center"
    },
    title: {
        color: "white",
        fontSize: 44,
        marginBottom:10 
    },
    subtitle: {
        color: "white",
        fontSize: 24
    },
    textContainer: {
        paddingHorizontal: 20,
        alignItems: "flex-start"
    }
})