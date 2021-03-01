import React from 'react'

const DeleteButton = ({onDelete}) => {
    return (
            <FaTimes style={{ color: 'red', cursor: 'pointer'}} onClick={() => onDelete(picture.id) }/>
    )
}

export default DeleteButton
