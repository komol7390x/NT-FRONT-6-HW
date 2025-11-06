export const loadState = (key) => {
    try {
        const serailizedState = localStorage.getItem(key);
        if (!serailizedState) return undefined;
        return JSON.parse(serailizedState)
    } catch (error) {
        console.log()
        return undefined
    }
}

export const saveState = (key, state) => {
    try {
        const serailizedState = JSON.stringify(state);
        localStorage.setItem(key, serailizedState);
    } catch (error) {
        console.log('Error localStorage: ', error.message);
        return undefined
    }
}