import { MoreVert } from "@mui/icons-material"
import "./post.css"
// import {Users} from "../../dummyData"
import {useState, useEffect} from 'react'
import axios from 'axios'
function Post({post}) {

    const [like, setLike] = useState(post.like)
    const [isLiked, setIsLiked] = useState(false)
    const [user, setUser] = useState({})
    const PF = process.env.REACT_APP_PUBLIC_FOLDER

    const likeHandler = () => {
        setLike(isLiked? like-1 : like+1)
        setIsLiked(!isLiked)
    }

    useEffect(async() => {
        const fetchUser = async() => {
            const res = await axios.get(`users/${post.userId}`)
            console.log(res)
            setUser(res.data)
        }
        fetchUser()
    }, [])

    return (
        <div className="post">
            <div className="postWrapper">
                <div className="postTop">
                    <div className="postTopLeft">
                        {/* <img src={`${PF}${Users.filter(u => u.id===post.userId)[0].profilePicture}`} alt="" className="postProfileImg" /> */}
                        <img src={user.profilePicture} alt="" className="postProfileImg" />
                        {/* <span className="postUsername">{Users.filter(u => u.id===post.userId)[0].username}</span> */}
                        <span className="postUsername">{user.username}</span>
                        <span className="postDate">{post.date}</span>
                    </div>
                    <div className="postTopRight">
                        <MoreVert/>
                    </div>
                </div>
                <div className="postCenter">
                    <span className="postText">
                        {post?.desc}
                        <img src={PF+post.photo} alt="" className="postImg" />
                    </span>
                </div>
                <div className="postBottom">
                    <div className="postBottomLeft">
                        <img src={`${PF}like.png`} alt="" className="likeIcon" onClick={likeHandler}/>
                        <img src={`${PF}heart.png`} alt="" className="likeIcon" onClick={likeHandler}/>
                        <span className="postLikeCounter">{like} people liked it</span>
                    </div>
                    <div className="postBottomRight">
                        <span className="postCommentText">{post.comment} Comments</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Post
