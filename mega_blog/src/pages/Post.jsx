import React, {useEffect,useState} from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import service from '../appwrite/config'
import { Buttons, Container } from '../components'
import parse from 'html-react-parser'
import { useSelector } from 'react-redux'

function Post() {
    const navigate = useNavigate()
    const {slug} = useParams() 
    const [post,setPost] = useState(null)

    const userData = useSelector((state) => state.auth.userData )
    const isAuthor = post && userData ? post.userId === userId.$id : false;

    useEffect(() => {
        if (slug) {
            service.getPost(slug).then((post) => {
                if (post) setPost(post)
                else navigate('/')
            })
        }
    } ,[])
  return (
    <div>Post</div>
  )
}

export default Post