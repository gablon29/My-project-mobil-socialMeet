import { Alert, Button, Text, TextInput, View } from 'react-native';
import WebhookPaymentScreen from './WebhookPaymentScreen';
import PaymentScreen from './PaymentsUICustomScreen';
import { useState } from 'react';
import { useStripe } from '@stripe/stripe-react-native';

import axios from 'axios';

export default function Checkout() {

    const [name, setName] = useState("San");
    const [amount, setAmount] = useState("12");
    const stripe = useStripe();
    const handleBuy = async () => {
        try {

            const finalAmount = parseInt(amount);
            const stuff = {
                method: 'POST',
                credentials: 'same-origin',
                mode: 'same-origin',
                body: JSON.stringify({ amount: finalAmount, name: name }),
                headers: {
                  'Accept':       'application/json',
                  'Content-Type': 'application/json',
                  amount: finalAmount,
                  name: name,
                }
              }
            if (finalAmount <= 1) return Alert.alert("You cannot donate below 1 INR");
            const response = await fetch("http://192.168.0.12:8080/stripe/donate", stuff);

            const data = await response.json();
            if (!response.ok) {
                return Alert.alert(data.message);
            }
            const initSheet = await stripe.initPaymentSheet({
                paymentIntentClientSecret: data.clientSecret,
                merchantDisplayName: 'Whopaws',
            });
            if (initSheet.error) {
                console.error(initSheet.error);
                return Alert.alert(initSheet.error.message);
            }
            const presentSheet = await stripe.presentPaymentSheet({
                clientSecret: data.clientSecret,
            });
            if (presentSheet.error) {
                console.error(presentSheet.error);
                return Alert.alert(presentSheet.error.message);
            }
            Alert.alert("Donated successfully! Thank you for the donation.");
        } catch (err) {
            console.error(err);
            Alert.alert("Payment failed!");
        }
    };
    return (
        <View>
            <TextInput
                placeholder="Name"
                style={{ padding: 10, borderColor: "black", borderWidth: 1 }}
                value={name}
                onChangeText={(e) => setName(e)}
            />
            <TextInput
                placeholder="Amount"
                keyboardType="numeric"
                style={{ padding: 10, borderColor: "black", borderWidth: 1 }}
                value={amount}
                onChangeText={(e) => setAmount(e)}
            />
            <Button title="Buy" onPress={handleBuy} />
        </View>

    );
}