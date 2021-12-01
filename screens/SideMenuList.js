import React, { Component } from 'react';
import { StyleSheet, Text, Image, Alert, StatusBar, ActivityIndicator, LogBox, Switch, FlatList, View, TouchableHighlight, Dimensions, Platform, Modal, TouchableWithoutFeedback } from 'react-native';
import { NavigationActions } from 'react-navigation';

const screenheight = Dimensions.get("window").height
const screenwidth = Dimensions.get("screen").width
export default class LeftSideBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      avatar: "",
    };
  }
  navigateToScreen = (route) => () => {
    const navigate = NavigationActions.navigate({
      routeName: route
    });
    this.props.navigation.dispatch(navigate);
  }

  close = async (route) => {
    this.props.navigation.navigate(route, { from: 'Dashboard' });
    this.props.navigation.closeDrawer()
  }

  _logOut = async () => {


  }
  _handleLogout = async () => {


  }

  storeData = async (res) => {
    await AsyncStorage.setItem('id', "0");
  }


  componentDidMount = async () => {
    this.subs = [
      this.props.navigation.addListener('didFocus', (payload) => this.componentDidFocus(payload)),
    ];

  }
  componentDidFocus = async () => {

  }




  render() {
    return (
      <View style={styles.outerview}>


          <View style={{ justifyContent: 'center', alignItems: 'center', height: 20 }}>
            <Text style={{ fontSize: 14, }}>{this.state.F_name} {this.state.L_name}</Text>
          </View>



          <View style={{ borderBottomWidth: 0.8, marginTop: 10, marginBottom: 10 }} />

          <TouchableHighlight style={styles.Content} onPress={() => this.close('Google_login')}>
            <Text style={styles.ContentText}>{"Google_login"}</Text>
          </TouchableHighlight>

          <TouchableHighlight style={styles.Content} onPress={() => this.close('FbLogin')}>
            <Text style={styles.ContentText}>{"FbLogin"}</Text>
          </TouchableHighlight>

          <TouchableHighlight style={styles.Content} onPress={() => this.close('DateTimepickers_reactnativepaper')}>
            <Text style={styles.ContentText}>{"DateTimepickers_reactnativepaper"}</Text>
          </TouchableHighlight>

          <TouchableHighlight style={styles.Content} onPress={() => this.close('Firebasepushnotification')}>
            <Text style={styles.ContentText}>{"Firebasepushnotification"}</Text>
          </TouchableHighlight>

          <TouchableHighlight style={styles.Content} onPress={() => this.close('Video_audio_picker')}>
            <Text style={styles.ContentText}>{"Video_audio_picker"}</Text>
          </TouchableHighlight>
          <TouchableHighlight style={styles.Content} onPress={() => this.close('Audio_player')}>
            <Text style={styles.ContentText}>{"Audio_player"}</Text>
          </TouchableHighlight>



          



        <TouchableHighlight style={{
          justifyContent: 'center',
          alignItems: 'center',
          position: 'absolute', width: '100%',
          height: 40,
          bottom: 0,
        }} onPress={() => this._logOut()}>

          <View style={{
            width: '100%',
            height: 40,

            justifyContent: 'center',
            alignItems: 'center',

          }}>
            <Text style={{
              fontSize: 14,

            }}>{"logout"}</Text>
          </View>

        </TouchableHighlight>




      </View>
    );
  }
}
const styles = StyleSheet.create({
  outerview: {
    flex: 1,
  },
  image_view: {
    height: screenheight * 0.2,
    backgroundColor: "transparent",
    justifyContent: "center",
    alignItems: "center"
  },
  image_holder_view: {
    height: 100,
    width: 100,
    borderRadius: 100,
    overflow: 'hidden',

    justifyContent: "center",
    alignItems: "center"
  },
  image_holder_view1: {
    height: 100,
    width: 100,
    borderRadius: 100,
    overflow: 'hidden',
    borderWidth: 1,


    justifyContent: "center",
    alignItems: "center"
  },
  image: {
    height: 80,
    width: 80,
    marginTop: 40,
    resizeMode: "contain",

  },
  content_view: {
    marginLeft: "8%",
    marginRight: "8%"
  },
  Content: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: 40,
  },
  ContentText: {
    fontSize: 14,

  }

})
