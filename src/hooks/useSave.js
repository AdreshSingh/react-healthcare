

const USERSKEY = "dashboard-user";
export const useSave = () => {
    let saveSate = [];
    let userData = localStorage.getItem(USERSKEY)

    const setSaveState = (data) => (localStorage.setItem(USERSKEY, JSON.stringify(data)));
    if (userData != null) {
        return {
            saveSate: JSON.parse(userData),
            setSaveState
        }
    }
    return {
        saveSate,
        setSaveState
    }
}