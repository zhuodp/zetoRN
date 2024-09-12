/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState, useEffect} from 'react';
import { View, Text, SafeAreaView } from 'react-native';
import MyText from './components/MyText';
import styles from './components/styles';
import ItemView from './components/ItemView';
import Toast from "react-native-toast-message";


const App = () => {
  const [textWithState, setText] = useState('original state(click me)')

  useEffect(() => {
    console.log("The component has rendered")
  }, [])

  useEffect(() => {
    console.log("useState text has changed to " + textWithState)
  }, [textWithState])

  return (
    <SafeAreaView>
      <View style={styles.normalBox}><Text>this is the header</Text></View>
      <MyText/>
      <View style={styles.normalBox}><Text>this is the footer</Text></View>
      <ItemView name={'table'} price={'$21'}></ItemView>

      <Text onPress={() => setText('new state')}>{textWithState}</Text>
    </SafeAreaView>
  );
};

export default App;