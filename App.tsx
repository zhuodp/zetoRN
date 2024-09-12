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
import ItemView from './components/ItemView';

const App = () => {
  return (
    <SafeAreaView>
      <View style={styles.normalBox}><Text>this is the header</Text></View>
      <MyText/>
      <View style={styles.normalBox}><Text>this is the footer</Text></View>

      // view that accepts properties
      <ItemView name={'table'} price={'$20'}></ItemView>
    </SafeAreaView>
  );
};

export default App;