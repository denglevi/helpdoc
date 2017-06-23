import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { Slide,Slide3D,Flip } from 'react-native-flip-menu';

import {Main} from './src/Main';
import {Menu} from './src/Menu';

export class HelpDoc extends Component {
  render() {
    return (
      <View>
        <Slide Main={Main} Menu={Menu} />
      </View>
    );
  } 
}

AppRegistry.registerComponent('HelpDoc', () => HelpDoc);