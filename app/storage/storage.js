import AsyncStorage from "@react-native-async-storage/async-storage";

const storageName = "storageDB";

const storeData = async (value) => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem(storageName, jsonValue);
  } catch (error) {
    console.log("Error in storing data", error);
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

export default { storeData, getData };
