import { useStripe, CardField } from '@stripe/stripe-react-native';
import React, { useEffect, useState } from 'react';
import { ActivityIndicator, ScrollView, StyleSheet, Text } from 'react-native';
import { colors } from './Colors';
import { fetchPublishableKey } from '../../metodos/stripeMetodos';




const PaymentScreen = ({ paymentMethod, children }) => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function initialize() {
      const publishableKey = await fetchPublishableKey(paymentMethod);
      if (publishableKey) {
        await initStripe({
          publishableKey,
          merchantIdentifier: 'merchant.com.stripe.react.native',
          urlScheme: 'stripe-example',
          setUrlSchemeOnAndroid: true,
        });
        setLoading(false);
      }
    }
    initialize();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <CardField
      postalCodeEnabled={true}
      placeholders={{
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
      }}
      onFocus={(focusedField) => {
        console.log('focusField', focusedField);
      }}
    />
  )

//   return ? (
//     <ActivityIndicator size="large" style={StyleSheet.absoluteFill} />
//   ) : (
//     <ScrollView
//       accessibilityLabel="payment-screen"
//       style={styles.container}
//       keyboardShouldPersistTaps="handled">
//       {children}
//       {/* eslint-disable-next-line react-native/no-inline-styles */}
//       <Text style={{ opacity: 0 }}>appium fix</Text>
//     </ScrollView>
    
//   );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    paddingTop: 20,
    paddingHorizontal: 16,
  },
});

export default PaymentScreen;
