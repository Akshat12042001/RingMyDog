import React, {Component} from 'react';
import {
  Button,
  Header,
  Input,
  PhoneInput,
  ScreenContainer,
  StyledText,
} from '../../../components/atoms';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {COLORS, FORM_SCHEMA, NAVIGATION, STRINGS} from '../../../constants';
import {Formik} from 'formik';
import {View} from 'react-native';
import styles from './styles';
import {showSuccess} from '../../../utils/alerts';

class DogBreederScreen extends Component {
  constructor(props) {
    super(props);
    this.initialValues = {
      title: '',
      fullname: '',
      address: '',
      contactNumber: '',
      dogBreedingBusinessName: '',
      dogBreedingBusinessAddress: '',
    };

    this.formRef = null;
    this.form = FORM_SCHEMA.DOG_BREEDER;
    this.inputRefs = this.form.fields.map(() => null);
  }

  onFormSubmit = () => {
    showSuccess('Your have successfully filled the form');
    setTimeout(() => {
      this.props.navigation.navigate(NAVIGATION.STACK.PROFILE, {
        screen: NAVIGATION.PROFILE.DOG_PROFILE,
      });
    }, 1000);
    this.formRef.resetForm(this.initialValues);
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
            title={'DOG BREEDER'}
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
                    if (fieldKey === 'contactNumber') {
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
                  <StyledText
                    color={COLORS.SECONDARY}
                    textAlign="center"
                    textStyle={{fontWeight: '700'}}>
                    ARE YOU REGISTERED TO BREED OR ADVERTISE TO SELL DOGS?
                  </StyledText>
                  <View style={styles.buttonContainer}>
                    <Button
                      title={'No'}
                      containerStyles={styles.backButton}
                      onPress={this.props.navigation.goBack}
                    />
                    <View style={styles.dummyView} />
                    <Button
                      title={'Yes'}
                      containerStyles={styles.backButton}
                      onPress={() => this.formRef.handleSubmit()}
                    />
                  </View>
                  <StyledText
                    color={COLORS.SECONDARY}
                    textAlign="center"
                    size={14}
                    textStyle={{marginTop: 10}}>
                    (IF YOU ARE NOT REGISTERED TO BREED OR ADVERTISE TO SELL
                    DOGS, YOU CANNOT USE OUR APP TO SELL OR ADVERTISETO DO SO.)
                  </StyledText>
                  <StyledText
                    color={COLORS.SECONDARY}
                    textAlign="center"
                    size={14}
                    textStyle={{marginTop: 10}}>
                    IF YOU BREED DOGS FOR SALE, YOU WILL NEED A DOG BREEDING
                    LICENCE. A LICENCE IS REQUIRED FOR EITHER OR BOTH OF THE
                    FOLLOWING:
                  </StyledText>
                  <StyledText
                    color={COLORS.SECONDARY}
                    textAlign="center"
                    size={14}
                    textStyle={{marginTop: 10}}>
                    BREEDING THREE OR MORE LITTERS OF PUPPIES IN ANY 12 MONTHS
                    PERIOD. BREEDING DOGS AND ADVERTISING A BUSINESS OF SELLING
                    DOGS.
                  </StyledText>
                  <StyledText
                    color={COLORS.SECONDARY}
                    textAlign="center"
                    size={14}
                    textStyle={{marginTop: 10}}>
                    PLEASE NOTE THAT RING MY DOG-THE WANTED DOG POSTER APP,
                    REQUIRES THAT ALL DOGS HAVE A RING MY DOG-THE WANTED DOG
                    POSTER APP PROFILE. THIS INCLUDES ALL THE MUMS AND DADS OF
                    PUPPIES.
                  </StyledText>
                  <StyledText
                    color={COLORS.SECONDARY}
                    textAlign="center"
                    size={14}
                    textStyle={{marginTop: 10}}>
                    OUR USERS WILL SCAN EACH DOG TO MAKE SURE THAT THEY ARE NOT
                    ON THE LOST OR STOLEN BROADCAST LIST.
                  </StyledText>
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
              title={STRINGS.BUTTON_LABELS.SAVE}
              containerStyles={styles.backButton}
              onPress={() => this.formRef.handleSubmit()}
            />
          </View>
        </KeyboardAwareScrollView>
      </ScreenContainer>
    );
  }
}

export default DogBreederScreen;
