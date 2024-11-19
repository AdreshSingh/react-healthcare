

const USERSKEY = "dashboard-user";
export const useSave = () => {
    const saveSate = JSON.parse(localStorage.getItem(USERSKEY));
    const setSaveState = localStorage.setItem(USERSKEY, JSON.stringify(USERSKEY));
    return {
        saveSate,
        setSaveState
    }
}