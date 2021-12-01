import React, { Component } from 'react';
import { StyleSheet, Text, View, BackHandler, ScrollView, I18nManager, Keyboard, AsyncStorage, ActivityIndicator, TouchableOpacity, Switch, Platform, Button as ReactButton, Modal, Dimensions, Image, TextInput } from 'react-native';
// import { Container, Header, Left, Body, Right, Button, Title, Icon, Content, Thumbnail, Row, Col, Grid, Picker, Input } from 'native-base';
import { StripeProvider } from '@stripe/stripe-react-native';
import PaymentScreen from './PaymentScreen'

export default function stripe_provider() {
  return (
    <StripeProvider
      publishableKey={"pk_test_xVVyfHyNOM12eAJ5xgBhsVwc"}
      merchantIdentifier="merchant.identifier"
    >
      <PaymentScreen />
    </StripeProvider>
  );
}