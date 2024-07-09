import React, {Component} from 'react';
import {
  Button,
  Footer,
  Header,
  Input,
  MissingDogItem,
  ScreenContainer,
  StyledText,
} from '../../../components/atoms';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {Image, View} from 'react-native';
import {
  ASSETS,
  COLORS,
  FORM_SCHEMA,
  NAVIGATION,
  STRINGS,
} from '../../../constants';
import styles from './styles';
import {Formik} from 'formik';
import Ionicons from 'react-native-vector-icons/Ionicons';
import moment from 'moment';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import {showSuccess} from '../../../utils/alerts';

class MissingDogInformationScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: undefined,
      showDatePicker: false,
    };
    this.initialValues = {
      dogMissingDate: '',
      dogMissingCountry: '',
      dogMissingArea: '',
      dogMissingCircumstances: '',
    };

    this.formRef = null;
    this.form = FORM_SCHEMA.DOG_MISSING_SCREEN;
    this.inputRefs = this.form.fields.map(() => null);
  }
  handleDateConfirm = date => {
    this.toggleDatePicker();
    this.setState({date});
    this.formRef.setFieldValue(
      'dogMissingDate',
      moment(date).format('DD-MM-YYYY'),
    );
  };

  toggleDatePicker = () => {
    this.setState({showDatePicker: !this.state.showDatePicker});
  };

  onFormSubmit = values => {
    this.props.navigation.navigate(NAVIGATION.STACK.COMMON, {
      params: values,
      screen: NAVIGATION.COMMON.PROFILE_SUBMITTED_SCREEN,
    });
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
            title={'INFORMATION ABOUT YOUR DOG'}
            isDrawerVisible
            onPress={() => this.props?.navigation?.toggleDrawer()}
          />
          <View style={styles.root}>
            <Image
              source={ASSETS.DOG_FACE}
              style={styles.imageDog}
              resizeMode="cover"
            />
            <MissingDogItem title="Dog name" value="Brownie" />
            <MissingDogItem title="Dog breed" value="Rotweiler" />
            <MissingDogItem title="Dog age" value="4 years" />
            <MissingDogItem
              title="Any special marking"
              value="White mark on nose"
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
                  <View style={styles.formik}>
                    {this.form.fields.map((field, index) => {
                      const fieldKey = field?.type;
                      if (fieldKey === 'dogMissingCircumstances') {
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
                            containerStyle={{height: 100}}
                            multiline
                            rightIcon={
                              fieldKey === 'dogMissingDate' ? (
                                <Ionicons
                                  name="calendar-outline"
                                  size={30}
                                  color={COLORS.LIGHT_YELLOW}
                                />
                              ) : (
                                ''
                              )
                            }
                            onPress={
                              fieldKey === 'dogMissingDate'
                                ? this.toggleDatePicker
                                : undefined
                            }
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
                          rightIcon={
                            fieldKey === 'dogMissingDate' ? (
                              <Ionicons
                                name="calendar-outline"
                                size={30}
                                color={COLORS.LIGHT_YELLOW}
                              />
                            ) : (
                              ''
                            )
                          }
                          onPress={
                            fieldKey === 'dogMissingDate'
                              ? this.toggleDatePicker
                              : undefined
                          }
                        />
                      );
                    })}
                  </View>
                );
              }}
            </Formik>
            <View style={styles.dogImagesContainer}>
              <Image
                source={ASSETS.DOG_FACE}
                style={styles.bottomDogImage}
                resizeMode="cover"
              />
              <Image
                source={ASSETS.DOG_FACE}
                style={styles.bottomDogImage}
                resizeMode="cover"
              />
              <Image
                source={ASSETS.DOG_FACE}
                style={styles.bottomDogImage}
                resizeMode="cover"
              />
            </View>
            <View style={styles.bottomDataContainer}>
              <StyledText
                color={COLORS.SECONDARY}
                textAlign="center"
                textStyle={styles.bottomTitleText}>
                Contact details
              </StyledText>
              <View style={styles.bottomLine} />
              <StyledText textAlign="center">Mr Simson singh katoch</StyledText>
              <MissingDogItem title="Post code" value="160059" />
              <MissingDogItem title="Contact number" value="+44-98150034580" />
            </View>
            <View style={styles.bottomDataContainer}>
              <StyledText
                color={COLORS.SECONDARY}
                textAlign="center"
                textStyle={styles.bottomTitleText}>
                Rewards
              </StyledText>
              <View style={styles.bottomLine} />
              <Input value={'200.00 GBP'} editable={false} />
              <StyledText textAlign="center">
                Reward is offered for safe return of
              </StyledText>
              <StyledText textAlign="center" textStyle={styles.text}>
                Brownie
              </StyledText>
            </View>
          </View>
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
              onPress={() => this.formRef.handleSubmit()}
            />
          </View>
          <Footer showTermsText />
        </KeyboardAwareScrollView>
        <DateTimePickerModal
          isVisible={this.state.showDatePicker}
          mode="date"
          date={this.state.date}
          onConfirm={this.handleDateConfirm}
          onCancel={this.toggleDatePicker}
          display="spinner"
        />
      </ScreenContainer>
    );
  }
}
export default MissingDogInformationScreen;
