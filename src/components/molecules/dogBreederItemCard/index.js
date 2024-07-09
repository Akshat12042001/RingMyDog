import React from 'react';
import {Image, View} from 'react-native';
import {Button, StyledText} from '../../atoms';
import {COLORS} from '../../../constants';
import styles from './styles';

const DogBreederItemCard = ({
  image = '',
  dogName = '',
  dogAge = '',
  dogBreed = '',
  dogMark = '',
  dogMissingDate = '',
  dogMissingCountry = '',
  dogMissingArea = '',
  dogCircumstances = '',
  onPress = undefined,
}) => {
  return (
    <View style={styles.root}>
      <View>
        <Image
          source={image}
          style={styles.imageContainer}
          resizeMode="contain"
        />
        <Button title="PROFILE" onPress={onPress} />
      </View>
      <View style={styles.itemContainer}>
        <View style={styles.itemSubContainer}>
          <StyledText textStyle={styles.text} color={COLORS.SECONDARY}>
            {'Dog name : '}
          </StyledText>
          <StyledText color={COLORS.SECONDARY}>{dogName}</StyledText>
        </View>
        <View style={styles.itemSubContainer}>
          <StyledText textStyle={styles.text} color={COLORS.SECONDARY}>
            {'Dog age : '}
          </StyledText>
          <StyledText color={COLORS.SECONDARY}>{dogAge}</StyledText>
        </View>
        <View style={styles.itemSubContainer}>
          <StyledText textStyle={styles.text} color={COLORS.SECONDARY}>
            {'Dog breed : '}
          </StyledText>
          <StyledText color={COLORS.SECONDARY}>{dogBreed}</StyledText>
        </View>
        <View style={{}}>
          <StyledText textStyle={styles.text} color={COLORS.SECONDARY}>
            {'Any special mark'}
          </StyledText>
          <StyledText color={COLORS.SECONDARY}>{dogMark}</StyledText>
        </View>
        <View style={{}}>
          <StyledText textStyle={styles.text} color={COLORS.SECONDARY}>
            {'Dog missing date'}
          </StyledText>
          <StyledText color={COLORS.SECONDARY}>{dogMissingDate}</StyledText>
        </View>
        <View style={{}}>
          <StyledText textStyle={styles.text} color={COLORS.SECONDARY}>
            {'Country where dog missing'}
          </StyledText>
          <StyledText color={COLORS.SECONDARY}>{dogMissingCountry}</StyledText>
        </View>
        <View style={{}}>
          <StyledText textStyle={styles.text} color={COLORS.SECONDARY}>
            {'Area where dog missing'}
          </StyledText>
          <StyledText color={COLORS.SECONDARY}>{dogMissingArea}</StyledText>
        </View>
        <View style={{}}>
          <StyledText textStyle={styles.text} color={COLORS.SECONDARY}>
            {'Circumstances how dog get missing'}
          </StyledText>
          <StyledText color={COLORS.SECONDARY}>{dogCircumstances}</StyledText>
        </View>
      </View>
    </View>
  );
};

export default DogBreederItemCard;
