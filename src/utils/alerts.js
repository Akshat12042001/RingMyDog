import {Alert} from 'react-native';
import {showMessage} from 'react-native-flash-message';

export const showAlert = ({
  title,
  message,
  onSuccess,
  isConfirmationPopup = false,
}) => {
  let buttons = [
    {
      text: 'Ok',
      onPress: onSuccess,
    },
  ];

  if (isConfirmationPopup) {
    buttons = [
      {
        text: 'No',
      },
      {
        text: 'Yes',
        onPress: onSuccess,
        style: 'destructive',
      },
    ];
  }

  Alert.alert(title, message, buttons);
};

export const showError = (message = '') => {
  showMessage({
    type: 'danger',
    message: 'Error',
    description: message || 'Something went Wrong',
  });
};

export const showSuccess = (message = '') => {
  showMessage({
    type: 'success',
    message: 'Success',
    description: message || 'Success',
  });
};
