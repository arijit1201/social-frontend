import "./rightbar.css"

function Rightbar() {
    return (
        <div className="rightbar">
            <div className="rightbarWrapper">
                <div className="birthdayContainer">
                    <img src="/assets/gift.png" alt="" className="birthdayImg" />
                    <span className="birthdayText"> <b>Naruto Uzumaki</b> and <b>3 others</b> have a birthday today</span>
                </div>
            </div>
        </div>
    )
}

export default Rightbar

