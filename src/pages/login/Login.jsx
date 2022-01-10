import './login.css'

export default function Login() {
    return (
        <div className='login'>
            <div className="loginWrapper">
                <div className="loginLeft">
                    <h3 className="loginLogo">Arisocial</h3>
                    <span className="loginDesc">Connect with Friends and the World around you on Arisocial</span>
                </div>
                <div className="loginRight">
                    <div className="loginBox">
                        <input placeholder="email" className="loginInput" />
                        <input placeholder="password" className="loginInput" />
                        <button className="loginButton">Log In</button>
                        <span className="loginForgot">Forgot Password?</span>
                        <button className="loginRegisterButton">Create a New Account</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
