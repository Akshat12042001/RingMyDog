import {ENUMS} from '../../../constants';
import strings from '../../../constants/strings';

export const getDrawerBasedOnUserType = isAddMoreVehcilePress => {
  const DATA = [
    {
      title: strings.DRAWER.SCAN_DOGE_NOSE,
      value: ENUMS.DRAWER_VALUES.SCAN_DOGE_NOSE,
    },
    {
      title: strings.DRAWER.DOG_BREEDER,
      value: ENUMS.DRAWER_VALUES.DOG_BREEDER,
    },
    {
      title: strings.DRAWER.EDIT_DOG_PROFILE,
      value: ENUMS.DRAWER_VALUES.EDIT_DOG_PROFILE,
    },
    {
      title: strings.DRAWER.TRANSFER_DOG,
      value: ENUMS.DRAWER_VALUES.TRANSFER_DOG,
    },
    {
      title: strings.DRAWER.RESET_PIN,
      value: ENUMS.DRAWER_VALUES.RESET_PIN,
    },
    {
      title: strings.DRAWER.ADD_MORE_DOGS,
      value: ENUMS.DRAWER_VALUES.ADD_MORE_DOGS,
    },
    {
      title: strings.DRAWER.DELETE_DOG_PROFILE,
      value: ENUMS.DRAWER_VALUES.DELETE_DOG_PROFILE,
    },
    {
      title: strings.DRAWER.DELETE_ACCOUNT,
      value: ENUMS.DRAWER_VALUES.DELETE_ACCOUNT,
    },
    {
      title: strings.DRAWER.LOGOUT,
      value: ENUMS.DRAWER_VALUES.LOGOUT,
    },
  ];
  return DATA;
};
