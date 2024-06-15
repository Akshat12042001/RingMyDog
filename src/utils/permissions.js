import {Platform} from 'react-native';
import {requestMultiple, PERMISSIONS, RESULTS} from 'react-native-permissions';

export async function getPermission() {
  let isBlockCase = false,
    isDenyCase = false;

  try {
    const permissionArray = Platform.select({
      android:
        Platform.constants['Release'] >= '13'
          ? [
              PERMISSIONS.ANDROID.CAMERA,
              PERMISSIONS.ANDROID.READ_MEDIA_IMAGES,
              PERMISSIONS.ANDROID.READ_MEDIA_VIDEO,
            ]
          : [
              PERMISSIONS.ANDROID.CAMERA,
              PERMISSIONS.ANDROID.WRITE_EXTERNAL_STORAGE,
              PERMISSIONS.ANDROID.READ_EXTERNAL_STORAGE,
            ],

      ios: [PERMISSIONS.IOS.CAMERA, PERMISSIONS.IOS.PHOTO_LIBRARY],
    });
    const statuses = await requestMultiple(permissionArray);
    console.log({statuses});
    for (let i = 0; i < permissionArray.length; i++) {
      if (
        statuses[permissionArray[i]] === RESULTS.BLOCKED ||
        statuses[permissionArray[i]] === RESULTS.LIMITED
      ) {
        isBlockCase = true;
        break;
      } else if (statuses[permissionArray[i]] !== RESULTS.GRANTED) {
        isDenyCase = true;
        break;
      }
    }
  } catch (err) {
    console.log('1', err);
  }
  return isBlockCase || isDenyCase
    ? {status: false, isBlocked: isBlockCase ? true : false}
    : {status: true};
}
