import React, {Component} from 'react';
import ScreenContainer from '../../../components/atoms/screenContainer';
import {View} from 'react-native';
import styles from './styles';
import {COLORS, DOGS_BREEDS, FORM_SCHEMA, STRINGS} from '../../../constants';
import {
  Button,
  DropdownComponent,
  Header,
  Input,
  StyledText,
} from '../../../components/atoms';
import {Formik} from 'formik';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import Ionicons from 'react-native-vector-icons/Ionicons';
import moment from 'moment';
import DateTimePickerModal from 'react-native-modal-datetime-picker';

class TranferDogScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: undefined,
      showDatePicker: false,
    };
    this.initialValues = {
      dogName: '',
      dogAge: '',
      dogBreed: '',
      dogRegistrationNumber: '',
      ownerName: '',
      ownerContactNumber: '',
      ownerAddress: '',
      newOwnerName: '',
      newOwnerContactNumber: '',
      newOwnerAddress: '',
    };

    this.formRef = null;
    this.form = FORM_SCHEMA.TRANSFER_DOG;
    this.inputRefs = this.form.fields.map(() => null);
  }

  onFormSubmit = () => {};

  handleDateConfirm = date => {
    this.toggleDatePicker();
    this.setState({date});
    this.formRef.setFieldValue('dogAge', moment(date).format('DD-MM-YYYY'));
  };

  toggleDatePicker = () => {
    this.setState({showDatePicker: !this.state.showDatePicker});
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
            title={'TRANSFER DOG'}
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

                    if (fieldKey === 'newOwnerName') {
                      return (
                        <View>
                          <StyledText
                            textAlign="center"
                            color={COLORS.SECONDARY}
                            textStyle={styles.tranferText}>
                            Transfer to
                          </StyledText>
                          <Input
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
                        </View>
                      );
                    }

                    if (fieldKey === 'dogBreed') {
                      return (
                        <DropdownComponent
                          placeholder={field?.placeholder}
                          data={DOGS_BREEDS.map(it => ({
                            label: it,
                            value: it,
                          }))}
                          value={values[fieldKey]}
                          onChange={text =>
                            setFieldValue('dogBreed', text?.value)
                          }
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
                        onPress={
                          fieldKey === 'dogAge'
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
          <View style={styles.buttonContainer}>
            <Button
              title={STRINGS.BUTTON_LABELS.BACK}
              containerStyles={styles.backButton}
              onPress={this.props.navigation.goBack}
            />
            <View style={styles.dummyView} />
            <Button
              title={'TRANSFER'}
              containerStyles={styles.backButton}
              onPress={() => this.formRef.handleSubmit()}
            />
          </View>
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

export default TranferDogScreen;
