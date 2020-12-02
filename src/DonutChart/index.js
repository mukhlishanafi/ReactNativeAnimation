/**
 * Inspiration: https://dribbble.com/shots/6971340-Anthill-Real-Estate-Home-Animated
 */

import * as React from 'react';
import { Text, StatusBar, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import Donut from './Donut'

const data = [{
  percentage: 8,
  color: 'tomato',
  max: 10
}, {
  percentage: 14,
  color: 'skyblue',
  max: 20
}, {
  percentage: 92,
  color: 'gold',
  max: 100
}, {
  percentage: 240,
  color: '#222',
  max: 500,
  radius: 200,
  strokeWidth: 40,
}]

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar hidden />
      {/* <Donut /> */}
      <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', flexWrap: 'wrap', alignItems: 'center' }}>
        {data.map((p, i) => {
          return <Donut key={i} percentage={p.percentage} color={p.color} delay={500 + 100 * i} max={p.max} radius={p.radius} strokeWidth={p.strokeWidth} />
        })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#fff',
    padding: 8,
    alignItems: 'center',
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

// /**
//  * Inspiration: https://dribbble.com/shots/6971340-Anthill-Real-Estate-Home-Animated
//  */

// import * as React from 'react';
// import { Text, StatusBar, View, StyleSheet } from 'react-native';
// import Constants from 'expo-constants';
// import Donut from './Donut'

// const data = [{
//   percentage: 8,
//   color: 'tomato',
//   max: 10
// }, {
//   percentage: 14,
//   color: 'skyblue',
//   max: 20
// }, {
//   percentage: 92,
//   color: 'gold',
//   max: 100
// }, {
//   percentage: 240,
//   color: '#222',
//   max: 500
// }]

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <StatusBar hidden/>
//       <View style={{flexDirection: 'row', justifyContent: 'space-evenly', flexWrap: 'wrap', alignItems: 'center'}}>
//         {data.map((p, i) => {
//           return <Donut key={i} percentage={p.percentage} color={p.color} delay={500 + 100 * i} max={p.max}/>
//         })}
//       </View>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     paddingTop: Constants.statusBarHeight,
//     backgroundColor: '#fff',
//     padding: 8,
//   },
//   paragraph: {
//     margin: 24,
//     fontSize: 18,
//     fontWeight: 'bold',
//     textAlign: 'center',
//   },
// });