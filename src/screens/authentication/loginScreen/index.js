import React, {Component} from 'react';
import {
  Button,
  Footer,
  Header,
  Input,
  ScreenContainer,
} from '../../../components/atoms';
import {FORM_SCHEMA, STRINGS} from '../../../constants';
import {Formik} from 'formik';
import {View} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import styles from './styles';
import {connect} from 'react-redux';
import {loginRequest} from '../../../redux/auth/auth.action';
import {showSuccess} from '../../../utils/alerts';

class LoginScreen extends Component {
  constructor(props) {
    super(props);

    this.initialValues = {
      userName: '',
      password: '',
    };

    this.formRef = null;
    this.form = FORM_SCHEMA.LOGIN;
    this.inputRefs = this.form.fields.map(() => null);
  }

  onFormSubmit = values => {
    showSuccess('You logged in successfully!');
    setTimeout(() => {
      this.props.loginRequest();
    }, 1000);
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
          contentContainerStyle={{flex: 1}}
          showsVerticalScrollIndicator={false}
          resetScrollToCoords={{x: 0, y: 0}}>
          <Header title={STRINGS.PLACEHOLDERS.LOGIN_NOW} />
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
        </KeyboardAwareScrollView>
        <View style={styles.buttonContainer}>
          <Button
            title={STRINGS.BUTTON_LABELS.BACK}
            containerStyles={styles.backButton}
            onPress={this.props.navigation.goBack}
          />
          <View style={styles.dummyView} />
          <Button
            title={STRINGS.BUTTON_LABELS.LOGIN}
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

export default connect(mapStateToProps, {loginRequest})(LoginScreen);
