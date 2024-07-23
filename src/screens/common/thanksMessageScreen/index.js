import React, {Component} from 'react';
import {
  Button,
  Footer,
  Header,
  ScreenContainer,
  StyledText,
} from '../../../components/atoms';
import {View} from 'react-native';
import {COLORS, STRINGS} from '../../../constants';
import styles from './styles';
import {showSuccess} from '../../../utils/alerts';
import moment from 'moment';

class ThanksMessageScreen extends Component {
  onSubmitPress = () => {
    showSuccess('Your message has been sent');
    // this.props.navigation.goBack();
  };
  render() {
    return (
      <ScreenContainer>
        <Header
          title={
            'SEND THANK YOU MESSAGE TO THE RING MY DOG-THE WANTED DOG POSTER APP COMMUNITY.'
          }
          isDrawerVisible
          onPress={() => this.props?.navigation?.toggleDrawer()}
        />
        <View style={{marginTop: 20, flex: 1}}>
          <StyledText
            size={16}
            color={COLORS.SECONDARY}
            textAlign="center"
            textStyle={styles.text}>
            I just want to say a big thank you to all the ring my dog-the wanted
            dog poster app community for helping in the search for my pet
          </StyledText>
          <StyledText
            size={18}
            color={COLORS.SECONDARY}
            textAlign="center"
            textStyle={{fontWeight: '700'}}>
            Brownie
          </StyledText>
          <StyledText
            size={16}
            color={COLORS.SECONDARY}
            textAlign="center"
            textStyle={styles.text}>
            Who was broadcasted as lost or stolen to you on
          </StyledText>
          <StyledText
            size={18}
            color={COLORS.SECONDARY}
            textAlign="center"
            textStyle={{fontWeight: '700'}}>
            {moment().format('DD MMM YYYY')}
          </StyledText>
          <StyledText
            size={16}
            color={COLORS.SECONDARY}
            textAlign="center"
            textStyle={styles.text}>
            I am really happy to inform you all that
          </StyledText>
          <StyledText
            size={18}
            color={COLORS.SECONDARY}
            textAlign="center"
            textStyle={{fontWeight: '700'}}>
            Brownie
          </StyledText>
          <StyledText
            size={16}
            color={COLORS.SECONDARY}
            textAlign="center"
            textStyle={styles.text}>
            Has been found safe and well and is now back home with me
          </StyledText>
        </View>
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
        <Footer showTermsText />
      </ScreenContainer>
    );
  }
}
export default ThanksMessageScreen;
