/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 * 
 * packages needs:
 *  "react": "17.0.1",
    "react-native": "0.64.2",
    "react-native-paper": "^4.9.2",
    "react-native-paper-dates": "^0.5.1",
    "react-navigation": "^4.4.4"
 */

import React, { useState } from 'react';
import type { Node } from 'react';
import { SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, useColorScheme, View, Pressable, FlatList } from 'react-native';

import { Colors, Header } from 'react-native/Libraries/NewAppScreen';
import { DatePickerModal, DatePickerInput, TimePickerModal } from 'react-native-paper-dates';
// import { blue100 } from 'react-native-paper/lib/typescript/styles/colors';
const Section = ({ children, title }): Node => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
};

const DateTimepickers_reactnativepaper: () => Node = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const [Modal, setModal] = useState(false)

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };


  function date_convert(str) {
    var date = new Date(str),
      mnth = ("0" + (date.getMonth() + 1)).slice(-2),
      day = ("0" + date.getDate()).slice(-2);
    return [date.getFullYear(), mnth, day].join("-");
  }

  const [date, setDate] = React.useState < Date | undefined > (undefined);
  const [open, setOpen] = React.useState(false);




  //for single date select
  const onDismissSingle = React.useCallback(() => {
    setOpen(false);
  }, [setOpen]);

  const onConfirmSingle = React.useCallback((params) => {
    setOpen(false);
    setDate(date_convert(params.date));
    console.log("onConfirmSingle", date_convert(params.date))
  }, [setOpen, setDate]);

  // range date select
  const [rangeOpen, setrangeOpen] = React.useState(false);
  const [range, setRange] = React.useState < {
    startDate: Date | undefined,
    endDate: Date | undefined
  } > ({ startDate: undefined, endDate: undefined });

  const onDismiss = React.useCallback(() => {
    setrangeOpen(false);
  }, [setrangeOpen]);

  const onConfirm = React.useCallback(({ startDate, endDate }) => {
    setrangeOpen(false);

    var start_date = date_convert(startDate);
    var end_date = date_convert(endDate);
    console.log(start_date, end_date)
    setRange({ start_date, end_date });

    console.log("range date", range)
  }, [setrangeOpen, setRange]);

  const [inputDate, setInputDate] = React.useState < Date | undefined > (undefined)



  // time picker
  const [Time, setTime] = React.useState("");


  const [visible, setVisible] = React.useState(false)
  const onDismiss_time = React.useCallback(() => {
    setVisible(false)
  }, [setVisible])

  const onConfirm_time = React.useCallback(
    ({ hours, minutes }) => {
      console.log("time -->", hours, minutes);
      var time = hours + ":" + minutes
      setTime(time)
      setVisible(false);

    },
    [setVisible]
  );


  const [dates, setDates] = React.useState([]);
  const [open_dates, setOpen_dates] = React.useState(false);

  const onDismiss_mul = React.useCallback(() => {
    setOpen_dates(false);
  }, [setOpen_dates]);

  const onConfirm__mul = React.useCallback((params) => {
    setOpen_dates(false);
    // setDates(params.dates);

    var date_arr = [];
    params.dates.map((val, key) => {
      date_arr.push(date_convert(val))
      console.log(date_convert(val))
    })
    setDates(date_arr);
    console.log('[on-change-multi]', dates);
  }, []);

  const renderItem = ({ item }) => (
    <Text>{item}</Text>
  );

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <View style={backgroundStyle, { height: "100%", width: "100%", alignItems: "center", justifyContent: "center" }}>
        {/* <Header /> */}

        {/* single date select */}
        <View style={styles.buttonView}>
          <Pressable
            onPress={() => { setOpen(!open) }}
            android_ripple={{ color: 'gray', borderless: true }}
            style={styles.loginButton}>
            <Text style={styles.buttonText}>Single date select</Text>
          </Pressable>
        </View>

        <View style={{ paddingLeft: 20, width: "100%" }}>
          <Text>Single date: {date} </Text>
        </View>

        <DatePickerModal
          // locale="en"
          mode="single"
          visible={open}
          onDismiss={onDismissSingle}
          date={date}
          onConfirm={onConfirmSingle}
          validRange={{
            startDate: new Date(),  // optional
            endDate: new Date(2022, 1, 2), // optional
            // disabledDates: [new Date()] // optional
          }}
          onChange={(data) => { console.log(data) }} // same props as onConfirm but triggered without confirmed by user
          saveLabel="Save" // optional
          label="Select date" // optional
          animationType="slide" // optional, default is 'slide' on ios/android and 'none' on web
        />



        {/* range of dates */}
        <View style={styles.buttonView}>
          <Pressable
            onPress={() => { setrangeOpen(!rangeOpen) }}
            android_ripple={{ color: 'gray', borderless: true }}
            style={styles.loginButton}>
            <Text style={styles.buttonText}>Range of date select</Text>
          </Pressable>
        </View>

        <View style={{ paddingLeft: 20, width: "100%" }}>
          <Text>Start date: {range.start_date}  End date: {range.end_date}</Text>
        </View>

        <DatePickerModal
          locale="en"
          mode="range"
          visible={rangeOpen}
          onDismiss={onDismiss}
          startDate={range.startDate}
          endDate={range.endDate}
          onConfirm={onConfirm}
          validRange={{
            startDate: new Date(),  // optional
            // endDate: new Date(), // optional
            disabledDates: [new Date()] // optional
          }}
          onChange={(data) => { console.log(data) }} // same props as onConfirm but triggered without confirmed by user
          saveLabel="Save" // optional
          label="Select period" // optional
          startLabel="From" // optional
          endLabel="To" // optional
          animationType="slide" // optional, default is slide on ios/android and none on web
        />

        {/* Get date from input field */}

        <View style={{ width: "100%", height: 100, alignItems: "center", justifyContent: "center" }}>
          <View style={{ width: "90%", alignItems: "center", justifyContent: "center", }}>
            <DatePickerInput
              style={{ width: "100%", }}
              locale="en"
              label="Birthdate"
              value={inputDate}
              onChange={(d) => setInputDate(d)}
              inputMode="start"
            // mode="outlined" (see react-native-paper docs)
            // other react native TextInput props
            />

          </View>
        </View>


        {/* choose multiple dates */}

        <View style={styles.buttonView}>
          <Pressable
            onPress={() => { setOpen_dates(!open_dates) }}
            android_ripple={{ color: 'gray', borderless: true }}
            style={styles.loginButton}>
            <Text style={styles.buttonText}>choose multple date</Text>
          </Pressable>
        </View>
        <View style={{ paddingLeft: 20, width: "100%" }}>
          <Text>Multiple date:  </Text>
        </View>
        <View style={{ paddingLeft: 30, width: "100%" }}>
          <FlatList
            data={dates}
            renderItem={renderItem}
          // keyExtractor={item => item.id}
          />
        </View>

        <DatePickerModal
          locale="en"
          mode="multiple"
          visible={open_dates}
          onDismiss={onDismiss_mul}
          dates={dates}
          onConfirm={onConfirm__mul}
          moreLabel="More"
          validRange={{
            startDate: new Date(),  // optional
            endDate: new Date(2022, 1, 2), // optional
            disabledDates: [new Date()] // optional
          }}
          saveLabel="Save" // optional
          label="Select period" // optional
          startLabel="From" // optional
          endLabel="To" // optional
          animationType="slide" // optional, default is slide on ios/android and none on web
        />

        {/* time epicker */}
        <View style={styles.buttonView}>
          <Pressable
            onPress={() => { setVisible(!visible) }}
            android_ripple={{ color: 'gray', borderless: true }}
            style={styles.loginButton}>
            <Text style={styles.buttonText}>choose time</Text>
          </Pressable>
        </View>

        <View style={{ paddingLeft: 20, width: "100%" }}>
          <Text>Time: {Time} </Text>
        </View>

        <TimePickerModal
          visible={visible}
          onDismiss={onDismiss_time}
          onConfirm={onConfirm_time}
          hours={12} // default: current hours
          minutes={14} // default: current minutes
          label="Select time" // optional, default 'Select time'
          cancelLabel="Cancel" // optional, default: 'Cancel'
          confirmLabel="Ok" // optional, default: 'Ok'
          animationType="fade" // optional, default is 'none'
          locale="en" // optional, default is automically detected by your system
        />




      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
  buttonView: {
    alignSelf: 'stretch',
    justifyContent: 'center',
    borderRadius: 10,
    elevation: 25,
    margin: 10,
  },
  loginButton: {
    height: 50,
    backgroundColor: 'blue',
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    textTransform: 'uppercase',
    fontFamily: 'sans-serif-light',
  },
});

export default DateTimepickers_reactnativepaper;
