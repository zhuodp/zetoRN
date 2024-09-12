import React from "react";
import { Alert, Text } from "react-native";
import styles from "./styles";

const MyText = () => {
    const handleClick = () => {
        Alert.alert('Alert', 'The text has been clicked');
    };

    return (
        <Text style={[styles.bigRed]} onPress={handleClick}>
            This is the body text3
        </Text>
    );
};

export default MyText;