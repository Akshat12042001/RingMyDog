import React, {Component} from 'react';
import {
  Button,
  DropdownComponent,
  Footer,
  Header,
  Input,
  ScreenContainer,
} from '../../../components/atoms';
import {
  ASSETS,
  COLORS,
  DOGS_BREEDS,
  FORM_SCHEMA,
  NAVIGATION,
  STRINGS,
} from '../../../constants';
import {Formik} from 'formik';
import {Image, LayoutAnimation, TouchableOpacity, View} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import styles from './styles';
import {showSuccess} from '../../../utils/alerts';
import Ionicons from 'react-native-vector-icons/Ionicons';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import moment from 'moment';
import {
  PickImageBottomModal,
  ViewUploadedModal,
} from '../../../components/modals';
import {ViewImage} from '../../../components/molecules';

class DogProfileScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: undefined,
      showDatePicker: false,
      showImagePickerModal: false,
      picturesArray: [],
      showUploadedPictureModal: false,
      selectedPicture: {},
      isOthersPressed: false,
    };

    this.initialValues = {
      dogName: '',
      dogAge: '',
      dogBreed: '',
      dogColor: '',
      specialMarking: '',
    };

    this.formRef = null;
    this.form = FORM_SCHEMA.DOG_PROFILE;
    this.inputRefs = this.form.fields.map(() => null);
  }

  onFormSubmit = () => {
    showSuccess('Your dog profile created successfully!');
    setTimeout(() => {
      this.props.navigation.navigate(NAVIGATION.PROFILE.YOUR_PROFILE_SCREEN);
      this.formRef.resetForm(this.initialValues);
    }, 1000);
  };

  handleDateConfirm = date => {
    this.toggleDatePicker();
    this.setState({date});
    this.formRef.setFieldValue('dogAge', moment(date).format('DD-MM-YYYY'));
  };

  toggleDatePicker = () => {
    this.setState({showDatePicker: !this.state.showDatePicker});
  };

  onSelect = it => {
    LayoutAnimation.easeInEaseOut();
    let array = this.state.picturesArray;
    array.push(it);
    this.setState({
      picturesArray: array,
    });
  };

  onViewPress = it => {
    this.setState({showUploadedPictureModal: true, selectedPicture: it});
  };

  onClosePress = it => {
    LayoutAnimation.easeInEaseOut();
    let newArray = this.state.picturesArray?.filter(
      item => item?.uri !== it?.uri,
    );
    this.setState({picturesArray: newArray});
  };
  render() {
    console.log(this.props?.route?.params);
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
            title={
              !!this.props?.route?.params?.title
                ? this.props?.route?.params?.title
                : STRINGS.PLACEHOLDERS.DOG_PROFILE
            }
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

                    if (
                      fieldKey === 'dogBreed' &&
                      !this.state.isOthersPressed
                    ) {
                      return (
                        <DropdownComponent
                          placeholder={field?.placeholder}
                          data={DOGS_BREEDS.map(it => ({
                            label: it,
                            value: it,
                          }))}
                          value={values[fieldKey]}
                          onChange={text => {
                            if (text?.value === 'Others') {
                              this.setState({isOthersPressed: true});
                            } else {
                              setFieldValue('dogBreed', text?.value);
                            }
                          }}
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
                        rightIcon={
                          fieldKey === 'dogAge' ? (
                            <Ionicons
                              name="calendar-outline"
                              size={30}
                              color={COLORS.LIGHT_YELLOW}
                            />
                          ) : (
                            ''
                          )
                        }
                        returnKeyType="next"
                        key={`field-${index}`}
                        value={values[fieldKey]}
                        onBlur={handleBlur(fieldKey)}
                        placeholder={field.placeholder}
                        onChangeText={handleChange(fieldKey)}
                        error={touched?.[fieldKey] && errors?.[fieldKey]}
                        onPress={
                          fieldKey === 'dogAge'
                            ? this.toggleDatePicker
                            : undefined
                        }
                      />
                    );
                  })}
                  <Button
                    title={STRINGS.BUTTON_LABELS.BIOMETRIC}
                    textColor={COLORS.PRIMARY}
                    onPress={() => {
                      this.props.navigation.navigate(NAVIGATION.STACK.COMMON, {
                        screen: NAVIGATION.COMMON.SCAN_DOG_NOSE_SCREEN,
                      });
                    }}
                  />
                  <TouchableOpacity
                    onPress={() => this.setState({showImagePickerModal: true})}
                    style={styles.dogPictureContainer}>
                    <Image
                      source={ASSETS.SELECT_DOG_IMAGE}
                      style={styles.dogPictureSubContainer}
                      resizeMode="contain"
                    />
                  </TouchableOpacity>
                  {this.state.picturesArray?.map((it, index) => {
                    return (
                      <ViewImage
                        key={`${index}`}
                        onViewPress={this.onViewPress?.bind(this, it)}
                        onClosePress={this.onClosePress?.bind(this, it)}
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
              title={
                !!!!this.props?.route?.params?.title
                  ? STRINGS.BUTTON_LABELS.SAVE
                  : STRINGS.BUTTON_LABELS.NEXT
              }
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
        <PickImageBottomModal
          isVisible={this.state.showImagePickerModal}
          onCloseModal={() => this.setState({showImagePickerModal: false})}
          onSelect={this.onSelect}
        />
        <ViewUploadedModal
          isVisible={this.state.showUploadedPictureModal}
          onBackdropPress={() =>
            this.setState({showUploadedPictureModal: false})
          }
          item={this.state.selectedPicture}
        />
      </ScreenContainer>
    );
  }
}
export default DogProfileScreen;
