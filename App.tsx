/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState, useEffect, useRef} from 'react';
import { Text, SafeAreaView, ScrollView, Button, Image } from 'react-native';
import MyText from './components/MyText';
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

  const [imageSource, setImageSource] = useState('https://via.placeholder.com/150');

  return (
    <SafeAreaView>
        {/* basic UI */}
        {/* <View style={styles.normalBox}><Text>this is the header</Text></View>
        <View style={styles.normalBox}><Text>this is the footer</Text></View>
        <ItemView name={'table'} price={'$21'} /> */}

        <MyText name={''}/>

        <Text onPress={() => setText('new state')}>{textWithState}</Text>

        <ScrollView
          contentContainerStyle={{backgroundColor: 'green'}}
          showsHorizontalScrollIndicator={true}
          horizontal={true}
          ref={scrollViewRef}
          onScroll={() => {
            console.log('scrollView is now scrolling');
          }}
        >
          {listItems.map((value, index) => (<Text style={{padding: 20}} key={index}>Hello World!</Text>))}
        </ScrollView>
        <Button onPress={onScrollToTop} title="Scroll To Top" />

        <ThemeProvider>
            <ThemeToggle />
        </ThemeProvider>

        <Button title={isOn ? 'ON' : 'OFF'} onPress={toggleIsOn} />

        <Image
          source={{uri: imageSource}}
          style={{width: 100, height: 100, backgroundColor: 'red'}}
          resizeMode={'stretch'}
          onError={() => {
            console.log('Error has been detected while loading an image');
            // call setImageSource to set the default image
            // setImageSource()
          }}
        />

    </SafeAreaView>
  );
};

export default App;
