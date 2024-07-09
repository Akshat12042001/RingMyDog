import React from 'react';
import * as Yup from 'yup';
import {STRINGS} from '.';

const fields = {
  userName: {
    placeholder: STRINGS.PLACEHOLDERS.USERNAME,
    type: 'userName',
    autoCompleteType: 'name',
  },
  password: {
    placeholder: STRINGS.PLACEHOLDERS.PASSWORD,
    type: 'password',
    isPassword: true,
  },
  confirmPassword: {
    placeholder: STRINGS.PLACEHOLDERS.CONFIRM_PASSWORD,
    type: 'confirmPassword',
    isPassword: true,
  },
  profileType: {
    placeholder: STRINGS.PLACEHOLDERS.PROFILE_TYPE,
    type: 'profileType',
  },
  securityPin: {
    placeholder: STRINGS.PLACEHOLDERS.CREATE_FIVE_DIGIT_SECURIRY_PIN,
    type: 'securityPin',
    keyboardType: 'number-pad',
  },
  dogName: {
    placeholder: STRINGS.PLACEHOLDERS.DOG_NAME,
    type: 'dogName',
  },
  dogAge: {
    placeholder: STRINGS.PLACEHOLDERS.DOG_AGE,
    type: 'dogAge',
    editable: false,
  },
  dogBreed: {
    placeholder: STRINGS.PLACEHOLDERS.DOG_BREED,
    type: 'dogBreed',
  },
  dogColor: {
    placeholder: STRINGS.PLACEHOLDERS.DOG_COLOR,
    type: 'dogColor',
  },
  specialMarking: {
    placeholder: STRINGS.PLACEHOLDERS.SPECIAL_MARKING,
    type: 'specialMarking',
  },
  title: {
    placeholder: STRINGS.PLACEHOLDERS.TITLE,
    type: 'title',
  },
  firstName: {
    placeholder: STRINGS.PLACEHOLDERS.FIRST_NAME,
    type: 'firstName',
  },
  middleName: {
    placeholder: STRINGS.PLACEHOLDERS.MIDDLE_NAME,
    type: 'middleName',
  },
  surName: {
    placeholder: STRINGS.PLACEHOLDERS.SURNAME,
    type: 'surName',
  },
  countryResidence: {
    placeholder: STRINGS.PLACEHOLDERS.COUNTRY_OF_RESIDENCE,
    type: 'countryResidence',
  },
  homeAddress: {
    placeholder: STRINGS.PLACEHOLDERS.HOME_ADDRESS,
    type: 'homeAddress',
  },
  mobileNumber: {
    placeholder: STRINGS.PLACEHOLDERS.MOBILE_NUMBER,
    type: 'mobileNumber',
  },
  homeNumber: {
    placeholder: STRINGS.PLACEHOLDERS.HOME_NUMBER,
    type: 'homeNumber',
  },
  reward: {
    placeholder: STRINGS.PLACEHOLDERS.REWARD,
    type: 'reward',
  },
  favouriteColor: {
    placeholder: STRINGS.PLACEHOLDERS.FAVOURITE_COLOR,
    type: 'favouriteColor',
  },
  favouriteTeacher: {
    placeholder: STRINGS.PLACEHOLDERS.FAVOURITE_TEACHER,
    type: 'favouriteTeacher',
  },
  dogRegistrationNumber: {
    placeholder: STRINGS.PLACEHOLDERS.DOG_REGISTRATION_NUMBER,
    type: 'dogRegistrationNumber',
  },
  ownerName: {
    placeholder: STRINGS.PLACEHOLDERS.OWNER_NAME,
    type: 'ownerName',
  },
  ownerContactNumber: {
    placeholder: STRINGS.PLACEHOLDERS.OWNER_CONTACT_NUMBER,
    type: 'ownerContactNumber',
  },
  ownerAddress: {
    placeholder: STRINGS.PLACEHOLDERS.OWNER_ADDRESS,
    type: 'ownerAddress',
  },
  newOwnerName: {
    placeholder: STRINGS.PLACEHOLDERS.NEW_OWNER_NAME,
    type: 'newOwnerName',
  },
  newOwnerContactNumber: {
    placeholder: STRINGS.PLACEHOLDERS.NEW_OWNER_CONTACT_NUMBER,
    type: 'newOwnerContactNumber',
  },
  newOwnerAddress: {
    placeholder: STRINGS.PLACEHOLDERS.NEW_OWNER_ADDRESS,
    type: 'newOwnerAddress',
  },
  fullname: {
    placeholder: STRINGS.PLACEHOLDERS.FULLNAME,
    type: 'fullname',
  },
  address: {
    placeholder: STRINGS.PLACEHOLDERS.ADDRESS,
    type: 'address',
  },
  contactNumber: {
    placeholder: STRINGS.PLACEHOLDERS.CONTACT_NUMBER,
    type: 'contactNumber',
  },
  dogBreedingBusinessName: {
    placeholder: STRINGS.PLACEHOLDERS.NAME_OF_DOG_BREEDING_BUSINESS,
    type: 'dogBreedingBusinessName',
  },
  dogBreedingBusinessAddress: {
    placeholder: STRINGS.PLACEHOLDERS.ADDRESS_OF_DOG_BREEDING_BUSINESS,
    type: 'dogBreedingBusinessAddress',
  },
  dogMissingDate: {
    placeholder: STRINGS.PLACEHOLDERS.DOG_MISSING_DATE,
    type: 'dogMissingDate',
    editable: false,
  },
  dogMissingCountry: {
    placeholder: STRINGS.PLACEHOLDERS.DOG_MISSING_COUNTRY,
    type: 'dogMissingCountry',
  },
  dogMissingArea: {
    placeholder: STRINGS.PLACEHOLDERS.DOG_MISSING_AREA,
    type: 'dogMissingArea',
  },
  dogMissingCircumstances: {
    placeholder: STRINGS.PLACEHOLDERS.DOG_MISSING_CIRCUMSTANCES,
    type: 'dogMissingCircumstances',
  },
};

