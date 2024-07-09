import React, {Component} from 'react';
import {
  Button,
  DropdownComponent,
  Footer,
  Header,
  Input,
  ScreenContainer,
  StyledText,
} from '../../../components/atoms';
import {
  COLORS,
  ENUMS,
  FORM_SCHEMA,
  NAVIGATION,
  STRINGS,
} from '../../../constants';
import {Formik} from 'formik';
import {View} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import styles from './styles';
import {showSuccess} from '../../../utils/alerts';
import {connect} from 'react-redux';
import {dogBreeder} from '../../../redux/auth/auth.reducer';

class SignUpScreen extends Component {
  constructor(props) {
    super(props);

    this.initialValues = {
      userName: '',
      password: '',
      confirmPassword: '',
      profileType: '',
    };

    this.formRef = null;
    this.form = FORM_SCHEMA.SIGN_UP;
    this.inputRefs = this.form.fields.map(() => null);
  }
  onFormSubmit = values => {
    if (values?.profileType === 'Dog breeder') {
      this.props?.dogBreeder(true);
    } else if (values?.profileType === 'Dog owner') {
      this.props?.dogBreeder(false);
    }
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
              setFieldValue,
            }) => {
              return (
                <View style={styles.container}>
                  {this.form.fields.map((field, index) => {
                    const fieldKey = field?.type;
                    if (fieldKey === 'profileType') {
                      return (
                        <DropdownComponent
                          placeholder={field?.placeholder}
                          data={ENUMS.USER_TYPE}
                          value={values[fieldKey]}
                          onChange={text =>
                            setFieldValue('profileType', text?.value)
                          }
                          error={errors?.[fieldKey]}
                        />
                      );
                    }
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

const mapStateToProps = state => ({});
export default connect(mapStateToProps, {dogBreeder})(SignUpScreen);
