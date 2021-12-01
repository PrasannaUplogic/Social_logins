import React, { Component } from 'react';
import { StyleSheet, View, ImageBackground, Text, LogBox, Image, StatusBar } from 'react-native';

LogBox.ignoreAllLogs(true)

export default class Splashscreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loadtime: true,
            default_language: ""
        };
    }
    static navigationOptions = {
        header: null
    };

    async componentDidMount() {


        setTimeout(() => {
            this.resetMenu();
        }, 1500);
    }


    resetMenu() {

        this.props.navigation.navigate('SideMenu')
        return false;

    }



    render() {
        const { navigate } = this.props.navigation;
        return (

            <View style={styles.bottom_view2}>
                <Text>Splash screen</Text>
            </View>

        );
    }
}
const styles = StyleSheet.create({
   
   
    bottom_view2: {
        width: "100%",
        height: "100%",
        alignItems: "center",
        justifyContent: "center",
    },
});
