// import { Container, Header, Content, Row, Col } from 'native-base';
import React, { useEffect, useState, useLayoutEffect } from 'react';
import { FlatList, Image, StyleSheet, SafeAreaView, View, Text, Dimensions, TouchableOpacity, Alert, BackHandler, LogBox, Button, } from 'react-native';
const screenWidth = Math.round(Dimensions.get('screen').width);
const screenHeight = Math.round(Dimensions.get('screen').height);
import { StripeProvider } from '@stripe/stripe-react-native';
import PaymentScreen from './PaymentScreen'

// import AsyncStorage from '@react-native-async-storage/async-storage';
// splash['navigationOptions'] = screenProps => ({
//   header: null
// })
export default function App(props) {

  const { navigation } = props;



  const [name, setName] = useState("")
  const [login_status, setLogin_status] = useState(0)



  function check_new_stripe() {
    console.log("StripeProvider");
    navigation.navigate("StripeProvider")
  }

  // function navigatefunc() {
  //     // setTimeout(() => {
  //         console.log("login_status", login_status)
  //         if (login_status == 1) {
  //             navigation.navigate('SideMenu')
  //         }
  //         else {
  //             navigation.navigate('login')
  //         }
  //     // }, 2000)
  // }


  return (
    <StripeProvider
      publishableKey={"pk_test_xVVyfHyNOM12eAJ5xgBhsVwc"}
      merchantIdentifier="merchant.identifier"
    >
      <PaymentScreen />
    </StripeProvider>
    // <View style={{ backgroundColor: "transparent", alignItems: "center", justifyContent: "center", flex: 1 }}>
    //   <Text>Checking login status...</Text>
    //   <Button
    //     title="Press me"
    //     onPress={() => { check_new_stripe() }}
    //   />

    // </View>
  )

}


const styles = StyleSheet.create({

  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "transparent",
  },

  activityIndicatorContainer: {
    backgroundColor: "#fff",
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },

  card: {
    padding: 10, height: "100%", borderRadius: 5, elevation: 0, width: "100%",
    backgroundColor: "white",
    borderRadius: 15,
    padding: 10,
    elevation: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.5,
    shadowRadius: 5,
  }
});