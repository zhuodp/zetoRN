import React, { Component, useEffect, useState } from 'react';
import { Alert, Text } from 'react-native';
import styles from './styles';

// const MyText = () => {
//     const handleClick = () => {
//         Alert.alert('Alert', 'The text has been clicked');
//     };

//     return (
//         <Text style={[styles.bigRed]} onPress={handleClick}>
//             This is the body text3
//         </Text>
//     );
// };

const MyText = props => {
    const [name, setName] = useState('Dapei');

    useEffect(() => {
        console.log('MyTexy has been mounted');
        return () => {
            console.log('Component is now being destroyed');
        };
    }, []);


    useEffect(() => {
        console.log('The value of name has been changed');
    }, [name]);

    return(
        <Text
            style={[styles.bigRed]}
            onPress={() => {
                setName('Dapei Zhuo');
            }}>
            Hello, {name}!
        </Text>
    );
};

class MyText1 extends Component {

    constructor(props) {
        super(props);
        this.state = {
            lastName: 'Zhuo',
        };
    }

    componentDidMount() {
        console.log('componentDidMount.');
        // It is called right after the component is rendered.
    }

    componentDidUpdate(prevProps, prevState) {
        console.log('componentDidUpdate ', prevState, this.state);
        // called whem state or props of the app is changed.
    }

    componentWillUnmount() {
        console.log('component is now being destroyed!');
    }

    render() {
        return(
            <Text
                style={[styles.bigRed]}
                onPress={() => {
                    this.setState({...this.state, ...{lastName: 'Yu'}});
                }}>
                Hello, {this.props.name} {this.state.lastName}!
            </Text>
        );
    }
}

export default MyText;
