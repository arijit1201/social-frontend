import Feed from "../../components/feed/Feed"
import Rightbar from "../../components/rightbar/Rightbar"
import Sidebar from "../../components/sidebar/Sidebar"
import Topbar from "../../components/topbar/Topbar"
import "./profile.css"

export default function Profile() {
    const PF = process.env.REACT_APP_PUBLIC_FOLDER
    return (
        <>
            <Topbar/>
            <div className="profile">
                <Sidebar/>
                <div className="profileRight">
                    <div className="profileRightTop">
                        <div className="profileCover">
                            <img src={`${PF}post/3.jpeg`} alt="" className="profileCoverImg"/>
                            <img src={`${PF}person/3.jpeg`} alt="" className="profileUserImg"/>
                        </div>
                        <div className="profileInfo">
                            <h4 className="profileInfoName">Arijit Bruh</h4>
                            <span className="profileInfoDesc">Hello World ahsdgauoisdhj causoifhdauoh oishaoiphca</span>
                        </div>
                    </div>
                    <div className="profileRightBottom">
                        <Feed username="Marie"/>
                        <Rightbar profile/>
                    </div>
                </div>
            </div>
        </>
    )
}
