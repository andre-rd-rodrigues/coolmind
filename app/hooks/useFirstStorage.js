import { useState, useEffect } from "react";
import storage from "../storage/storage";
import localDB from "../utility/localDB";

const useFirstStorage = () => {
  const [storageDB, setStorageDB] = useState();

  const firstStorage = async () => {
    try {
      const data = await storage.getData();
      if (data) {
        setStorageDB(data);
      } else {
        const result = await storage.storeData(localDB);
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
