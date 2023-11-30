import React from "react";

function useLocalStorage(nameStorage,initialValue){
    

    var [itemStorage, setItemStorage] = React.useState(initialValue);
    var [storageLoading, setStorageLoading] = React.useState(true);
    var [storageError, setStorageError] = React.useState(false);

    let saveItem = (newItem) => {
        setItemStorage(newItem);
        localStorage.setItem(nameStorage, JSON.stringify(newItem));
    }
    console.log('se ejecuta');

    React.useEffect(() => {
        setTimeout(
            () => {
                try {
                    var itemStorageRaw = localStorage.getItem(nameStorage);
                    console.log('GetItem from LocalStorage');
                
                    if (itemStorageRaw) {
                    var itemStorageParsed = JSON.parse(itemStorageRaw);
                    setItemStorage(itemStorageParsed);
                    } else {
                    localStorage.setItem(nameStorage, JSON.stringify(initialValue));
                    }
                } catch (error) {
                    setStorageError(true);
                }
                setStorageLoading(false);
            }
        , 2000)
        
    }, [nameStorage,initialValue]); // Agregamos nameStorage como dependencia para que el efecto se ejecute cuando cambie

    return {
        itemStorage,
        saveItem,
        storageLoading,
        storageError,
    };
}

export {useLocalStorage}