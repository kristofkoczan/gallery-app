import React from 'react'
import Picture from './Picture'
import store from '../store'

const pictures = [
    {   
        id: "1",
        title: "file",
        username: "admin",
        file: "https://images.unsplash.com/photo-1550262838-265efb9b449d?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8c3plZ2VkfGVufDB8fDB8&ixlib=rb-1.2.1&w=1000&q=80"
    },
    {   
        id: "2",
        title: "file",
        username: "admin",
        file: "https://dbtribute.org/wp-content/uploads/2020/10/Different-Types-of-Photography.jpg"
    },
    {   
        id: "3",
        title: "file",
        username: "admin",
        file: "https://lh3.googleusercontent.com/proxy/lZShDohupgpbTGQ6aNaXG8ysyOF7moGiWuBv0l3Ch9MrVGogtM0unfGs4aINJaRqyTrNzwiHy35icRUefIUC-bbUkoZ5crNAr4HMYmLbsqmCkZL2KH-1YZcN-rzp6QfG2tq-h0aO"
    },
    {   
        id: "4",
        title: "file",
        username: "admin",
        file: "https://lh3.googleusercontent.com/proxy/aqzk-8FtWi-wDwv2BEZBwTVUvemmCG7tEAeVJPeJzdM6Lu82hw3rwDKdJwJ4VQslJZAEEpDJbqikdz-Y4-0fScdCCS2cINHZYwg"
    },
    {   
        id: "5",
        title: "file",
        username: "admin",
        file: "https://solomonturner.com/wp-content/uploads/2019/11/Photography.jpg"
    },
]


const Pictures = () => {
    return (
        <>
            <div>
                {pictures.map((picture) => (
                    <Picture key={picture.id} picture={picture} file={picture.file}/>
                ))} 
                
            </div>
        </>
    )
}

export default Pictures
