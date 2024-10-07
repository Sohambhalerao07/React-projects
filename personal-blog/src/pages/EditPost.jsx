import React, { useEffect, useState } from 'react'
import { useNavigate, useParams, useSearchParams } from 'react-router-dom'
import service from '../appwrite/appwriteconfig'

function EditPost() {
    const [posts,setPosts]= useState([])
    const {path}=useParams()
    const navigate = useNavigate()
    useEffect(()=>{
        if(path){
            service.getPost(path).then((posts)=>{
                if(posts)
                    setPosts(posts)
            })
        }else{
            navigate('/')
        }

    },[path,navigate])
  return posts ?(
    <div className='py-8'>
    <Container>
        <PostForm post={post} />
    </Container>
</div>
) : null
}

export default EditPost
