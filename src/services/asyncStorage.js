import AsyncStorage from '@react-native-async-storage/async-storage';

export const storeData = (key, value) => {
  AsyncStorage.setItem(key, value);
};
export const retrieveData = key => {
  return AsyncStorage.getItem(key);
};
export const removeData = key => {
  AsyncStorage.removeItem(key);
};
