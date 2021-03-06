/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Button } from 'react-native';
import {
  VictoryBar,
  VictoryChart,
  VictoryTheme,
  VictoryAxis
} from 'victory-native';
import Reduxdata from './src/Reduxdata';
import { getData } from './actions';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu'
});

const data = [
  { quarter: 1, earnings: 900 },
  { quarter: 2, earnings: 1650 },
  { quarter: 3, earnings: 1420 },
  { quarter: 4, earnings: 1900 }
];

getData();

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <VictoryChart
          width={350}
          theme={VictoryTheme.material}
          domainPadding={20}
        >
          <VictoryAxis
            tickValues={[1, 2, 3, 4]}
            tickFormat={['quarter ', '2', '3', '4']}
          />
          <VictoryBar data={data} x="quarter" y="earnings" />
        </VictoryChart>

        <Button
          onPress={() => alert('pressed')}
          title="press me here"
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
        />
        <Reduxdata />
      </View>
    );
  }
}

type Props = {};
// export default class App extends Component<Props> {
//   render() {
//     return (
//       <View style={styles.container}>
//         <Text style={styles.welcome}>hello to React Native!</Text>
//         <Text style={styles.instructions}>started already, edit App.js</Text>
//         <Text style={styles.instructions}>{instructions}</Text>
//         <VictoryChart width={350} theme={VictoryTheme.material}>
//           <VictoryBar data={data} x="quarter" y="earnings" />
//         </VictoryChart>
//         <Heading />

//       </View>
//     );
//   }
// }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#C5FCF8'
  }
});
