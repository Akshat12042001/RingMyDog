import React from 'react';
import {Image, View} from 'react-native';
import {Button, StyledText} from '../../atoms';
import {COLORS} from '../../../constants';
import styles from './styles';

const DogBreederItemCard = ({
  image = '',
  dogName = '',
  dogAge = '',
  dogPrice = '',
}) => {
  return (
    <View style={styles.root}>
      <View>
        <Image
          source={image}
          style={styles.imageContainer}
          resizeMode="contain"
        />
        <Button title="Contact" />
      </View>
      <View style={styles.itemContainer}>
        <View style={styles.itemSubContainer}>
          <StyledText textStyle={styles.text} color={COLORS.SECONDARY}>
            {'Dog Name : '}
          </StyledText>
          <StyledText color={COLORS.SECONDARY}>{dogName}</StyledText>
        </View>
        <View style={styles.itemSubContainer}>
          <StyledText textStyle={styles.text} color={COLORS.SECONDARY}>
            {'Dog Age : '}
          </StyledText>
          <StyledText color={COLORS.SECONDARY}>{dogAge}</StyledText>
        </View>
        <View style={styles.itemSubContainer}>
          <StyledText textStyle={styles.text} color={COLORS.SECONDARY}>
            {'Dog Price : '}
          </StyledText>
          <StyledText color={COLORS.SECONDARY}>{dogPrice}</StyledText>
        </View>
      </View>
    </View>
  );
};

export default DogBreederItemCard;
