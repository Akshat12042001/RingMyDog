import React, {Component} from 'react';
import {
  Button,
  Footer,
  Header,
  ScreenContainer,
} from '../../../components/atoms';
import {NAVIGATION, STRINGS} from '../../../constants';
import {ScrollView, View} from 'react-native';
import RenderHtml from 'react-native-render-html';
import styles from './styles';

class InformationScreen extends Component {
  constructor(props) {
    super(props);
  }
  onNextPress = () => {
    this.props.navigation.navigate(NAVIGATION.AUTH.SIGN_UP_SCREEN);
  };
  render() {
    return (
      <ScreenContainer>
        <Header title={STRINGS.INFORMATION_SCREEN.TITLE} />
        <ScrollView showsVerticalScrollIndicator={false}>
          <RenderHtml
            source={{
              html: STRINGS.INFORMATION_SCREEN.HTML,
            }}
          />
        </ScrollView>
        <View style={styles.buttonContainer}>
          <Button
            title={STRINGS.BUTTON_LABELS.BACK}
            containerStyles={styles.backButton}
            onPress={this.props.navigation.goBack}
          />
          <View style={styles.dummyView} />
          <Button
            title={STRINGS.BUTTON_LABELS.NEXT}
            containerStyles={styles.backButton}
            onPress={() =>
              this.props.navigation.navigate(NAVIGATION.AUTH.SIGN_UP_SCREEN)
            }
          />
        </View>
        <Footer showTermsText />
      </ScreenContainer>
    );
  }
}

export default InformationScreen;
