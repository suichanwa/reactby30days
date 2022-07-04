import React from "react";
import {View, Text, Image, StyleSheet, SafeAreaView, TouchableOpacity} from "react-native";
import {FontAwesome} from "@expo/vector-icons";

export default function Screen(props) {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.backButton}>
                <TouchableOpacity onPress={props.onPress}>
                    <FontAwesome name="arrow-left" size={30} color="white"/>
                </TouchableOpacity>
            </View>
            <View style={styles.title}>
                <Text style={styles.titleText}>{props.title}</Text>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    text: {
        color: "#161616",
        fontSize: 20,
        fontWeight: "bold",
    }
})