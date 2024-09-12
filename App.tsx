/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { View, Text, SafeAreaView } from 'react-native';
import MyText from './components/MyText';
import styles from './components/styles';

const App = () => {
  return (
    <SafeAreaView>
      <View style={styles.normalBox}><Text>this is the header</Text></View>
      <MyText/>
      <View style={styles.normalBox}><Text>this is the footer</Text></View>
    </SafeAreaView>
  );
};

export default App;