/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState, useEffect, useRef} from 'react';
import { Text, SafeAreaView, ScrollView, Button } from 'react-native';
import MyText from './components/MyText';
import styles from './components/styles';
import ItemView from './components/ItemView';
import { ThemeProvider } from './components/ThemeProvider';
import { ThemeToggle } from './components/ThemeToggle';
import useToggle from './customHooks/useToggle';


const App = () => {

  const scrollViewRef = useRef(null);
  const onScrollToTop = () => {
    scrollViewRef.current.scrollTo(0, 0, true);
  };

  const [textWithState, setText] = useState('original state(click me)');

  useEffect(() => {
    console.log('The component has rendered');
  }, []);

  useEffect(() => {
    console.log('useState text has changed to ' + textWithState);
  }, [textWithState]);

  let listItems = Array(100).fill(0);

  const [isOn, toggleIsOn] = useToggle(false);

  return (
    <SafeAreaView>
        {/* basic UI */}
        {/* <View style={styles.normalBox}><Text>this is the header</Text></View>
        <MyText/>
        <View style={styles.normalBox}><Text>this is the footer</Text></View>
        <ItemView name={'table'} price={'$21'} /> */}

        <Text onPress={() => setText('new state')}>{textWithState}</Text>

        <ScrollView style={{height: 200}} ref={scrollViewRef}>
          {listItems.map((value, index) => (<Text key={index}>Hello World!</Text>))}
        </ScrollView>
        <Button onPress={onScrollToTop} title="Scroll To Top" />

        <ThemeProvider>
            <ThemeToggle />
        </ThemeProvider>

        <Button title={isOn ? 'ON' : 'OFF'} onPress={toggleIsOn} />

    </SafeAreaView>
  );
};

export default App;
