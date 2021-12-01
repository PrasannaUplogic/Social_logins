// React Native Video Library to Play Video in Android and IOS
// https://aboutreact.com/react-native-video/

// import React in our code
import React, { useState, useRef } from 'react';

// import all the components we are going to use
import { SafeAreaView, StyleSheet, Text, View, Pressable } from 'react-native';

//Import React Native Video to play video
import Video from 'react-native-video';
import * as ImagePicker from 'react-native-image-picker';
//Media Controls to control Play/Pause/Seek and full screen
import
MediaControls, { PLAYER_STATES }
    from 'react-native-media-controls';

const Video_player = () => {
    const videoPlayer = useRef(null);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);
    const [isFullScreen, setIsFullScreen] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [paused, setPaused] = useState(false);
    const [video, setvideo] = useState({});
    const [video_uri, setvideo_uri] = useState("");
    const [
        playerState, setPlayerState
    ] = useState(PLAYER_STATES.PLAYING);
    const [screenType, setScreenType] = useState("contain");

    const onSeek = (seek) => {
        //Handler for change in seekbar
        videoPlayer.current.seek(seek);
    };

    const onPaused = (playerState) => {
        //Handler for Video Pause
        setPaused(!paused);
        setPlayerState(playerState);
    };

    const onReplay = () => {
        //Handler for Replay
        setPlayerState(PLAYER_STATES.PLAYING);
        videoPlayer.current.seek(0);
    };

    const onProgress = (data) => {
        // Video Player will progress continue even if it ends
        if (!isLoading && playerState !== PLAYER_STATES.ENDED) {
            setCurrentTime(data.currentTime);
        }
    };

    const onLoad = (data) => {
        setDuration(data.duration);
        setIsLoading(false);
    };

    const onLoadStart = (data) => setIsLoading(true);

    const onEnd = () => setPlayerState(PLAYER_STATES.ENDED);

    const onError = () => alert('Oh! ', error);

    const exitFullScreen = () => {
        alert('Exit full screen');
    };

    const enterFullScreen = () => { };

    const onFullScreen = () => {
        setIsFullScreen(isFullScreen);
        if (screenType == 'content') setScreenType('cover');
        else setScreenType('content');
    };

    const renderToolbar = () => (
        <View>
            <Text style={styles.toolbar}> toolbar </Text>
        </View>
    );

    const onSeeking = (currentTime) => setCurrentTime(currentTime);

    // useEffect(() => {
    //     setvideo(video.assets[0].uri)
    // }, [video]);
    const selectVideo = async () => {
        ImagePicker.launchImageLibrary({ mediaType: 'video', includeBase64: true }, (response) => {
            console.log(response);
            // this.setState({ video: response, video_uri: response.assets[0].uri });
            console.log("response.assets[0].uri", response.assets[0].uri)
            setvideo(response)
            setvideo_uri(response.assets[0].uri)
            console.log("video_uri", video_uri)
        })
    }

    return (
        <View style={{ alignItems: "center", justifyContent: "center" , height:"100%", width:"100%"}}>
          {
              video_uri !=""&&
               <View style={{ height: 500, width:"90%" }}>
                <Video
                    onEnd={onEnd}
                    onLoad={onLoad}
                    onLoadStart={onLoadStart}
                    onProgress={onProgress}
                    paused={paused}
                    ref={videoPlayer}
                    resizeMode={screenType}
                    onFullScreen={isFullScreen}
                    source={{
                        uri: video_uri,
                        // 'https://file-examples-com.github.io/uploads/2017/04/file_example_MP4_480_1_5MG.mp4',
                    }}
                    style={styles.mediaPlayer}
                    volume={10}
                />
                <MediaControls
                    duration={duration}
                    isLoading={isLoading}
                    mainColor="#333"
                    onFullScreen={onFullScreen}
                    onPaused={onPaused}
                    onReplay={onReplay}
                    onSeek={onSeek}
                    onSeeking={onSeeking}
                    playerState={playerState}
                    progress={currentTime}
                    toolbar={renderToolbar()}
                />


            </View>
          } 
            <Pressable
                onPress={() => selectVideo()}
                style={{ height: 50, width: 150, marginTop: 10, borderRadius: 25, borderWidth: 1, alignItems: "center", justifyContent: "center" }}
            >
                <Text>Select video</Text>
            </Pressable>
        </View>

    );
};

export default Video_player;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    toolbar: {
        marginTop: 30,
        backgroundColor: 'white',
        padding: 10,
        borderRadius: 5,
    },
    mediaPlayer: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        backgroundColor: 'red',
        justifyContent: 'center',
        marginBottom: 10
    },
});

// import React, { Component } from 'react';
// import { View, Pressable, Text, Icon, StyleSheet } from 'react-native';

// import * as ImagePicker from 'react-native-image-picker';
// import Video from 'react-native-video';

// export default class Video_audio_picker extends Component {

//     constructor(props) {
//         super(props);
//         this.state = {
//             video: {},
//             video_uri: ""

//         }
//     }

//     selectVideo = async () => {
//         ImagePicker.launchImageLibrary({ mediaType: 'video', includeBase64: true }, (response) => {
//             console.log(response);
//             this.setState({ video: response, video_uri: response.assets[0].uri });
//             console.log("video_uri",this.state.video_uri)
//         })
//     }

//     render() {
//         return (
//             <View style={{
//                 flex: 1,
//                 justifyContent: "center", alignItems: "center"
//             }}>
//                 {
//                     this.state.video_uri == "" &&

//                     <View style={{height:200, width:"100%", backgroundColor: 'red',}}>
//                         <Video
//                             onEnd={ () => console.log("onEnd")}
//                             onLoad={ () => console.log("onLoad")}
//                             onLoadStart={ () => console.log("onLoadStart")}
//                             onProgress={ () => console.log("onProgress")}
//                             paused={ () => console.log("paused")}
//                             ref={ ref => 
//                                 this.player = ref
//                             }   
//                             resizeMode={"contain"}
//                             onFullScreen={ () => console.log("isFullScreen")}
//                             source={{uri:"https://www.learningcontainer.com/wp-content/uploads/2020/05/sample-mp4-file.mp4?_=1" }  }
//                             style={styles.mediaPlayer}
//                             volume={10}

//                         />
//                     </View>

//                 }

//                 <Pressable
//                     onPress={() => this.selectVideo()}
//                     style={{ height: 50, width: 150,marginTop:10, borderRadius: 25, borderWidth:1, alignItems: "center", justifyContent: "center" }}
//                 >
//                     <Text>Select video</Text>
//                 </Pressable>



//             </View>
//         );
//     }
// };

// const styles = StyleSheet.create({
//     outerview: {
//         flex: 1
//     },
//     toolbar: {
//         marginTop: 30,
//         backgroundColor: 'white',
//         padding: 10,
//         borderRadius: 5,
//     },
//     mediaPlayer: {
//         position: 'absolute',
//         top: 0,
//         left: 0,
//         bottom: 0,
//         right: 0,
//         backgroundColor: 'black',
//         justifyContent: 'center',
//     },

// })



