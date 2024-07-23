import React, {Component} from 'react';
import {
  Button,
  Header,
  ScreenContainer,
  StyledText,
} from '../../../components/atoms';
import {FlatList, View} from 'react-native';
import {COLORS, STRINGS} from '../../../constants';
import {SharedStyles} from '../../../shared';
import styles from './styles';
import {ContactDetailModal} from '../../../components/modals';
import {openMap, openPhone} from '../../../utils/linking';

class NotificationScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isVisible: false,
    };
  }

  onContactPress = type => {
    if (type === 'modal') {
      openPhone('+44 7470 089575');
    } else {
      this.setState({isVisible: true});
    }
  };

  onTrackPress = () => {
    openMap();
  };

  render() {
    return (
      <ScreenContainer>
        <Header
          title={'NOTIFICATIONS'}
          isDrawerVisible
          onPress={() => this.props?.navigation?.toggleDrawer()}
        />
        <View
          style={[
            {
              borderRadius: 8,
              backgroundColor: COLORS.PRIMARY,
              marginTop: 20,
              justifyContent: 'center',
              paddingVertical: 10,
              paddingHorizontal: 10,
            },
            SharedStyles.shadow,
          ]}>
          <StyledText textAlign="center" color={COLORS.SECONDARY}>
            Your dog has been found by Mr Micheal
          </StyledText>
          <View style={styles.buttonContainer}>
            <Button
              title={STRINGS.BUTTON_LABELS.CONTACT}
              containerStyles={styles.backButton}
              onPress={this.onContactPress}
            />
          </View>
        </View>
        <ContactDetailModal
          isVisible={this.state.isVisible}
          onBackdropPress={() => this.setState({isVisible: false})}
          onContactPress={this.onContactPress?.bind(this, 'modal')}
          onTrackPress={this.onTrackPress}
        />
      </ScreenContainer>
    );
  }
}
export default NotificationScreen;
