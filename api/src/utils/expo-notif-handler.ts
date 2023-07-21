import { Expo } from 'expo-server-sdk'
const expo = new Expo();
/*
const message = {
  to: 'EXPO_PUSH_TOKEN', // Replace with the recipient's Expo Push Token
  sound: 'default',
  title: 'Notification Title',
  body: 'Notification Body',
  data: { anyData: 'you want to send along with the notification' },
};*/
type NotifStruct = {
  to: string | string[];
  sound: "default" | { critical?: boolean; name?: "default"; volume?: number; };
  title: string;
  body: string;
  data: object;
}

export function expoSendOneNotification(to:string | 'gj_gvXNYxx_l-NZmAZ4rS4u' ,title: string | "probando", body:string | "body probando"){
const message: NotifStruct = {
  to:to,
  sound: "default",
  title: title,
  body: body,
  data: {dato:"nada de nada"}

}

  if (!Expo.isExpoPushToken(message.to)) {
    console.error('Invalid Expo Push Token');
    return;
  }
  expo.sendPushNotificationsAsync([message])
  .then((ticketChunk) => {
    // Handle success or errors
  })
  .catch((error) => {
    console.error('Error sending push notification:', error);
  });

}
