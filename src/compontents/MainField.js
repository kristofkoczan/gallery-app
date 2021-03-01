import React from 'react'
import store from '../store'

const MainField = () => {

    return (
        <div>
            <div>
                <h1>Welcome {store.getState()[0].username}</h1>
            </div>
        </div>
    )
}

export default MainField
