import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import AnimatedTopTab from '../AnimatedTopTab';
import FlatListCarousel from '../FlatListCarousel';
import ParallaxCarousel from '../ParallaxCarousel';
import AnimatedProgressBar from '../AnimatedProgressBar';
import DonutChart from '../DonutChart';
import AnimatedFlatListPicker from '../AnimatedFlatListPicker';
import CountDownTimer from '../CountDownTimer';
import MainScreen from '../MainScreen';

const Stack = createStackNavigator()

const MainNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode='none'>
        <Stack.Screen name="MainScreen" component={MainScreen} />
        <Stack.Screen name="AnimatedTopTab" component={AnimatedTopTab} />
        <Stack.Screen name="FlatListCarousel" component={FlatListCarousel} />
        <Stack.Screen name="ParallaxCarousel" component={ParallaxCarousel} />
        <Stack.Screen name="AnimatedProgressBar" component={AnimatedProgressBar} />
        <Stack.Screen name="DonutChart" component={DonutChart} />
        <Stack.Screen name="AnimatedFlatListPicker" component={AnimatedFlatListPicker} />
        <Stack.Screen name="CountDownTimer" component={CountDownTimer} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default MainNavigator;