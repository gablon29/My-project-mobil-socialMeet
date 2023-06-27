import { Alert } from 'react-native';

export const API_URL = "https://expo-stripe-server-example.glitch.me"

export async function fetchPublishableKey(paymentMethod) {
    try {
        const response = await fetch(
            `${API_URL}/stripe-key?paymentMethod=${paymentMethod}`
        );

        const { publishableKey } = await response.json();

        return "pk_test_51NNLCpD6q36zl0IbOK1XimHKkX0UZDNfaynRibRe2giRgPosRrlF7EgKrRR9M0yxbn1RWCFLH4KZrBDueekZx2oA00hRChKSeS"; //es una promise
    } catch (e) {
        console.warn('Unable to fetch publishable key. Is your server running?');
        Alert.alert(
            'Error',
            'Unable to fetch publishable key. Is your server running?'
        );
        return null;
    }
}