const schemas = {
  stringRequired: Yup.string().required('Required'),
  array: Yup.array().of(Yup.string().required('Required').optional()),
  stringRequired2: Yup.string()
    .trim()
    .min(2, 'Must be at least 2 characters')
    .required('Required'),
  stringOptional: Yup.string()
    .trim()
    .min(2, 'Must be at least 2 characters')
    .optional(),
  email: Yup.string().email().required('Required'),
  emailOptional: Yup.string().email().optional(),
  phoneOptional: Yup.string().optional(),
  pincode: Yup.string().length(6).required('Required'),
  securityPin: Yup.string().length(5).required('Required'),
  numberInput: Yup.number().required('Required').nullable(),
  oldPassword: Yup.string()
    .min(8, 'Must be at least 8 characters')
    .required('Required'),
  password: Yup.string()
    .min(8, 'Must be at least 8 characters')
    .required('Required'),
  passwordConfirm: Yup.string()
    .oneOf([Yup.ref('password'), ''], 'Password must match')
    .min(8, 'Must be at least 8 characters')
    .required('Required'),
  numberInputOptional: Yup.number().optional(),
  newPassword: Yup.string()
    .min(8, 'Must be at least 8 characters')
    .required('Required'),
  confirmNewPassword: Yup.string()
    .oneOf([Yup.ref('newPassword'), ''], 'Password must match')
    .min(8, 'Must be at least 8 characters')
    .required('Required'),
};

