import React, {Component} from 'react';
import {
  Button,
  Header,
  ScreenContainer,
  StyledText,
} from '../../../components/atoms';
import {View} from 'react-native';
import {COLORS, STRINGS} from '../../../constants';
import styles from './styles';
import {showSuccess} from '../../../utils/alerts';

class ThanksMessageScreen extends Component {
  onSubmitPress = () => {
    showSuccess('Your message has been sent');
    // this.props.navigation.goBack();
  };
  render() {
    return (
      <ScreenContainer>
        <Header
          title={'THANKS MESSAGE TO RMD FAMILY'}
          isDrawerVisible
          onPress={() => this.props?.navigation?.toggleDrawer()}
        />
        <View style={styles.root}>
          <StyledText
            size={26}
            color={COLORS.SECONDARY}
            textAlign="center"
            textStyle={styles.text}>
            I am very Thankful to Ring My dog - the wanted dog poster app family
            members for help me to find my missing dog
          </StyledText>
          <View style={styles.buttonContainer}>
            <Button
              title={STRINGS.BUTTON_LABELS.BACK}
              containerStyles={styles.backButton}
              onPress={this.props.navigation.goBack}
            />
            <View style={styles.dummyView} />
            <Button
              title={STRINGS.BUTTON_LABELS.SUBMIT}
              containerStyles={styles.backButton}
              onPress={this.onSubmitPress}
            />
          </View>
        </View>
      </ScreenContainer>
    );
  }
}
export default ThanksMessageScreen;
