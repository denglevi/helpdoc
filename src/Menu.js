import React,{Component} from 'react';
import {View,TouchableOpacity,Text,Button,ListView,Image,TouchableHighlight,Alert} from 'react-native';

export class Menu extends Component {

  constructor(props) {
    super(props);
    var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows([
        {"text":'PHP',"icon":require('./assets/images/bullet_php.png')}, 
        {"text":'JAVA',"icon":require('./assets/images/bullet_php.png')}, 
        {"text":'PYTHON',"icon":require('./assets/images/bullet_php.png')}, 
        {"text":'JAVASCRIPT',"icon":require('./assets/images/bullet_php.png')}, 
        {"text":'C++',"icon":require('./assets/images/bullet_php.png')}, 
        {"text":'C',"icon":require('./assets/images/bullet_php.png')}, 
        {"text":'GO',"icon":require('./assets/images/bullet_php.png')}
        ]),
    };
  }

  render() {
    return (
      <View style={{flex:1,flexDirection:"column"}} >

        <View style={{
          height:50,backgroundColor:"white",
          paddingTop:5,
          flexDirection: 'column',
          paddingLeft:10
          }}>
          <Text style={{color:"#000",fontSize:20}}>HelpDoc Tool</Text>
          <Text style={{color:"#000",fontSize:8}}>Power by denglevi version:0.1.0</Text>
        </View>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={this._renderRow}
          style={{flex:1,flexDirection:"column",paddingLeft:20,marginTop:10}}
        />
        <View>
          <Text style={{paddingLeft:18,color:"white"}}>设置</Text>
        </View>
        
        <TouchableOpacity onPress={()=>{ 
          this._close();
        }} style={{height:50}}>
          <Text style={{paddingLeft:20,color:"white"}}>退出</Text>
        </TouchableOpacity>
      </View>
    )
  }

  _renderRow(rowData){

    return (
      <TouchableOpacity onPress={() => {
          Alert.alert("test");
          this._close();
        }}>
            <View style={{flex:1,flexDirection:"row",height:20}}>
            <Image style={{width:15,height:15,marginRight:10}} source={rowData.icon}></Image>
            <Text style={{color:"white",fontSize:10}}>{rowData.text}</Text>
            </View>
        </TouchableOpacity>
    );
  }

  _close(){
    this.props.close();
  }
}
