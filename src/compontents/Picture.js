import React from 'react'

const Picture = ({picture, file}) => {
    return (
        <div>
            <img src={file} alt="Picture" />
        </div>
    )
}

export default Picture
