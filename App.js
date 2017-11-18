/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  ScrollView,
  View,
} from 'react-native';
import Post from './components/Pots';

import './config/ReactotronConfig';

console.tron.log('Curso GoNative - Desafio 01');

const backgroundColorContainer = '#EE7777';
const backgroundColorHeader = '#ffffff';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: backgroundColorContainer,
  },
  header: {
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: backgroundColorHeader,
  },
  textHeader: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

class App extends Component {
  state = {
    posts: [
      {
        id: 0,
        title: 'Aprendendo React Native',
        author: 'Diego Schell Fernandes',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      },
      {
        id: 1,
        title: 'Aprendendo React Native',
        author: 'Diego Schell Fernandes',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      },
      {
        id: 2,
        title: 'Aprendendo React Native',
        author: 'Diego Schell Fernandes',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      },
    ],
  }
  render() {
    return (
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.header}>
            <Text style={styles.textHeader}> GoNative App </Text>
          </View>
          {this.state.posts.map(p => <Post key={p.id} post={p} />)}
        </View>
      </ScrollView>
    );
  }
}
export default App;
