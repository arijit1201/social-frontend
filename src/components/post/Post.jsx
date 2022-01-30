import { MoreVert } from "@mui/icons-material"
import "./post.css"
// import {Users} from "../../dummyData"
import {useState, useEffect} from 'react'
import axios from 'axios'
import {format} from 'timeago.js'
import {Link} from 'react-router-dom'

function Post({post}) {

    const [like, setLike] = useState(post.likes.length)
    const [isLiked, setIsLiked] = useState(false)
    const [user, setUser] = useState({})
    const PF = process.env.REACT_APP_PUBLIC_FOLDER

    const likeHandler = () => {
        setLike(isLiked? like-1 : like+1)
        setIsLiked(!isLiked)
    }
    //need to ghet better undewrstanding of axios
    useEffect(async() => {
        const fetchUser = async() => {
            const res = await axios.get(`/users/${post.userId}`)
            // console.log(res)
            setUser(res.data)
        }
        fetchUser()
    }, [post.userId])

    return (
        <div className="post">
            <div className="postWrapper">
                <div className="postTop">
                    <div className="postTopLeft">
                        {/* <img src={`${PF}${Users.filter(u => u.id===post.userId)[0].profilePicture}`} alt="" className="postProfileImg" /> */}
                        <Link to={`profile/${user.username}`}>
                            <img src={user.profilePicture || PF+"person/noAvatar.png"} alt="" className="postProfileImg" />
                        </Link>
                        
                        {/* <span className="postUsername">{Users.filter(u => u.id===post.userId)[0].username}</span> */}
                        <span className="postUsername">{user.username}</span>
                        {/* <span className="postDate">{post.date}</span> */}
                        <span className="postDate">{format(post.createdAt)}</span>
                    </div>
                    <div className="postTopRight">
                        <MoreVert/>
                    </div>
                </div>
                <div className="postCenter">
                    <span className="postText">
                        {post?.desc}
                        {post.img && <img src={PF+post.img} alt="" className="postImg" />}
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
