import React, { Component } from 'react';
import {View,TouchableOpacity,Text,ListView} from 'react-native';

export class Main extends Component {

  constructor(props) {
    super(props);
    var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows(['class', 'function']),
    };
  }

  render() {
    return (
      <View backgroundColor="white" style={{margin:10}}>
        <TouchableOpacity onPress={()=>{ 
          this.props.open()
        }}>
          <Text style={{textAlign:"center",height:30,color:"#000",fontSize:16}}>PHP HELP DOC</Text>
        </TouchableOpacity>
      <ListView
        dataSource={this.state.dataSource}
        renderRow={(rowData) => <Text>{rowData}</Text>}
      />
      </View>
    )
  }
}
