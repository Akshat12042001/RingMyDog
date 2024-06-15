import React, {Component} from 'react';
import {
  Button,
  DropdownComponent,
  Footer,
  Header,
  Input,
  PhoneInput,
  ScreenContainer,
} from '../../../components/atoms';
import {
  ASSETS,
  COLORS,
  ENUMS,
  FORM_SCHEMA,
  NAVIGATION,
  STRINGS,
} from '../../../constants';
import {Formik} from 'formik';
import {Image, TouchableOpacity, View} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import styles from './styles';
import {showAlert, showSuccess} from '../../../utils/alerts';

class YourProfileScreen extends Component {
  constructor(props) {
    super(props);

    this.initialValues = {
      title: '',
      firstName: '',
      middleName: '',
      surName: '',
      countryResidence: '',
      homeAddress: '',
      mobileNumber: '',
      homeNumber: '',
      reward: '',
    };

    this.formRef = null;
    this.form = FORM_SCHEMA.YOUR_PROFILE;
    this.inputRefs = this.form.fields.map(() => null);
  }

  onFormSubmit = () => {
    showSuccess('Your profile created successfully!');
    setTimeout(() => {
      this.formRef.resetForm(this.initialValues);
    }, 2000);
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
            title={'YOUR PROFILE'}
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
                <View style={styles.container}>
                  {this.form.fields.map((field, index) => {
                    const fieldKey = field?.type;
                    if (fieldKey === 'title') {
                      return (
                        <DropdownComponent
                          placeholder={field?.placeholder}
                          data={ENUMS.TITLE_DATA}
                          value={values[fieldKey]}
                          onChange={text => setFieldValue('title', text?.value)}
                          error={errors?.[fieldKey]}
                        />
                      );
                    }
                    if (fieldKey === 'countryResidence') {
                      return (
                        <DropdownComponent
                          placeholder={field?.placeholder}
                          data={ENUMS.COUNTRY_DATA}
                          value={values[fieldKey]}
                          onChange={text =>
                            setFieldValue('countryResidence', text?.value)
                          }
                          error={errors?.[fieldKey]}
                        />
                      );
                    }
                    if (fieldKey === 'mobileNumber') {
                      return (
                        <PhoneInput
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
                    }
                    if (fieldKey === 'homeNumber') {
                      return (
                        <PhoneInput
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
              onPress={() => this.formRef.handleSubmit()}
            />
          </View>
          <Footer showTermsText />
        </KeyboardAwareScrollView>
      </ScreenContainer>
    );
  }
}
export default YourProfileScreen;
