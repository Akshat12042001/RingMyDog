import React, {Component} from 'react';
import ScreenContainer from '../../../components/atoms/screenContainer';
import {FlatList, Image, ScrollView, View} from 'react-native';
import {Button, Footer, Header, StyledText} from '../../../components/atoms';
import {ASSETS, COLORS, STRINGS} from '../../../constants';
import {DogBreederItemCard} from '../../../components/molecules';
import styles from './styles';

const DATA = [
  {
    image: ASSETS.DOG_FACE,
    dogName: 'Brownie',
    dogAge: '2 years',
    dogPrice: '200.00 GBP',
  },
  {
    image: ASSETS.DOG_FACE,
    dogName: 'Brownie',
    dogAge: '2 years',
    dogPrice: '200.00 GBP',
  },
  {
    image: ASSETS.DOG_FACE,
    dogName: 'Brownie',
    dogAge: '2 years',
    dogPrice: '200.00 GBP',
  },
  {
    image: ASSETS.DOG_FACE,
    dogName: 'Brownie',
    dogAge: '2 years',
    dogPrice: '200.00 GBP',
  },
];

class DogBreederScreen extends Component {
  renderItem = ({item, index}) => {
    return (
      <DogBreederItemCard
        key={`${index}`}
        image={item?.image}
        dogAge={item?.dogAge}
        dogName={item?.dogName}
        dogPrice={item?.dogPrice}
      />
    );
  };

  renderHeader = () => {
    return (
      <Header
        title="DOG BREEDER"
        isDrawerVisible
        onPress={() => this.props?.navigation?.toggleDrawer()}
      />
    );
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
            onPress={() => this.formRef.handleSubmit()}
          />
        </View>
        <Footer showTermsText />
      </ScreenContainer>
    );
  }
}
export default DogBreederScreen;
