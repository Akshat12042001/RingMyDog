import {Linking, Platform} from 'react-native';
// import launchMailApp from 'react-native-mail-launcher';

export const openEmailApp = email => {
  Linking.openURL(`mailto:${email}`);
};

// export const openWhatsapp = mobileNumber => {
//   Linking.openURL(`https://wa.me/91${mobileNumber}?text=Hello`);
// };

export const openPhone = phone => {
  Linking.openURL(`tel:${phone}`);
};

export const openMap = () => {
  const scheme = Platform.select({ios: 'maps://0,0?q=', android: 'geo:0,0?q='});
  const latLng = `${'51.792100'},${'1.154700'}`;
  const url = Platform.select({
    ios: `${scheme}@${latLng}`,
    android: `${scheme}${latLng}`,
  });
  Linking.openURL(url);
};

// export const openComposeMail = email => {
//   Linking.openURL(`mailto:${email}`);
// };
