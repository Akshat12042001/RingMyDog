import React from 'react';
import {
  View,
  Text,
  TouchableWithoutFeedback,
  TouchableOpacity,
} from 'react-native';
import Modal from 'react-native-modal';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import DocumentPicker from 'react-native-document-picker';
import styles from './styles';
import {CameraIcon, GalleryIcon, UploadIcon} from '../../svg';
import {COLORS} from '../../../constants';

const PickImageBottomModal = ({
  title,
  isVisible,
  onSelect,
  onCloseModal,
  acceptOnlyImage = false,
  imageDetails,
}) => {
  const pickCallback = data => {
    if (!data?.didCancel && !data?.errorCode) {
      onCloseModal();

      const response = {
        name: data?.assets[0]?.fileName,
        type: data?.assets[0]?.type,
        uri: data?.assets[0]?.uri,
      };
      onSelect(response);
      imageDetails(data?.assets);
    }
  };

  const handleCamera = async () => {
    const response = await launchCamera({
      mediaType: 'photo',
      quality: 1,
      includeBase64: true,
    });
    pickCallback(response);
  };

  const handleGallery = async () => {
    const response = await launchImageLibrary({
      mediaType: 'photo',
      quality: 1,
      includeBase64: true,
    });
    pickCallback(response);
  };

  const handleDocumentPick = async () => {
    try {
      const document = await DocumentPicker?.pick({
        type: 'image/jpeg',
        copyTo: 'documentDirectory',
      });
      onCloseModal();
      const response = {
        type: document[0]?.type,
        name: document[0]?.name,
        uri: document[0]?.fileCopyUri,
      };
      imageDetails(document);
      // onSelect(document, true);
    } catch (err) {}
  };

  const BTN = [
    {
      title: 'Camera',
      onPress: handleCamera,
      icon: <CameraIcon color={COLORS.SECONDARY} />,
    },
    {
      title: 'Gallery',
      onPress: handleGallery,
      icon: <GalleryIcon color={COLORS.SECONDARY} />,
    },
    {
      title: 'File manager',
      onPress: handleDocumentPick,
      icon: <UploadIcon color={COLORS.SECONDARY} />,
    },
  ];

  return (
    <View>
      <Modal
        style={styles.modal}
        isVisible={isVisible}
        animationIn={'slideInUp'}
        animationOut={'slideOutDown'}
        backdropTransitionOutTiming={0}
        hideModalContentWhileAnimating={true}>
        <TouchableWithoutFeedback onPress={() => onCloseModal()}>
          <View style={styles.modal} />
        </TouchableWithoutFeedback>
        <View style={styles.container}>
          <View style={styles.dividerContainer}>
            <View style={styles.divider} />
          </View>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>{title ? title : 'Select a file'}</Text>
          </View>
          <View style={styles.btnContainer}>
            {BTN.map((item, index) => {
              return (
                <View style={styles.center} key={`${item.title}${index}`}>
                  <TouchableOpacity onPress={item.onPress}>
                    <View style={styles.iconContainer}>{item.icon}</View>
                  </TouchableOpacity>
                  <View style={styles.textContainer}>
                    <Text style={styles.text}>{item.title}</Text>
                  </View>
                </View>
              );
            })}
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default PickImageBottomModal;
