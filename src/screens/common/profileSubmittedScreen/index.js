import React, {Component} from 'react';
import {
  Button,
  Footer,
  Header,
  MissingDogItem,
  ScreenContainer,
  StyledText,
} from '../../../components/atoms';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {Image, View} from 'react-native';
import {ASSETS, COLORS, NAVIGATION, STRINGS} from '../../../constants';
import styles from './styles';
import {showSuccess} from '../../../utils/alerts';

class MissingDogInformationScreen extends Component {
  constructor(props) {
    super(props);
  }

  onSubmitPress = () => {
    showSuccess('Your form submitted successfully');
    setTimeout(() => {
      this.props.navigation.navigate(NAVIGATION.STACK.COMMON, {
        screen: NAVIGATION.COMMON.BROADCAST_DOG_SCREEN,
      });
    }, 1000);
  };

  render() {
    console.log(this.props?.route?.params);
    const data = this.props?.route?.params;
    return (
      <ScreenContainer>
        <KeyboardAwareScrollView
          enableOnAndroid={true}
          keyboardShouldPersistTaps="handled"
          enableResetScrollToCoords={true}
          enableAutoAutomaticScroll={false}
          keyboardOpeningTime={Number.MAX_SAFE_INTEGER}
          contentContainerStyle={{}}
          showsVerticalScrollIndicator={false}
          resetScrollToCoords={{x: 0, y: 0}}>
          <Header
            title={'YOUR MISSING DOG PROFILE HAS BEEN SUBMITTED'}
            isDrawerVisible
            onPress={() => this.props?.navigation?.toggleDrawer()}
          />
          <View style={styles.root}>
            <Image
              source={ASSETS.DOG_FACE}
              style={styles.imageDog}
              resizeMode="cover"
            />
            <MissingDogItem title="Dog name" value="Brownie" />
            <MissingDogItem title="Dog breed" value="Rotweiler" />
            <MissingDogItem title="Dog age" value="4 years" />
            <MissingDogItem
              title="Any special marking"
              value="White mark on nose"
            />
            <MissingDogItem
              title="Dog missing date"
              value={data?.dogMissingDate}
            />
            <MissingDogItem
              title="Country where dog is missing"
              value={data?.dogMissingCountry}
            />
            <MissingDogItem
              title="Area where dog is missing"
              value={data?.dogMissingArea}
            />
            <MissingDogItem
              title="Circumstances how dog get missing"
              value={data?.dogMissingCircumstances}
            />
            <View style={styles.dogImagesContainer}>
              <Image
                source={ASSETS.DOG_FACE}
                style={styles.bottomDogImage}
                resizeMode="cover"
              />
              <Image
                source={ASSETS.DOG_FACE}
                style={styles.bottomDogImage}
                resizeMode="cover"
              />
              <Image
                source={ASSETS.DOG_FACE}
                style={styles.bottomDogImage}
                resizeMode="cover"
              />
            </View>
            <View style={styles.bottomDataContainer}>
              <StyledText
                color={COLORS.SECONDARY}
                textAlign="center"
                textStyle={styles.bottomTitleText}>
                Contact details
              </StyledText>
              <View style={styles.bottomLine} />
              <StyledText textAlign="center">Mr Simson singh katoch</StyledText>
              <MissingDogItem title="Post code" value="160059" />
              <MissingDogItem title="Contact number" value="+44-98150034580" />
            </View>
            <View style={styles.bottomDataContainer}>
              <StyledText
                color={COLORS.SECONDARY}
                textAlign="center"
                textStyle={styles.bottomTitleText}>
                Rewards
              </StyledText>
              <View style={styles.bottomLine} />
              <StyledText textAlign="center">
                Reward is offered for safe return of
              </StyledText>
              <StyledText textAlign="center">
                Reward is offered for safe return of
              </StyledText>
              <StyledText textAlign="center" textStyle={styles.text}>
                Brownie
              </StyledText>
            </View>
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
        </KeyboardAwareScrollView>
      </ScreenContainer>
    );
  }
}
export default MissingDogInformationScreen;
