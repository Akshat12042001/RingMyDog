import React from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import styles from './styles';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {COLORS, STRINGS} from '../../../constants';
import {SharedStyles} from '../../../shared';

function DrawerItem({title, onPress}) {
  return (
    <TouchableOpacity
      style={styles.rootContainer}
      onPress={onPress}
      hitSlop={SharedStyles.hitSlop10}>
      <View style={styles.container}>
        <Ionicons name="caret-forward" size={20} color={COLORS.SECONDARY} />
        <Text style={styles.titleText}>{title}</Text>
        {title === STRINGS.DRAWER.NOTIFICATION && (
          <View
            style={{
              height: 20,
              width: 20,
              borderRadius: 10,
              backgroundColor: COLORS.PRIMARY,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text style={{color: COLORS.SECONDARY}}>{'1'}</Text>
          </View>
        )}
      </View>
    </TouchableOpacity>
  );
}

export default DrawerItem;
