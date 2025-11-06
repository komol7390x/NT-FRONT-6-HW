import React from 'react'
import { loadState, saveState } from '../../config/storage'

export const AppContext = React.createContext()
const initialValue = loadState('user') || {
    userList: []
}

const appReducer = (state, action) => {
    switch (action.type) {
        case 'CREATE_USER':
            return { ...state, userList: [...state.userList, action.value] }
        case 'DELETE_USER':
            return {
                ...state,
                userList: state.userList.filter((item) => item.id !== action.id),
            }
        case 'UPDATE_USER':
            return {
                ...state, userList: state.userList.map((item) => item.id == action.id ?
                    { ...item, username: action.newName } : item),
            }
        default:
            return state
    }
}

export const AppContextProvider = ({ children }) => {
    const [data, dispatch] = React.useReducer(appReducer, initialValue)

    React.useEffect(() => {
        saveState('user', data)
    }, [data])

    return (
        <AppContext.Provider value={{ data, dispatch }}>
            {children}
        </AppContext.Provider>
    )
}
