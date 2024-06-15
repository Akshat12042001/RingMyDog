import React, {useState} from 'react';
import {COLORS} from '../../../constants';
import {ActivityIndicator, Image, View} from 'react-native';
import Modal from 'react-native-modal';
import styles from './styles';

const ViewUploadedModal = ({isVisible = false, onBackdropPress, item = {}}) => {
  const [isLoading, setIsLoading] = useState(false);
  return (
    <Modal
      isVisible={isVisible}
      animationIn={'slideInUp'}
      animationOut={'slideOutDown'}
      backdropTransitionOutTiming={0}
      hideModalContentWhileAnimating={true}
      onBackdropPress={onBackdropPress}>
      <View style={styles.root}>
        <Image
          source={{uri: item?.uri}}
          resizeMode="contain"
          style={styles.image}
          onLoadStart={() => setIsLoading(true)}
          onLoadEnd={() => setIsLoading(false)}
        />
      </View>
      {!!isLoading && (
        <View style={styles.loader}>
          <ActivityIndicator size={30} color={COLORS.PRIMARY} />
        </View>
      )}
    </Modal>
  );
};
export default ViewUploadedModal;
