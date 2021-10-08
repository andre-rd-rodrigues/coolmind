import AsyncStorage from "@react-native-async-storage/async-storage";
import Constants from "expo-constants";

const storageName = "storageDB";

const storeData = async (value) => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem(storageName, jsonValue);
  } catch (error) {
    console.log("Error in storing data", error);
  }
};

const storeVersion = async () => {
  try {
    await AsyncStorage.setItem("version", Constants.manifest.version);
  } catch (error) {
    console.log("Error in storing version", error);
  }
};

const getData = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem(storageName);
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    console.log("Error in getting data", error);
  }
};
const getVersion = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem("version");
    return jsonValue != null ? jsonValue : null;
  } catch (e) {
    console.log("Error in getting version", e);
  }
};

export default { storeData, storeVersion, getData, getVersion };
