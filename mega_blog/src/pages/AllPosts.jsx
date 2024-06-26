import React, {useState,useEffect} from 'react'
import service from '../appwrite/config'
import { PostCard, Container } from '../components'


function AllPosts() {
    const [posts, setPost] = useState([])
    useEffect(() => {},[])
    service.getPosts([]).then((posts) => {
        if (posts) {
            setPost(posts.documents)
        }
    })
  return (
    <div className='w-full py-8'>
        <Container>
           <div className='flex flex-wrap'>
            {
                posts.map((post) => (
                    <div key = {post.$id} className='p-2 w-1'>
                        <PostCard
                        post = {post}
                         />

                    </div>
                ))
            }
           </div>
        </Container>
    </div>
  )
}

export default AllPosts