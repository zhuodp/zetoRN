import React from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';

const ItemView = ({name, price}) => {
    return <View>
        <Text>{name}</Text>
        <Text>{price}</Text>
    </View>;
};

ItemView.PropTypes = {
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
};

export default ItemView;
