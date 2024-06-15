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
import {COLORS, FORM_SCHEMA, STRINGS} from '../../../constants';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {Formik} from 'formik';
import {View} from 'react-native';
import styles from './styles';
import {showError, showSuccess} from '../../../utils/alerts';

class ResetSecurityPinScreen extends Component {
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
    if (this.state.otp.length !== 5) {
      showError('Please enter valid pin');
    } else {
      showSuccess('Your pin reset sucessfully');
      this.formRef.resetForm(this.initialValues);
      this.setState({otp: []});
    }
  };
  render() {
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
            title={'RESET FIVE DIGIT SECURITY PIN'}
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
          <View>
            <OTPInput
              length={5}
              otp={this.state.otp}
              setOtp={text => this.setState({otp: text})}
              onSubmit={() => {}}
              autoFocus={false}
            />
            <StyledText size={14} color={COLORS.SECONDARY} textAlign="center">
              Use numbers only
            </StyledText>
            <StyledText
              size={14}
              color={COLORS.SECONDARY}
              textAlign="center"
              lineHeight={18}
              textStyle={styles.text}>
              PLEASE KEEP THIS PIN SAFE AND DO NOT SHARE WITH ANYONE ELSE
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
              title={STRINGS.BUTTON_LABELS.SAVE}
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
export default ResetSecurityPinScreen;
