
const getStoredApp = () => {
    const storeAppStr = localStorage.getItem("appList");

    if(storeAppStr){
        const storeAppData = JSON.parse(storeAppStr)
        return storeAppData
    }
    else{
        return [];
    }
}

const addToDB = (id) =>{
    const storeAppData = getStoredApp()
    storeAppData.push(id);
    const data = JSON.stringify(storeAppData)
    localStorage.setItem("appList" , data)
}

const removeFromDB= (id) =>{
    const storeAppData = getStoredApp();
    const remainingApps = storeAppData.filter((appId) => appId !== id);
    localStorage.setItem("appList", JSON.stringify(remainingApps));
}

export {addToDB, getStoredApp, removeFromDB}
