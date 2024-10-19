import * as Notifications from 'expo-notifications';
import * as Permissions from 'expo-permissions';

// Request permission and get the Expo push token
export const registerForPushNotificationsAsync = async () => {
  const { status } = await Notifications.getPermissionsAsync();
  if (status !== 'granted') {
    const { status } = await Notifications.requestPermissionsAsync();
    if (status !== 'granted') {
      alert('Failed to get push token for push notification!');
      return;
    }
  }
  const token = (await Notifications.getExpoPushTokenAsync()).data;
  console.log('Expo Push Token:', token);
  return token;
};

// Send a notification
export const sendNotification = async () => {
  await Notifications.scheduleNotificationAsync({
    content: {
      title: 'Notification Title',
      body: 'This is the body of the notification.',
      sound: 'default',
    },
    trigger: null, // Immediate delivery
  });
};
