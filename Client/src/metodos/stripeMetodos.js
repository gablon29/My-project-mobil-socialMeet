import { Alert } from 'react-native';

export const API_URL = "https://expo-stripe-server-example.glitch.me"

export async function fetchPublishableKey(paymentMethod) {
    try {
        const response = await fetch(
            `${API_URL}/stripe-key?paymentMethod=${paymentMethod}`
        );

        const { publishableKey } = await response.json();

        return publishableKey; //es una promise
    } catch (e) {
        console.warn('Unable to fetch publishable key. Is your server running?');
        Alert.alert(
            'Error',
            'Unable to fetch publishable key. Is your server running?'
        );
        return null;
    }
}