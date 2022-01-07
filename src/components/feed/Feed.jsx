import "./feed.css"
import Share from "../share/Share"
import Post from "../post/Post"
import {Posts} from "../../dummyData"


function Feed() {
    return (
        <div className="feed">
            <div className="feedWrapper">
                <Share/>
                {Posts.map( eachPost => {
                    return <Post key={eachPost.id} post={eachPost}/>
                })}
                
            </div>
        </div>
    )
}

export default Feed
