import "./feed.css"
import Share from "../share/Share"
import Post from "../post/Post"
// import {Posts} from "../../dummyData"
import {useState, useEffect} from 'react'
import axios from 'axios'

function Feed() {

    const [posts, setPosts] = useState([])

    useEffect(async() => {
        const fetchPosts = async() => {
            const res = await axios.get("posts/timeline/61ce7fbf5850765ab08bf809")
            console.log(res)
            setPosts(res.data)
        }
        fetchPosts()
    }, [])

    return (
        <div className="feed">
            <div className="feedWrapper">
                <Share/>
                {posts.map( eachPost => {
                    return <Post key={eachPost.id} post={eachPost}/>
                })}
                
            </div>
        </div>
    )
}

export default Feed
