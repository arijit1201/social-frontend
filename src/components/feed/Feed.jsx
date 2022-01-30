import "./feed.css"
import Share from "../share/Share"
import Post from "../post/Post"
// import {Posts} from "../../dummyData"
import {useState, useEffect} from 'react'
import axios from 'axios'

function Feed({username}) {

    const [posts, setPosts] = useState([])

    useEffect(async() => {
        const fetchPosts = async() => {
            // console.log(username)
            const res = 
            username ? await axios.get("/posts/profile/"+username) 
            : 
            await axios.get("/posts/timeline/61ce7fbf5850765ab08bf809")
            // console.log(res)
            setPosts(res.data)
        }
        fetchPosts()
    }, [username])

    return (
        <div className="feed">
            <div className="feedWrapper">
                <Share/>
                {posts.map( eachPost => {
                    return <Post key={eachPost._id} post={eachPost}/>
                })}
                
            </div>
        </div>
    )
}

export default Feed
