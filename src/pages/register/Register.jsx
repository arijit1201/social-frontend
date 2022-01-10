import './register.css'

export default function Register() {
    return (
        <div className='login'>
            <div className="loginWrapper">
                <div className="loginLeft">
                    <h3 className="loginLogo">Arisocial</h3>
                    <span className="loginDesc">Connect with Friends and the World around you on Arisocial</span>
                </div>
                <div className="loginRight">
                    <div className="loginBox">
                        <input placeholder="Username" className="loginInput" />
                        <input placeholder="Email" className="loginInput" />
                        <input placeholder="Password" className="loginInput" />
                        <input placeholder="Re-enter your password" className="loginInput" />
                        <button className="loginButton">Sign Up</button>
                        <button className="loginRegisterButton">Log into Your Account</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
