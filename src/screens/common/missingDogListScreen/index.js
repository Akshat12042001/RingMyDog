import React, {Component} from 'react';
import ScreenContainer from '../../../components/atoms/screenContainer';
import {FlatList, Image, ScrollView, View} from 'react-native';
import {Button, Footer, Header, StyledText} from '../../../components/atoms';
import {ASSETS, COLORS, NAVIGATION, STRINGS} from '../../../constants';
import {DogBreederItemCard} from '../../../components/molecules';
import styles from './styles';

const DATA = [
  {
    image: ASSETS.DOG_FACE,
    dogName: 'Brownie',
    dogAge: '2 years',
    dogBreed: 'RotWeiler',
    dogMark: 'white mark on nose',
    dogMissingDate: '17, november, 2023',
    dogMissingCountry: 'United Kingdom',
    dogMissingArea: 'CA, road21, London',
    dogCircumstances: 'When dog is going to park',
  },
  {
    image: ASSETS.DOG_FACE,
    dogName: 'Brownie',
    dogAge: '2 years',
    dogBreed: 'RotWeiler',
    dogMark: 'white mark on nose',
    dogMissingDate: '17, november, 2023',
    dogMissingCountry: 'United Kingdom',
    dogMissingArea: 'CA, road21, London',
    dogCircumstances: 'When dog is going to park',
  },
  {
    image: ASSETS.DOG_FACE,
    dogName: 'Brownie',
    dogAge: '2 years',
    dogBreed: 'RotWeiler',
    dogMark: 'white mark on nose',
    dogMissingDate: '17, november, 2023',
    dogMissingCountry: 'United Kingdom',
    dogMissingArea: 'CA, road21, London',
    dogCircumstances: 'When dog is going to park',
  },
  {
    image: ASSETS.DOG_FACE,
    dogName: 'Brownie',
    dogAge: '2 years',
    dogBreed: 'RotWeiler',
    dogMark: 'white mark on nose',
    dogMissingDate: '17, november, 2023',
    dogMissingCountry: 'United Kingdom',
    dogMissingArea: 'CA, road21, London',
    dogCircumstances: 'When dog is going to park',
  },
];

class MissingDogListScreen extends Component {
  onItemPress = () => {
    this.props.navigation.navigate(NAVIGATION.STACK.COMMON, {
      screen: NAVIGATION.COMMON.PROFILE_SUBMITTED_SCREEN,
      params: {
        dogMissingDate: '18-06-2024',
        dogMissingCountry: 'United kingdom',
        dogMissingArea: 'CA, road 21, london',
        dogMissingCircumstances: 'when dog is going to park',
      },
    });
  };
  renderItem = ({item, index}) => {
    return (
      <DogBreederItemCard
        key={`${index}`}
        image={item?.image}
        dogAge={item?.dogAge}
        dogName={item?.dogName}
        dogBreed={item?.dogBreed}
        dogMark={item?.dogMark}
        dogMissingDate={item?.dogMissingDate}
        dogMissingCountry={item?.dogMissingCountry}
        dogMissingArea={item?.dogMissingArea}
        dogCircumstances={item?.dogCircumstances}
        onPress={this.onItemPress}
      />
    );
  };

  renderHeader = () => {
    return (
      <Header
        title="BROADCASTED LIST OF MISSING DOGS."
        isDrawerVisible
        onPress={() => this.props?.navigation?.toggleDrawer()}
      />
    );
  };

  onNextPress = () => {
    this.props.navigation.navigate(NAVIGATION.STACK.COMMON, {
      screen: NAVIGATION.COMMON.MISSING_DOG_INFO_SCREEN,
    });
  };

  render() {
    return (
      <ScreenContainer>
        <FlatList
          data={DATA}
          renderItem={this.renderItem}
          showsVerticalScrollIndicator={false}
          ListHeaderComponent={this.renderHeader}
        />
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
            onPress={this.onNextPress}
          />
        </View>
        <Footer showTermsText />
      </ScreenContainer>
    );
  }
}
export default MissingDogListScreen;
