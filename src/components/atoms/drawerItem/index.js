import React from 'react';
import {View, TouchableOpacity, Text, Image} from 'react-native';
import styles from './styles';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {ASSETS, COLORS} from '../../../constants';
import {SharedStyles} from '../../../shared';

function DrawerItem({leftIcon, title, rightIcon = false, onPress}) {
  return (
    <TouchableOpacity
      style={styles.rootContainer}
      onPress={onPress}
      hitSlop={SharedStyles.hitSlop10}>
      <View style={styles.container}>
        <Ionicons name="caret-forward" size={20} color={COLORS.SECONDARY} />
        <Text style={styles.titleText}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
}

export default DrawerItem;
