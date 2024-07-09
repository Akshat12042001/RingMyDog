import React, {Component} from 'react';
import {
  Button,
  Footer,
  Header,
  ScreenContainer,
  StyledText,
} from '../../../components/atoms';
import {View} from 'react-native';
import styles from './styles';
import {COLORS, NAVIGATION} from '../../../constants';

class BroadcastDogScreen extends Component {
  constructor(props) {
    super(props);
  }
  onYesPress = () => {
    this.props.navigation.navigate(NAVIGATION.STACK.COMMON, {
      screen: NAVIGATION.COMMON.MISSING_DOG_INFO_SCREEN,
    });
  };
  render() {
    return (
      <ScreenContainer>
        <Header
          title={'BROADCAST YOUR LOST OR STOLEN PET DOG TO ALL USERS'}
          isDrawerVisible
          onPress={() => this.props?.navigation?.toggleDrawer()}
        />
        <View style={styles.root}>
          <StyledText
            textAlign="center"
            size={18}
            color={COLORS.SECONDARY}
            textStyle={{fontWeight: '700'}}>
            DO YOU WANT TO BROADCAST TO OTHER USERS THAT YOUR BELOVED DOG HAS
            BEEN STOLEN OR IS MISSING
          </StyledText>
        </View>
        <View style={styles.buttonContainer}>
          <Button
            title={'YES'}
            containerStyles={styles.backButton}
            onPress={this.onYesPress}
          />
          <View style={styles.dummyView} />
          <Button
            title={'NO'}
            containerStyles={styles.backButton}
            //   onPress={this.props.navigation.goBack}
          />
        </View>
        <Footer showTermsText />
      </ScreenContainer>
    );
  }
}
export default BroadcastDogScreen;
