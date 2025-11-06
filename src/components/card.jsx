import React from 'react'
import { AppContext } from '../context/app-context/app-context'

export const Card = ({ username, id }) => {
    const { dispatch } = React.useContext(AppContext)
    const [edit, setEdit] = React.useState(false)
    const [newName, setNewName] = React.useState(username)


    const deleteItem = () => {
        dispatch({ type: 'DELETE_USER', id })
    }

    const updateItem = () => {
        setEdit(true)
    }

    const saveItem = () => {
        if (newName.trim() == '') return
        dispatch({ type: 'UPDATE_USER', id, newName })
        setEdit(false)
    }

    return (
        <div className='border my-3 border-blue-300 p-5'>
            {/* username */}
            {edit ? (<input type='text' value={newName} className='border'
                onChange={(emit) => setNewName(emit.target.value)}
            />) : (<h2 className='text-4xl'>{username}</h2>)}

            {/* button */}
            <div className='flex gap-4 mt-3'>
                {edit ? (<button onClick={saveItem} className='p-3 bg-green-400 cursor-pointer rounded-[10px]'>
                    save</button>) : (<button className='p-3 bg-yellow-300 cursor-pointer rounded-[10px]' onClick={updateItem}>
                        update
                    </button>)}
                <button
                    onClick={deleteItem}
                    className='p-3 bg-red-400 cursor-pointer rounded-[10px]'
                >
                    delete
                </button>
            </div>
        </div>
    )
}
