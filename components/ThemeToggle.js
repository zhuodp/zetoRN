import React, { useContext } from "react";
import { Button, View, Text } from "react-native";
import { ThemeContext } from "./ThemeProvider";

export const ThemeToggle = () => {
    const {theme, toggleTheme} = useContext(ThemeContext);

    return <View>
        <Text style = {{ backgroundColor: theme == 'dark' ? 'grey' : 'white'}}>CurrentTheme: {theme}</Text>
        <Button title="toggle theme" onPress={toggleTheme}></Button>
    </View>
}