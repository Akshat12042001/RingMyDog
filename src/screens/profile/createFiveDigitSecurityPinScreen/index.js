import React, {Component} from 'react';
import {
  Button,
  Footer,
  Header,
  Input,
  OTPInput,
  ScreenContainer,
  StyledText,
} from '../../../components/atoms';
import {COLORS, FORM_SCHEMA, NAVIGATION, STRINGS} from '../../../constants';
import {Formik} from 'formik';
import {View} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import styles from './styles';
import {showError, showSuccess} from '../../../utils/alerts';
import {connect} from 'react-redux';

class CreateFiveDigitSecurityPinScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      otp: [],
    };

    this.initialValues = {
      favouriteColor: '',
      favouriteTeacher: '',
    };

    this.formRef = null;
    this.form = FORM_SCHEMA.RESET_SECURITY_PIN;
    this.inputRefs = this.form.fields.map(() => null);
  }

  onFormSubmit = () => {
    if (this.state.otp?.join('').length === 5) {
      showSuccess('You pin is set successfully!');
      setTimeout(() => {
        if (!!this.props?.isDogBreeder) {
          this.props.navigation.navigate(NAVIGATION.STACK.COMMON, {
            screen: NAVIGATION.COMMON.DOG_BREEDER_SCREEN,
          });
        } else {
          this.props.navigation.navigate(NAVIGATION.PROFILE.DOG_PROFILE);
        }
      }, 1000);
    } else {
      showError('Please enter 5 digit pin');
    }
  };

  render() {
    console.log(this.props?.isDogBreeder);
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
            title={STRINGS.PLACEHOLDERS.CREATE_FIVE_DIGIT_SECURIRY_PIN}
            isDrawerVisible
            onPress={() => this.props?.navigation?.toggleDrawer()}
          />
          <Formik
            validateOnChange
            onSubmit={this.onFormSubmit}
            initialValues={this.initialValues}
            validationSchema={this.form.schema}
            innerRef={formRef => (this.formRef = formRef)}>
            {({
              handleBlur,
              handleChange,
              handleSubmit,
              setFieldValue,
              values,
              errors,
              touched,
            }) => {
              return (
                <View style={styles.root}>
                  {this.form.fields.map((field, index) => {
                    const fieldKey = field?.type;
                    return (
                      <Input
                        {...field}
                        ref={ref => (this.inputRefs[index] = ref)}
                        onSubmitEditing={() => {
                          this.inputRefs[index + 1]?.focus();
                        }}
                        returnKeyType="next"
                        key={`field-${index}`}
                        value={values[fieldKey]}
                        onBlur={handleBlur(fieldKey)}
                        placeholder={field.placeholder}
                        onChangeText={handleChange(fieldKey)}
                        error={touched?.[fieldKey] && errors?.[fieldKey]}
                      />
                    );
                  })}
                </View>
              );
            }}
          </Formik>
          <OTPInput
            length={5}
            otp={this.state.otp}
            setOtp={text => this.setState({otp: text})}
            onSubmit={() => {}}
            autoFocus={false}
          />
          <StyledText textAlign="center" color={COLORS.SECONDARY}>
            Use numbers only
          </StyledText>
          <StyledText
            textAlign="center"
            color={COLORS.SECONDARY}
            textStyle={{
              paddingHorizontal: 10,
              fontWeight: 'bold',
              paddingTop: 10,
            }}>
            Please keep this pin safe and do not share with anyone else.
          </StyledText>
          <View style={styles.buttonContainer}>
            <Button
              title={STRINGS.BUTTON_LABELS.NEXT}
              containerStyles={styles.backButton}
              onPress={() => this.formRef.handleSubmit()}
            />
          </View>
        </KeyboardAwareScrollView>
        <Footer showTermsText />
      </ScreenContainer>
    );
  }
}

const mapStateToProps = state => ({
  isDogBreeder: state?.auth?.isDogBreeder,
});
export default connect(mapStateToProps, {})(CreateFiveDigitSecurityPinScreen);
