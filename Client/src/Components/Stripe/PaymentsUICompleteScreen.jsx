import React, { useEffect, useState } from 'react';
import { Alert } from 'react-native';
import { useStripe } from '@stripe/stripe-react-native';
import Button from './Button';
import PaymentScreen from './PaymentScreen';

const API_URL=""

export default function PaymentsUICompleteScreen() {
    const { initPaymentSheet, presentPaymentSheet } = useStripe();
    const [paymentSheetEnabled, setPaymentSheetEnabled] = useState(false);
    const [loading, setLoadng] = useState(false);
    const [clientSecret, setClientSecret] = useState();

    const fetchPaymentSheetParams = async () => {
        const response = await fetch(`${API_URL}/payment-sheet`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
        });
        const { paymentIntent, ephemeralKey, customer } = await response.json();
        setClientSecret(paymentIntent);
        return {
            paymentIntent,
            ephemeralKey,
            customer,
        };
    };

    const openPaymentSheet = async () => {
        if (!clientSecret) {
            return;
        }
        setLoadng(true);
        const { error } = await presentPaymentSheet({
            clientSecret,
        });

        if (error) {
            Alert.alert(`Error code: ${error.code}`, error.message);
        } else {
            Alert.alert('Success', 'The payment was confirmed successfully');
        }
        setPaymentSheetEnabled(false);
        setLoadng(false);
    };

    const initialisePaymentSheet = async () => {
        const {
            paymentIntent,
            ephemeralKey,
            customer,
        } = {paymentIntent: "card",ephemeralKey: "421",customer: "123"}
        "pk_test_51NNLCpD6q36zl0IbOK1XimHKkX0UZDNfaynRibRe2giRgPosRrlF7EgKrRR9M0yxbn1RWCFLH4KZrBDueekZx2oA00hRChKSeS"
        const { error } = await initPaymentSheet({
            customerId: customer,
            customerEphemeralKeySecret: ephemeralKey,
            paymentIntentClientSecret: paymentIntent,
            customFlow: false,
            merchantDisplayName: 'Example Inc.',
            style: 'alwaysDark',
        });
        if (!error) {
            setPaymentSheetEnabled(true);
        }
    };

    useEffect(() => {
        // In your app’s checkout, make a network request to the backend and initialize PaymentSheet.
        // To reduce loading time, make this request before the Checkout button is tapped, e.g. when the screen is loaded.
        initialisePaymentSheet();

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <PaymentScreen>
            <Button
                variant="primary"
                loading={loading}
                disabled={!paymentSheetEnabled}
                title="Checkout"
                onPress={openPaymentSheet}
            />
        </PaymentScreen>
    );
}
