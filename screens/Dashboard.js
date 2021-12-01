import React, { Component } from 'react';
import { StyleSheet, Text, Image, Alert, StatusBar, ActivityIndicator, LogBox, BackHandler, PermissionsAndroid, Switch, FlatList, View, Dimensions, Platform, Modal, TouchableWithoutFeedback, TouchableOpacity } from 'react-native';

LogBox.ignoreAllLogs(true)

const screenheight = Dimensions.get("window").height
const screenwidth = Dimensions.get("screen").width


export default class Dashboard extends Component {
  watchId = null;
  constructor(props) {
    super(props);
    this.handleBackButtonClick = this.handleBackButtonClick.bind(this);
    this.state = {
      F_name: "",

    }
    this.baseState = this.state
  }
  async componentDidMount() {



  }


  componentWillMount() {
    BackHandler.addEventListener('hardwareBackPress', this.handleBackButtonClick);
  }

  componentWillUnmount() {
    this.subs.forEach(sub => sub.remove());
    BackHandler.removeEventListener('hardwareBackPress', this.handleBackButtonClick);
    //this.notificationListener();
  }
  componentDidFocus = async () => {
    //to clear the prev state values
    //this.setState(this.baseState)

  }

  handleBackButtonClick() {

  }


  static navigationOptions = {
    headerShown: false
  };





  render() {
    return (
      <View style={{flexDirection:"column"}}>
        <View style={{ height: "10%",width:"100%", alignItems:"flex-start" , padding:10}}>
        <TouchableOpacity onPress={()=>{ this.props.navigation.openDrawer() }}>
        <Image  source={require('./menu.png')} style={{height:50, width:50}} />
        </TouchableOpacity>
        
        </View>
        <View style={{ height: "90%", alignItems: "center", justifyContent: "center" }}>
          <Text>Click Menu </Text>
        </View>
      </View>

    )

  }
}

const styles = StyleSheet.create({
  outerview: {
    flex: 1
  },
  header_style: {
    backgroundColor: 'white',
    //borderBottomWidth: 0.8,
    //borderBottomColor: Colors.theme_fg_one,
    // marginHorizontal: "1%",
    // marginVertical: "1%",
    height: screenheight * 0.1
  },

})
