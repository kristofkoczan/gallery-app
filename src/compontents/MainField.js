import React from 'react'
import store from '../store'
import currentUser from '../getCurrentUser'

const MainField = () => {

    return (
        <div>
            <div>
                <h1>Welcome {currentUser()}</h1>
            </div>
        </div>
    )
}

export default MainField
