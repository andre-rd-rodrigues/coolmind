import React, { useEffect, useState } from "react";
import useFirstStorage from "./app/hooks/useFirstStorage";
import StorageContext from "./app/storage/context";
import OfflineNotice from "./app/components/OfflineNotice";
import AppLoad from "./app/components/AppLoad";
import "react-native-get-random-values";

//see storage showAsyncStorageContentInDev()

export default function App() {
  const { storageDB, setStorageDB } = useFirstStorage();

  return (
    <StorageContext.Provider value={{ storageDB, setStorageDB }}>
      <OfflineNotice />
      <AppLoad />
    </StorageContext.Provider>
  );
}
