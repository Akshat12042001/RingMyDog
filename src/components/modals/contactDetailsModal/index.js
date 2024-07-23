import React from 'react';
import {View} from 'react-native';
import Modal from 'react-native-modal';
import styles from './styles';
import {Button, MissingDogItem, StyledText} from '../../atoms';
import {COLORS, STRINGS} from '../../../constants';

const ContactDetailModal = ({
  isVisible = false,
  onBackdropPress = undefined,
  onContactPress = undefined,
  onTrackPress = undefined,
}) => {
  return (
    <View>
      <Modal
        isVisible={isVisible}
        onBackdropPress={onBackdropPress}
        style={[styles.root]}
        animationIn={'slideInUp'}
        animationOut={'slideOutDown'}
        backdropTransitionOutTiming={0}
        hideModalContentWhileAnimating={true}>
        <View style={styles.container}>
          <View style={styles.bottomDataContainer}>
            <StyledText
              color={COLORS.SECONDARY}
              textAlign="center"
              textStyle={styles.bottomTitleText}>
              Contact details
            </StyledText>
            <View style={styles.bottomLine} />
            <StyledText textAlign="center">Mr Simson singh katoch</StyledText>
            <MissingDogItem
              title="Post code"
              value="160059"
              containerStyle={{flex: 0}}
            />
            <MissingDogItem
              title="Contact number"
              value="+44 7470 089575"
              containerStyle={{flex: 0}}
            />
          </View>
          <View style={styles.buttonContainer}>
            <Button
              title={STRINGS.BUTTON_LABELS.CONTACT}
              containerStyles={styles.backButton}
              onPress={onContactPress}
            />
            <View style={styles.dummyView} />
            <Button
              title={STRINGS.BUTTON_LABELS.TRACK}
              containerStyles={styles.backButton}
              onPress={onTrackPress}
            />
          </View>
        </View>
      </Modal>
    </View>
  );
};
export default ContactDetailModal;
