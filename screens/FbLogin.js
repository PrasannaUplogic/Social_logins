import React, { Component } from 'react';
import { View, Pressable, Text } from 'react-native';
import { LoginButton, LoginManager, AccessToken } from 'react-native-fbsdk';

export default class FbLogin extends Component {
  render() {
    return (
      <View style={{
        flex: 1,
        justifyContent: "center", alignItems: "center"
      }}>
        {/* <LoginButton
          onLoginFinished={
            (error, result) => {
              if (error) {
                console.log("login has error: " + error);
              } else if (result.isCancelled) {
                console.log("login is cancelled.");
              } else {
                AccessToken.getCurrentAccessToken().then(
                  (data) => {
                    console.log(data.accessToken.toString())
                  }
                )
              }
            }
          }
          onLogoutFinished={() => console.log("logout.")}/> */}
        <Pressable onPress={() => {

          // LoginManager.setLoginBehavior("web_only");
          console.log("pressed!")

          LoginManager.logInWithPermissions(['public_profile', 'email', 'user_friends']).then((result) => {
            // console.log(result)
            if (result.isCancelled) {
              console.log('Login cancelled');
            } else {
              AccessToken.getCurrentAccessToken().then((data) => {
                const accessToken = data.accessToken;
                console.log("accessToken", accessToken)
                const responseInfoCallback = async (error, results) => {
                  // console.log("comming")
                  if (error) {
                    // console.log(error);
                    console.log('Error fetching data=', error.toString());
                  } else {
                    console.log('Success fetching data=', results);
                    // await this.setState(
                    //   {
                    //     email:results.email,
                    //     first_name:results.first_name, // + result.middle_name?results.middle_name:"",
                    //     last_name:results.last_name,
                    //     auth_id:results.id,
                    //     register_type:"facebook"
                    //   })
                    // result.middle_name ?
                    // this.setState({})

                  }
                };
                const infoRequest = new GraphRequest(
                  '/me',
                  {
                    accessToken,
                    parameters: {
                      fields: {
                        string: 'email,name,first_name,middle_name,last_name',
                      },
                    },
                  },
                  responseInfoCallback,
                );
                new GraphRequestManager().addRequest(infoRequest).start();
              });
            }
          }).catch((error) => {
            console.log(error)
          })
        }}
          style={{ height: 50, width: 150, borderRadius: 5, backgroundColor: "red", alignItems: "center", justifyContent: "center" }}
        >
          <Text>FB login</Text>
        </Pressable>
      </View>
    );
  }
};


