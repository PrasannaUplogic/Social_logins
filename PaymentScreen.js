import React, { Component, useState } from 'react';
import { StyleSheet, Text, View, BackHandler, ScrollView, I18nManager, Keyboard, AsyncStorage, ActivityIndicator, TouchableOpacity, Switch, Platform, Button, Modal, Dimensions, Image, TextInput } from 'react-native';
import { CardField, useStripe, useConfirmPayment, } from '@stripe/stripe-react-native';

export default function PaymentScreen() {
    // const { confirmPayment } = useStripe();
    const { createPaymentMethod, handleCardAction, createToken } = useStripe();
    const { confirmPayment, loading } = useConfirmPayment();
    // console.log("payment page")
    const [card, setCard] = useState(null);
    // const fetchPaymentIntentClientSecret = async () => {
    //     const response = await fetch(`${API_URL}/create-payment-intent`, {
    //         method: 'POST',
    //         headers: {
    //             'Content-Type': 'application/json',
    //         },
    //         body: JSON.stringify({
    //             currency: 'usd',
    //         }),
    //     });
    //     const { clientSecret } = await response.json();

    //     return clientSecret;
    // };

    const handlePayPress = async () => {
        if (!card) {
            return;
        }
        const billingDetails = createPaymentMethod.BillingDetails = {
            email: 'email@stripe.com',
            phone: '+48888000888',
            addressCity: 'Houston',
            addressCountry: 'US',
            addressLine1: '1459  Circle Drive',
            addressLine2: 'Texas',
            addressPostalCode: '77063',
        };

        const result = await createToken(card);
        if (result.error) {
            console.log(result.error.message);
        } else {
            console.log('Stripe Token is - ', result);
        }
       


        // const { paymentMethod, error } = await createPaymentMethod({
        //     type: 'Card',
        //     billingDetails,
        // });

        // Fetch the intent client secret from the backend
        // const clientSecret = await fetchPaymentIntentClientSecret();
    };

    return (
        <View>
            <CardField
                postalCodeEnabled={true}
                placeholder={{
                    number: '4242 4242 4242 4242',
                }}
                cardStyle={{
                    backgroundColor: '#FFFFFF',
                    textColor: '#000000',
                }}
                style={{
                    width: '100%',
                    height: 50,
                    marginVertical: 30,
                }}
                onCardChange={(cardDetails) => {
                    console.log('cardDetails', cardDetails);
                    setCard(cardDetails)
                }}
                onFocus={(focusedField) => {
                    // console.log('focusField', focusedField);
                }}
            />
            <Button onPress={handlePayPress} title="Pay" disabled={loading} />
        </View>
    );
}

