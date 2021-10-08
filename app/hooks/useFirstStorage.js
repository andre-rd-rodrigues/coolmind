import { useState, useEffect } from "react";
import storage from "../storage/storage";
import localDB from "../utility/localDB";
import Constants from "expo-constants";

const useFirstStorage = () => {
  const [storageDB, setStorageDB] = useState();

  const firstStorage = async () => {
    /*  await storage.storeData(localDB); */
    try {
      const data = await storage.getData();
      const version = await storage.getVersion();

      const isNewVersion = () =>
        version !== Constants.manifest.version ? true : false;

      if (data && !isNewVersion()) {
        setStorageDB(data);
      } else {
        const result = await storage.storeData(localDB);
        await storage.storeVersion();
        setStorageDB(result);
      }
    } catch (error) {
      console.log("Error in first storing...", error);
    }
  };

  useEffect(() => {
    firstStorage();
  }, []);

  return { storageDB, setStorageDB };
};
export default useFirstStorage;
