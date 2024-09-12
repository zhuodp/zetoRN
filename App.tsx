/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState, useEffect, useRef} from 'react';
import { View, Text, SafeAreaView, ScrollView, Button } from 'react-native';
import MyText from './components/MyText';
import styles from './components/styles';
import ItemView from './components/ItemView';
import Toast from "react-native-toast-message";


const App = () => {
  
  const scrollViewRef = useRef(null)
  const onScrollToTop = () => {
    scrollViewRef.current.scrollTo(0, 0, true)
  }

  const [textWithState, setText] = useState('original state(click me)')

  useEffect(() => {
    console.log("The component has rendered")
  }, [])

  useEffect(() => {
    console.log("useState text has changed to " + textWithState)
  }, [textWithState])

  let listItems = Array(100).fill(0)

  return (
    <SafeAreaView>
      <View style={styles.normalBox}><Text>this is the header</Text></View>
      <MyText/>
      <View style={styles.normalBox}><Text>this is the footer</Text></View>
      <ItemView name={'table'} price={'$21'}></ItemView>

      <Text onPress={() => setText('new state')}>{textWithState}</Text>

      <ScrollView style={{height: 200}} ref={scrollViewRef}>
        {listItems.map((value, index) => (<Text key={index}>Hello World!</Text>))}
      </ScrollView>
      <Button onPress={onScrollToTop} title='Scroll To Top'></Button>
    </SafeAreaView>
  );
};

export default App;