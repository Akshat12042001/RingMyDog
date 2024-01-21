import React, {Component} from 'react';
import {
  Button,
  CheckBox,
  Header,
  ScreenContainer,
} from '../../../components/atoms';
import {NAVIGATION, STRINGS} from '../../../constants';
import {Alert, ScrollView, View} from 'react-native';
import RenderHtml from 'react-native-render-html';
import styles from './styles';

class TermsAndConditionsScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isCheckboxActive: false,
    };
  }
  render() {
    return (
      <ScreenContainer>
        <Header title={STRINGS.TERMS_AND_CONDITIONS_SCREEN.TITLE} />
        <ScrollView showsVerticalScrollIndicator={false}>
          <RenderHtml
            source={{
              html: `<!DOCTYPE html>
                  <html lang="en">
                    <head>
                      <meta charset="UTF-8" />
                      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                      <title>Privacy Policy - Accident Management Systems</title>
                    </head>
                    <body >
                      <section>
                      <p style="font-weight: 500; color: #5C2508;">
                      Ring My Dog Limited understands that your privacy is very important to you and that you care how
                      your personal data is used and shared online.
                    </p>
                        <p style="font-weight: 500; color: #5C2508;">
                        We at Ring My Dog Limited respect and value the privacy of everyone who visits our website
                          <a href="https://www.accidentmanagementsystems.com" target="_blank"
                            >www.ringmydog.com.</a
                          >.
                        </p>
                        <p style="font-weight: 500; color: #5C2508;">
                          We will only collect and use personal data in ways that are described here, and in such a
                          manner that is consistent with Our Obligations and your rights under the law.
                        </p>
                        <p style="font-weight: bold; color: black;">
                          Please read this privacy policy carefully and ensure that you understand it. Your acceptance
                          of our privacy policy is deemed to occur upon your first visit to our website or registering
                          your details onto our Accident Management Systems App.
                        </p>
                        <p style="font-weight: bold; color: black;">
                          You will be required to read and accept this Privacy Policy when registering for an account.
                          If you do not accept and agree with this Privacy Policy, We advise you must stop using our
                          website and Accident Management Systems App immediately.
                        </p>
                      </section>
                      <section>
                        <h4 style="font-weight: bold; color: black;">Definitions and Interpretations</h4>
                        <p style="font-weight: bold; color: black;">In our Privacy Policy the following terms shall have the following meanings:</p>
                        <ul >
                          <li style="font-weight: bold; color: black;">
                            <strong>Account</strong> - means an account created by you the user required to access and
                            / or use certain areas and features of our site /app.
                          </li>
                          <li style="font-weight: bold; color: black;">
                            <strong>Cookie</strong> - means a small text file placed on your computer or device by our
                            site when you visit certain parts of Our website
                            <a href="https://www.accidentmanagementsystems.com" target="_blank"
                              >www.accidentmanagementsystems.com</a
                            >
                            or certain features of our Accident Management Systems App. Details of the Cookies used by
                            our website are set out in our Cookies Policy.
                          </li>
                          <li style="font-weight: bold; color: black;">
                            <strong>Cookies Law</strong> - means the relevant parts of the Privacy laws as part of the
                            new GDPR, Regulations.
                          </li>
                          <li style="font-weight: bold; color: black;">
                            <strong>Personal data</strong> - means any and all data that relates to an identifiable
                            person who can be directly or indirectly identified from that data. In this case, it means
                            personal data that you supply to us via Our website or app. And in accordance with the EU
                            Regulations 2016/679 Data Protection Regulation GDPR and <strong>"We/Us/Our’</strong> -
                            means Accident Management Systems Limited registered in England under company number
                            15012722 registered address, flat 16 Harlech House, Carnarvon Road, Clacton on Sea Essex
                            CO15 6QB.
                          </li>
                        </ul>
                      </section>
                      <section>
                        <h4 style="font-weight: bold; color: black;">Information About Us</h4>
                        <p style="font-weight: bold; color: black;">
                          Our website
                          <a href="https://www.accidentmanagementsystems.com" target="_blank"
                            >www.accidentmanagementsystems.com</a
                          >
                          is owned by Accident Management Systems Limited under company number 15012722. Our
                          registered address is, flat 16 Harlech House Carnarvon Road, Clacton on Sea Essex CO15 6QB.
                        </p>
                      </section>
                    </body>
                  </html>`,
            }}
          />
        </ScrollView>
        <View style={styles.checkboxContainer}>
          <CheckBox
            onPress={() =>
              this.setState({isCheckboxActive: !this.state.isCheckboxActive})
            }
            isActive={this.state.isCheckboxActive}
            title={STRINGS.TERMS_AND_CONDITIONS_SCREEN.ACCEPT_TERMS}
          />
          <View style={styles.buttonContainer}>
            <Button
              title={STRINGS.BUTTON_LABELS.NEXT}
              containerStyles={styles.button}
              isDisabled={!this.state.isCheckboxActive}
              onPress={() =>
                this.props.navigation.navigate(
                  NAVIGATION.AUTH.INFORMATION_SCREEN,
                )
              }
            />
          </View>
        </View>
      </ScreenContainer>
    );
  }
}

export default TermsAndConditionsScreen;
