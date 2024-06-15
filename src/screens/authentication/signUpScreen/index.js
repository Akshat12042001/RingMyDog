import React, {Component} from 'react';
import {
  Button,
  Footer,
  Header,
  Input,
  ScreenContainer,
  StyledText,
} from '../../../components/atoms';
import {COLORS, FORM_SCHEMA, NAVIGATION, STRINGS} from '../../../constants';
import {Formik} from 'formik';
import {View} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import styles from './styles';
import {showSuccess} from '../../../utils/alerts';

class SignUpScreen extends Component {
  constructor(props) {
    super(props);

    this.initialValues = {
      userName: '',
      password: '',
      confirmPassword: '',
    };

    this.formRef = null;
    this.form = FORM_SCHEMA.SIGN_UP;
    this.inputRefs = this.form.fields.map(() => null);
  }
  onFormSubmit = () => {
    showSuccess('Please login to continue!');
    setTimeout(() => {
      this.props.navigation.navigate(NAVIGATION.AUTH.LOGIN_SCREEN);
    }, 1000);
  };

  render() {
    return (
      <ScreenContainer>
        <KeyboardAwareScrollView
          enableOnAndroid={true}
          keyboardShouldPersistTaps="handled"
          enableResetScrollToCoords={true}
          contentContainerStyle={{flex: 1}}
          enableAutoAutomaticScroll={false}
          keyboardOpeningTime={Number.MAX_SAFE_INTEGER}
          showsVerticalScrollIndicator={false}>
          <Header title={STRINGS.PLACEHOLDERS.SIGNUP_NOW} />
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
              values,
              errors,
              touched,
            }) => {
              return (
                <View style={styles.container}>
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
                        placeholder={
                          fieldKey === 'confirmPassword'
                            ? field.placeholder
                            : `Create ${field.placeholder}`
                        }
                        onChangeText={handleChange(fieldKey)}
                        error={touched?.[fieldKey] && errors?.[fieldKey]}
                      />
                    );
                  })}
                  <StyledText color={COLORS.SECONDARY} textAlign="right">
                    Minimum 8 characters
                  </StyledText>
                </View>
              );
            }}
          </Formik>
        </KeyboardAwareScrollView>
        <View style={styles.buttonContainer}>
          <Button
            title={STRINGS.BUTTON_LABELS.BACK}
            containerStyles={styles.backButton}
            onPress={this.props.navigation.goBack}
          />
          <View style={styles.dummyView} />
          <Button
            title={STRINGS.BUTTON_LABELS.SIGNUP}
            containerStyles={styles.backButton}
            onPress={() => this.formRef.handleSubmit()}
          />
        </View>
        <Footer showTermsText />
      </ScreenContainer>
    );
  }
}
export default SignUpScreen;
