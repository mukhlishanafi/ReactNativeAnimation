import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import AnimatedTopTab from './src/AnimatedTopTab';
import FlatListCarousel from './src/FlatListCarousel';
import ParallaxCarousel from './src/ParallaxCarousel';


export default function App() {
  return (
    // <AnimatedTopTab />
    // <FlatListCarousel />
    <ParallaxCarousel />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
