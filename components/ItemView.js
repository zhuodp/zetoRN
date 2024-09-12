import React from "react";
import { View, Text } from "react-native";

const ItemView = ({name, price}) => {
    return <View>
        <Text>{name}</Text>
        <Text>{price}</Text>
    </View>
}

export default ItemView