export default {
  SIGN_UP: {
    fields: [
      fields.userName,
      fields.profileType,
      fields.password,
      fields.confirmPassword,
    ],
    schema: Yup.object().shape({
      userName: schemas.stringRequired,
      profileType: schemas.stringRequired,
      password: schemas.password,
      confirmPassword: schemas.passwordConfirm,
    }),
  },
  LOGIN: {
    fields: [fields.userName, fields.password],
    schema: Yup.object().shape({
      userName: schemas.stringRequired,
      password: schemas.password,
    }),
  },
  CREATE_FIVE_DIGIT_SECURIRY_PIN: {
    fields: [fields.securityPin],
    schema: Yup.object().shape({
      securityPin: schemas.stringRequired,
    }),
  },
  DOG_PROFILE: {
    fields: [
      fields.dogName,
      fields.dogAge,
      fields.dogBreed,
      fields.dogColor,
      fields.specialMarking,
    ],
    schema: Yup.object().shape({
      dogName: schemas.stringRequired,
      dogAge: schemas.stringRequired,
      dogBreed: schemas.stringRequired,
      dogColor: schemas.stringRequired,
      specialMarking: schemas.stringRequired,
    }),
  },
  YOUR_PROFILE: {
    fields: [
      fields.title,
      fields.firstName,
      fields.middleName,
      fields.surName,
      fields.countryResidence,
      fields.homeAddress,
      fields.mobileNumber,
      fields.homeNumber,
      fields.reward,
    ],
    schema: Yup.object().shape({
      title: schemas.stringRequired,
      firstName: schemas.stringRequired,
      middleName: schemas.stringOptional,
      surName: schemas.stringRequired,
      countryResidence: schemas.stringRequired,
      homeAddress: schemas.stringRequired,
      mobileNumber: schemas.stringRequired,
      homeNumber: schemas.stringOptional,
      reward: schemas.stringRequired,
    }),
  },
  RESET_SECURITY_PIN: {
    fields: [fields.favouriteColor, fields.favouriteTeacher],
    schema: Yup.object().shape({
      favouriteColor: schemas.stringRequired,
      favouriteTeacher: schemas.stringRequired,
    }),
  },
  TRANSFER_DOG: {
    fields: [
      fields.dogName,
      fields.dogAge,
      fields.dogBreed,
      fields.dogRegistrationNumber,
      fields.ownerName,
      fields.ownerContactNumber,
      fields.ownerAddress,
      fields.newOwnerName,
      fields.newOwnerContactNumber,
      fields.newOwnerAddress,
    ],
    schema: Yup.object().shape({
      dogName: schemas.stringRequired,
      dogAge: schemas.stringRequired,
      dogBreed: schemas.stringRequired,
      dogRegistrationNumber: schemas.stringRequired,
      ownerName: schemas.stringRequired,
      ownerContactNumber: schemas.stringRequired,
      ownerAddress: schemas.stringRequired,
      newOwnerName: schemas.stringRequired,
      newOwnerContactNumber: schemas.stringRequired,
      newOwnerAddress: schemas.stringRequired,
    }),
  },
  DOG_BREEDER: {
    fields: [
      fields.title,
      fields.fullname,
      fields.address,
      fields.contactNumber,
      fields.dogBreedingBusinessName,
      fields.dogBreedingBusinessAddress,
    ],
    schema: Yup.object().shape({
      title: schemas.stringRequired,
      fullname: schemas.stringRequired,
      address: schemas.stringRequired,
      contactNumber: schemas.stringRequired,
      dogBreedingBusinessName: schemas.stringRequired,
      dogBreedingBusinessAddress: schemas.stringRequired,
    }),
  },
  DOG_MISSING_SCREEN: {
    fields: [
      fields.dogMissingDate,
      fields.dogMissingCountry,
      fields.dogMissingArea,
      fields.dogMissingCircumstances,
    ],
    schema: Yup.object().shape({
      dogMissingDate: schemas.stringRequired,
      dogMissingCountry: schemas.stringRequired,
      dogMissingArea: schemas.stringRequired,
      dogMissingCircumstances: schemas.stringRequired,
    }),
  },
};
