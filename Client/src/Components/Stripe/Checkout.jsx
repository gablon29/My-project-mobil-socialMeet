import { Alert, Button, TextInput, View } from 'react-native';
import { useState } from 'react';
import { useStripe } from '@stripe/stripe-react-native';

// example 
let API_URL = "http://192.168.0.12:8080"
API_URL = "https://whopaws-production.up.railway.app"
const API_WEBHOOK_ROUTE = "/stripe/start-pay-process"

export default function Checkout() {
    const [product_id, setProduct_id] = useState("1337");
    const [customer_id, setCustomer_id] = useState("4124");
    const [address, setAdress] = useState("España, Madrid, Valenciana 3882");
    const [name, setName] = useState("Sandro Meda");
    const [amount, setAmount] = useState("12");
    const stripe = useStripe();
    const handleBuy = async () => {
        const finalAmount = parseInt(amount);
        const stuff = {
            method: 'POST',
            credentials: 'same-origin',
            mode: 'same-origin',
            body: JSON.stringify({ amount: finalAmount, name: name }),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                amount: finalAmount,
                name, //Edna Scripts 6
                address,
                product_id,
                customer_id
            }
        }
        if (finalAmount <= 1) return Alert.alert("El precio minimo es 1 USD");
        const response = await fetch(API_URL + API_WEBHOOK_ROUTE, stuff);

        const data = await response.json();
        if (!response.ok) {
            return Alert.alert(data.message);
        }
        const initSheet = await stripe.initPaymentSheet({
            paymentIntentClientSecret: data.clientSecret,
            merchantDisplayName: 'Whopaws',
        });
        if (initSheet.error) {

            return Alert.alert(initSheet.error.message);
        }
        const presentSheet = await stripe.presentPaymentSheet({
            clientSecret: data.clientSecret,
        });
        if (presentSheet.error) {

            return Alert.alert(presentSheet.error.message);
        }
        Alert.alert("Donated successfully! Thank you for the donation.");

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
                placeholder="Address"
                style={{ padding: 10, borderColor: "black", borderWidth: 1 }}
                value={address}
                onChangeText={(e) => setAdress(e)}
            />
            <TextInput
                placeholder="ProductID, poner cualquier numero" //DEV
                keyboardType="numeric"
                style={{ padding: 10, borderColor: "black", borderWidth: 1 }}
                value={product_id}
                onChangeText={(e) => setProductID(e)}
            />
            <TextInput
                placeholder="Amount"
                keyboardType="numeric"
                style={{ padding: 10, borderColor: "black", borderWidth: 1 }}
                value={amount}
                onChangeText={(e) => setAmount(e)}
            />
            <Button title="Buy" onPress={() => {
                handleBuy()

                    .then(_ => {
                        //luego de comprar, por ejemplo, que lo redirigjha a algun lugar
                    })

                    .catch((err) => {
                        let extra_message = ""
                        if (err.message.includes("Unexpected token: <")) {
                            extra_message += ("\r\nLa direccion de stripe webhooks no está configurada correctamente");
                        }
                        if (err.code) {
                            extra_message += "\r\n" + err.code
                        }
                        Alert.alert("Payment failed!" + extra_message);

                    })
            }}
            />
        </View>

    );
}