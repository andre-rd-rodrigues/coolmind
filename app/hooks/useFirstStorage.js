import { useState, useEffect } from "react";
import storage from "../storage/storage";
import localDB from "../utility/localDB";
import Constants from "expo-constants";

const useFirstStorage = () => {
  const [storageDB, setStorageDB] = useState();
  const [walkthrough, setWalkthrough] = useState();

  const firstStorage = async () => {
    /* await storage.storeData(localDB); */
    /*  await storage.storeData(true, "walkthrough"); */

    try {
      const data = await storage.getData();
      const version = await storage.getVersion();
      const walkthroughResponse = await storage.getData("walkthrough");

      const isNewVersion = () =>
        version !== Constants.manifest.version ? true : false;

      if (data && !isNewVersion()) {
        setWalkthrough(walkthroughResponse);
        setStorageDB(data);
      } else {
        //Store walkthrough
        await storage.storeData(true, "walkthrough");

        //Store data
        const result = await storage.storeData(localDB);
        setStorageDB(result);

        //Store version
        await storage.storeVersion();
      }
    } catch (error) {
      console.log("Error in first storing...", error);
    }
  };

  useEffect(() => {
    firstStorage();
  }, []);

  return { storageDB, setStorageDB, walkthrough };
};
export default useFirstStorage;
